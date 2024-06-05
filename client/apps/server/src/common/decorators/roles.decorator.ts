import {Reflector} from '@nestjs/core';
import {UserRolesTypes} from "@/common/types/types";

export const Roles = Reflector.createDecorator<UserRolesTypes | UserRolesTypes[]>();