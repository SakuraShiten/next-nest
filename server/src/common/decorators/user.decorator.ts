import {createParamDecorator, ExecutionContext} from "@nestjs/common";
import {UserRolesTypes} from "@/common/types/types";

export type UserType = {
    id: number;
    login: string;
    roles: UserRolesTypes[];
}

export const User = createParamDecorator(
    (data: unknown, ctx: ExecutionContext): UserType => {
        const request = ctx.switchToHttp().getRequest()
        return request.raw.user
    },
);
