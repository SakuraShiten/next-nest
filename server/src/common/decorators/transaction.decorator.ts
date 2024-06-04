import {createParamDecorator, ExecutionContext} from "@nestjs/common";
import {QueryRunner} from "typeorm";

export const Transaction = createParamDecorator(
    (data: unknown, ctx: ExecutionContext): QueryRunner => {
        const request = ctx.switchToHttp().getRequest()
        return request.raw.transaction
    },
);
