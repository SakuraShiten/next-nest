import {InjectRepository} from "@nestjs/typeorm";
import {HttpException, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Elements} from "./models/elements.model";
import {Texts} from "./models/texts.model";
import {Headers} from "./models/headers.model";
import {ElementCreateDto, ElementsResDto, ElementUpdatePositionDto} from "@/models/pageElements/dto/elements.dto";

@Injectable()
export class ElementsService {
    constructor(
        @InjectRepository(Elements)
        private elementsRepository: Repository<Elements>,
        @InjectRepository(Texts)
        private textsRepository: Repository<Texts>,
        @InjectRepository(Headers)
        private headersRepository: Repository<Headers>
    ) {
    }

    async createHeader({pageId, element}: { pageId: number, element: ElementCreateDto }) {
        const header = await this.headersRepository.save({
            header: element.header, pageId
        })
        return header.id
    }

    async createText({pageId, element}: { pageId: number, element: ElementCreateDto }) {
        const text = await this.textsRepository.save({
            text: element.text, pageId
        })
        return text.id
    }

    async create({pageId, element}: { pageId: number, element: ElementCreateDto }) {
        const lastPosition = (await this.elementsRepository.findOne({
            where: {page: {id: pageId}}, order: {position: 'DESC'}
        }))?.position

        let itemId: number = 0
        if (element.type === 'header') itemId = await this.createHeader({pageId, element})
        if (element.type === 'text') itemId = await this.createText({pageId, element})
        const newElement = await this.elementsRepository.save({
            type: element.type, itemId, page: {id: pageId},
            position: lastPosition !== undefined ? lastPosition + 1 : 0
        })
        return newElement.id
    }

    async isExist({pageId, elementId}: { pageId: number, elementId: number }) {
        const element = await this.elementsRepository.findOne({
            where: {id: elementId, page: {id: pageId}}
        })
        if (!element) throw new HttpException('Элемент не найден', 404)
    }

    async delete(elementId: number) {
        const element = await this.elementsRepository.findOneBy({id: elementId})
        if (element?.type === 'header') await this.headersRepository.delete({id: element.itemId})
        if (element?.type === 'text') await this.textsRepository.delete({id: element.itemId})
        await this.elementsRepository.delete({id: elementId})
    }

    async get({pageId}: { pageId: number }) {
        const elements = await this.elementsRepository.find({
            where: {page: {id: pageId}}, order: {position: 'ASC'}
        })
        const elementsList: ElementsResDto = []
        for (let element of elements) {
            if (element.type === 'header') {
                const header = await this.headersRepository.findOneBy({id: element.itemId})
                if (!header) continue
                elementsList.push({...element, header})
            }
            if (element.type === 'text') {
                const text = await this.textsRepository.findOneBy({id: element.itemId})
                if (!text) continue
                elementsList.push({...element, text})
            }
        }
        return elementsList
    }

    async updatePosition({data, pageId}: { data: ElementUpdatePositionDto, pageId: number }) {
        for (let i = 0; i < data.length; i++) {
            await this.elementsRepository.update({
                id: data[i], page: {id: pageId}
            }, {position: i})
        }
    }
}