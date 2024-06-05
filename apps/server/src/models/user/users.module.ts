import {Module} from '@nestjs/common';
import {UsersController} from "./users.controller";
import {UsersService} from "@/models/user/users.service";
import {Users} from "@/models/user/models/user.model";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Roles} from "@/models/user/models/role.model";

@Module({
    imports: [
        TypeOrmModule.forFeature([Users, Roles])
    ],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService]
})
export class UsersModule {
}
