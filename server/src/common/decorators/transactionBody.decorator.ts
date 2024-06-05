import {createParamDecorator, ExecutionContext} from "@nestjs/common";
import {QueryRunner} from "typeorm";

export const TransactionBody = createParamDecorator(
    (data: unknown, ctx: ExecutionContext): QueryRunner => {
        const request = ctx.switchToHttp().getRequest()
        return request.raw.transaction.manager
    },
);
