import {ApiOkResponse, ApiQuery, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import {UsersService} from "@/models/user/users.service";
import {User, UserType} from "@/common/decorators/user.decorator";
import {ApiBadRequestResponseZod} from "@/common/decorators/apiBadRequestResponseZod.decorator";
import {RequestZod} from "@/common/decorators/requestZod.decorator";
import {ResponseZod} from "@/common/decorators/responseZod.decorator";
import {Transaction} from "@/common/decorators/transaction.decorator";
import {TransactionBody} from "@/common/decorators/transactionBody.decorator";
import {EntityManager} from "typeorm";
import {UserResSchema, UsersCreateDto, UsersCreateResSchema, UsersCreateSchema} from "@repo/zod";
import {UserRolesArray, UserRolesTypes} from "@repo/zod/src/types";


@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post('/registration')
    @RequestZod(UsersCreateSchema)
    @Transaction()
    @ResponseZod(UsersCreateResSchema)
    async registration(
        @Body() user: UsersCreateDto,
        @TransactionBody() transaction: EntityManager
    ) {
        const newUser = await this.usersService.create({user, transaction})
        return {token: newUser}
    }

    @Post('/auth')
    @RequestZod(UsersCreateSchema)
    @ResponseZod(UsersCreateResSchema)
    async auth(@Body() user: UsersCreateDto) {
        const newUser = await this.usersService.auth(user)
        return {token: newUser}
    }

    @Get('/me')
    @ResponseZod(UserResSchema)
    async me(@User() user: UserType) {
        return await this.usersService.findOne(user.id)
    }

    @Get('/verify')
    @ApiQuery({name: 'role', required: false, enum: UserRolesArray})
    @ApiOkResponse({type: Boolean})
    @ApiBadRequestResponseZod()
    async verify(
        @User() user: UserType,
        @Query('role') role: UserRolesTypes
    ) {
        if (role) await this.usersService.isRole(user.id, role)
        return true
    }
}