import {InjectRepository} from "@nestjs/typeorm";
import {Pages} from "./models/pages.model";
import {DataSource, Repository} from "typeorm";
import {HttpException, Injectable} from "@nestjs/common";
import {PagesCreateDto} from "./dto/pages.dto";
import {ElementsService} from "@/models/elements/elements.service";

@Injectable()
export class PagesService {
    constructor(
        @InjectRepository(Pages)
        private readonly pagesRepository: Repository<Pages>,
        private readonly elementsService: ElementsService,
        private readonly dataSource: DataSource
    ) {
    }

    pagesLimit = 100

    async isUnique({page, userId}: { page: PagesCreateDto, userId: number }) {
        const candidateTitle = await this.pagesRepository.findOne({
            where: {title: page.title, user: {id: userId}}
        })
        if (candidateTitle) throw new HttpException(`Страница с заголовком "${page.title}" существует`, 400)
        const candidateUrl = await this.pagesRepository.findOne({
            where: {url: page.url, user: {id: userId}}
        })
        if (candidateUrl) throw new HttpException(`Страница c url "${page.url}" существует`, 400)
    }

    async isExist(id: number) {
        const candidate = await this.pagesRepository.findOne({where: {id}})
        if (!candidate) throw new HttpException(`Страница с id "${id}" не найдена`, 400)
    }

    async findAll({page}: { page?: number }) {
        const [pages, count] = await this.pagesRepository.findAndCount({
            take: this.pagesLimit,
            skip: page ? this.pagesLimit * (page - 1) : 0
        })
        return {count: Math.ceil(count / this.pagesLimit), pages}
    }

    async myGet(userId: number) {
        return await this.pagesRepository.find({
            where: {user: {id: userId}}, order: {id: 'DESC'}
        })
    }

    async isOwner({userId, pageId}: { userId: number, pageId: number }) {
        const candidate = await this.pagesRepository.findOne({where: {id: pageId, user: {id: userId}}})
        if (!candidate) throw new HttpException(`Страница с id "${pageId}" не найдена`, 400)
    }

    async create({page, userId}: { page: PagesCreateDto, userId: number }) {
        await this.isUnique({page, userId})
        return (await this.pagesRepository.save({
            ...page, user: {id: userId}
        })).id
    }

    async findByUrl({userLogin, pageUrl}: { userLogin: string, pageUrl: string }) {
        const page = await this.pagesRepository.findOneBy({
            url: pageUrl, isPublished: true, user: {login: userLogin}
        })
        if (!page) throw new HttpException(`Страница по url "${userLogin}/${pageUrl}" не найдена`, 404)
        const elements = await this.elementsService.get({pageId: page.id})

        return {page, elements}
    }

    async update(id: number, page: PagesCreateDto) {
        await this.isExist(id)
        await this.pagesRepository.update(id, {...page, updateAt: new Date()})
    }

    async remove(id: number) {
        await this.isExist(id)
        await this.pagesRepository.delete(id)
    }

    async get(id: number) {
        return await this.pagesRepository.findOneBy({id})
    }
}