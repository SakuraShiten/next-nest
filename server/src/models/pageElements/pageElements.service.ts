import {Injectable} from "@nestjs/common";
import {ElementsService} from "@/models/elements/elements.service";
import {ElementCreateDto} from "@/models/pageElements/dto/elements.dto";
import {EntityManager} from "typeorm";

@Injectable()
export class PageElementsService {
    constructor(
        private readonly elementsService: ElementsService,
    ) {
    }

    async create({pageId, element, transaction}: {
        pageId: number, element: ElementCreateDto, transaction: EntityManager
    }) {
        return await this.elementsService.create({pageId, element, transaction})
    }

    async delete({pageId, elementId}: { pageId: number, elementId: number }) {
        await this.elementsService.isExist({pageId, elementId})
        await this.elementsService.delete(elementId)
    }

    async get({pageId}: { pageId: number }) {
        return await this.elementsService.get({pageId})
    }
}