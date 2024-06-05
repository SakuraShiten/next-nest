import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {Roles} from "@/common/decorators/roles.decorator";
import {UserType} from "@/common/decorators/user.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get(Roles, context.getHandler())
        if (!roles) return true
        const request = context.switchToHttp().getRequest()
        const user = request.raw.user as UserType
        return typeof roles === 'string'
            ? user.roles.includes(roles)
            : user.roles.some(role => roles.includes(role))
    }
}