import {ApiOkResponse, ApiQuery, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import {UserResSchema, UsersCreateDto, UsersCreateResSchema, UsersCreateSchema} from "@/models/user/dto/users.dto";
import {UsersService} from "@/models/user/users.service";
import {User, UserType} from "@/common/decorators/user.decorator";
import {UserRolesArray, UserRolesTypes} from "@/common/types/types";
import {ApiBadRequestResponseZod} from "@/common/decorators/apiBadRequestResponseZod.decorator";
import {RequestZod} from "@/common/decorators/requestZod.decorator";
import {ResponseZod} from "@/common/decorators/responseZod.decorator";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post('/registration')
    @RequestZod(UsersCreateSchema)
    @ResponseZod(UsersCreateResSchema)
    async registration(@Body() user: UsersCreateDto) {
        const newUser = await this.usersService.create(user)
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