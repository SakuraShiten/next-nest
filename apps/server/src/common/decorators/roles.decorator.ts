import {Reflector} from '@nestjs/core';
import {UserRolesTypes} from "@repo/zod/src/types";

export const Roles = Reflector.createDecorator<UserRolesTypes | UserRolesTypes[]>();