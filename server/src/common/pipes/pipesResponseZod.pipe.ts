import {CallHandler, ExecutionContext, Injectable, InternalServerErrorException, NestInterceptor} from "@nestjs/common";
import {ZodSchema} from "zod";
import {map} from "rxjs/operators";

@Injectable()
export class PipesResponseZod implements NestInterceptor {
    constructor(private readonly schema: ZodSchema) {}

    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(
            map((data) => {
                try {
                    const parsedData = this.schema.parse(data);
                    return parsedData;
                } catch (error) {
                    throw new InternalServerErrorException('Response validation failed');
                }
            }),
        );
    }
}