import {ApiOkResponse, ApiParam, ApiQuery, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query} from "@nestjs/common";
import {PagesService} from "./pages.service";
import {
    PageElementsResSchema,
    PageResSchema,
    PagesCreateDto,
    PagesCreateResSchema,
    PagesCreateSchema,
    PagesResSchema
} from "./dto/pages.dto";
import {ApiBadRequestResponseZod} from "@/common/decorators/apiBadRequestResponseZod.decorator";
import {User, UserType} from "@/common/decorators/user.decorator";
import {ResponseZod} from "@/common/decorators/responseZod.decorator";
import {RequestZod} from "@/common/decorators/requestZod.decorator";
import {Transaction} from "@/common/decorators/transaction.decorator";
import {TransactionBody} from "@/common/decorators/transactionBody.decorator";
import {EntityManager} from "typeorm";

@ApiTags('Pages')
@Controller('pages')
export class PagesController {
    constructor(private readonly pagesService: PagesService) {
    }

    @Get('health')
    async health() {
        return 'OK'
    }

    @Get()
    @ApiQuery({name: 'page', required: false, type: Number})
    @ResponseZod(PagesResSchema)
    async findAll(
        @Query('page', new ParseIntPipe({optional: true})) page: number
    ) {
        return await this.pagesService.findAll({page})
    }

    @Get('my')
    @ResponseZod(PagesResSchema)
    async myGet(
        @User() {id: userId}: UserType
    ) {
        return await this.pagesService.myGet(userId)
    }

    @Post()
    @RequestZod(PagesCreateSchema)
    @Transaction()
    @ResponseZod(PagesCreateResSchema)
    async create(
        @Body() page: PagesCreateDto,
        @User() {id: userId}: UserType,
        @TransactionBody() transaction: EntityManager
    ) {
        return await this.pagesService.create({page, userId, transaction})
    }

    @Get('/:userLogin/:pageUrl')
    @ApiParam({name: 'userLogin', type: String})
    @ApiParam({name: 'pageUrl', type: String})
    @ResponseZod(PageElementsResSchema)
    async findOne(
        @Param('userLogin') userLogin: string,
        @Param('pageUrl') pageUrl: string
    ) {
        return await this.pagesService.findByUrl({userLogin, pageUrl})
    }

    @Put(':pageId')
    @ApiParam({name: 'pageId', type: Number})
    @ApiOkResponse({type: Boolean})
    @ApiBadRequestResponseZod()
    @RequestZod(PagesCreateSchema)
    async update(
        @Param('pageId', new ParseIntPipe()) pageId: number,
        @Body() page: PagesCreateDto,
        @User() {id: userId}: UserType
    ) {
        await this.pagesService.isOwner({userId, pageId})
        await this.pagesService.update(pageId, page)
        return true
    }

    @Delete(':pageId')
    @ApiParam({name: 'pageId', type: Number})
    @ApiOkResponse({type: Boolean})
    @ApiBadRequestResponseZod()
    async remove(
        @Param('pageId', new ParseIntPipe()) pageId: number,
        @User() {id: userId}: UserType
    ) {
        await this.pagesService.isOwner({userId, pageId})
        await this.pagesService.remove(pageId)
        return true
    }

    @Get(':id')
    @ApiParam({name: 'id', type: Number})
    @ResponseZod(PageResSchema)
    async get(
        @Param('id', new ParseIntPipe()) id: number,
        @User() {id: userId}: UserType
    ) {
        await this.pagesService.isOwner({userId, pageId: id})
        return await this.pagesService.get(id)
    }
}