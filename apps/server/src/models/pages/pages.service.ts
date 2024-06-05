import {InjectRepository} from "@nestjs/typeorm";
import {Pages} from "./models/pages.model";
import {EntityManager, FindOptionsWhere, Repository} from "typeorm";
import {HttpException, Injectable} from "@nestjs/common";
import {ElementsService} from "@/models/elements/elements.service";
import {PagesCreateDto} from "@repo/zod/src/pages";

@Injectable()
export class PagesService {
    constructor(
        @InjectRepository(Pages)
        private readonly pagesRepository: Repository<Pages>,
        private readonly elementsService: ElementsService,
    ) {
    }

    pagesLimit = 100

    async isUnique({page, userId, transaction}: {
        page: PagesCreateDto, userId: number, transaction?: EntityManager
    }) {
        const pagesWhere: FindOptionsWhere<Pages>[] = [
            {url: page.url, user: {id: userId}},
            {title: page.title, user: {id: userId}}
        ]

        const candidate = transaction
            ? await transaction.findOne(Pages, {where: pagesWhere, lock: {mode: 'dirty_read'}})
            : await this.pagesRepository.findOne({where: pagesWhere})

        if (candidate?.title === page.title)
            throw new HttpException(`Страница с заголовком "${page.title}" существует`, 400)
        if (candidate?.url === page.url)
            throw new HttpException(`Страница c url "${page.url}" существует`, 400)
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

    async create({page, userId, transaction}: {
        page: PagesCreateDto, userId: number, transaction: EntityManager
    }) {
        await this.isUnique({page, userId, transaction})
        return await transaction.save(Pages, {
            ...page, user: {id: userId}
        })
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