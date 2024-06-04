import {Injectable} from "@nestjs/common";
import {ElementsService} from "@/models/elements/elements.service";
import {ElementCreateDto} from "@/models/pageElements/dto/elements.dto";
import {DataSource} from "typeorm";

@Injectable()
export class PageElementsService {
    constructor(
        private readonly elementsService: ElementsService,
        private readonly dataSource: DataSource
    ) {
    }

    async create({pageId, element}: { pageId: number, element: ElementCreateDto }) {
        return await this.elementsService.create({pageId, element})
    }

    async delete({pageId, elementId}: { pageId: number, elementId: number }) {
        await this.elementsService.isExist({pageId, elementId})
        await this.elementsService.delete(elementId)
    }

    async get({pageId}: { pageId: number }) {
        const elements = await this.elementsService.get({pageId})
        return elements
    }
}