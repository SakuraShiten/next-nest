import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {PageElementsService} from "@/models/pageElements/pageElements.service";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {
    ElementCreateDto,
    ElementCreateResSchema,
    ElementCreateSchema,
    ElementsResSchema, ElementUpdatePositionDto,
    ElementUpdatePositionSchema
} from "./dto/elements.dto";
import {ApiBadRequestResponseZod} from "@/common/decorators/apiBadRequestResponseZod.decorator";
import {RequestZod} from "@/common/decorators/requestZod.decorator";
import {ResponseZod} from "@/common/decorators/responseZod.decorator";
import {User, UserType} from "@/common/decorators/user.decorator";
import {PagesService} from "@/models/pages/pages.service";
import {ElementsService} from "@/models/elements/elements.service";

@Controller('pages/:pageId/elements')
@ApiTags('Page Elements')
export class PageElementsController {
    constructor(
        private readonly pageElementsService: PageElementsService,
        private readonly pagesService: PagesService,
        private readonly elementsService: ElementsService
    ) {
    }

    @Post()
    @RequestZod(ElementCreateSchema)
    @ResponseZod(ElementCreateResSchema)
    async create(
        @Param('pageId', new ParseIntPipe()) pageId: number,
        @Body() element: ElementCreateDto,
        @User() {id: userId}: UserType
    ) {
        await this.pagesService.isOwner({pageId, userId})
        const elementId = await this.pageElementsService.create({pageId, element})
        return {id: elementId}
    }

    @Delete(':elementId')
    @ApiResponse({type: Boolean})
    @ApiBadRequestResponseZod()
    async delete(
        @Param('pageId', new ParseIntPipe()) pageId: number,
        @Param('elementId', new ParseIntPipe()) elementId: number
    ) {
        await this.pageElementsService.delete({pageId, elementId})
        return true
    }

    @Get()
    @ResponseZod(ElementsResSchema)
    async get(
        @Param('pageId', new ParseIntPipe()) pageId: number
    ) {
        return this.pageElementsService.get({pageId})
    }

    @Put('positions')
    @RequestZod(ElementUpdatePositionSchema)
    @ApiResponse({type: Boolean})
    async updatePosition(
        @Param('pageId', new ParseIntPipe()) pageId: number,
        @Body() data: ElementUpdatePositionDto,
        @User() {id: userId}: UserType
    ) {
        await this.pagesService.isOwner({pageId, userId})
        await this.elementsService.updatePosition({data, pageId})
        return true
    }
}