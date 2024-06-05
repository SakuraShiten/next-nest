import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from "@nestjs/common";
import {catchError, tap} from "rxjs";
import {DataSource} from "typeorm";

@Injectable()
export class TransactionInterceptor implements NestInterceptor {
    constructor(
        private readonly dataSource: DataSource
    ) {
    }

    async intercept(context: ExecutionContext, next: CallHandler) {
        const request = context.switchToHttp().getRequest().raw
        const queryRunner = this.dataSource.createQueryRunner()
        await queryRunner.connect()
        await queryRunner.startTransaction()
        request['transaction'] = queryRunner

        return next
            .handle()
            .pipe(
                tap(async () => {
                    await queryRunner.commitTransaction()
                    await queryRunner.release()
                }),
                catchError(async (err) => {
                    await queryRunner.rollbackTransaction()
                    await queryRunner.release()
                    throw err
                })
            );
    }
}