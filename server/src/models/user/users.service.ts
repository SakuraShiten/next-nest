import {ForbiddenException, HttpException, Injectable} from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "@/models/user/models/user.model";
import {Repository} from "typeorm";
import {Roles} from "@/models/user/models/role.model";
import {JwtService} from "@nestjs/jwt";
import {UsersCreateDto} from "@/models/user/dto/users.dto";
import {UserRolesTypes} from "@/common/types/types";

@Injectable()
export class UsersService {
    constructor(
        private jwtService: JwtService,
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        @InjectRepository(Roles)
        private rolesRepository: Repository<Roles>
    ) {
    }

    async generateJwt({payload}: any) {
        return await this.jwtService.signAsync(payload)
    }

    async create(user: UsersCreateDto) {
        const candidate = await this.usersRepository.findOne({where: {login: user.login}})
        if (candidate) throw new HttpException('Пользователь с таким логином уже существует', 400)
        const hash = await bcrypt.hash(user.password, 1)
        const newUser = await this.usersRepository.save({
            ...user, password: hash, roles: [{role: 'USER'}]
        })
        return await this.generateJwt({payload: {id: newUser.id}})
    }

    async auth(user: UsersCreateDto) {
        const candidate = await this.usersRepository.findOne({
            where: {login: user.login}
        })
        if (!candidate) throw new HttpException('Пользователь не найден', 400)
        const isPasswordEquals = await bcrypt.compare(user.password, candidate.password)
        if (!isPasswordEquals) throw new HttpException('Пользователь не найден', 400)
        return await this.generateJwt({payload: {id: candidate.id}})
    }

    async findOne(id: number) {
        return await this.usersRepository.findOne({where: {id}, relations: ['roles']})
    }

    async updateVisit(id: string) {
        return await this.usersRepository.update(id, {visitAt: new Date()})
    }

    async isRole(userId: number, role: UserRolesTypes) {
        const candidate = await this.rolesRepository.findOne({
            where: {id: userId, role: role}
        })
        if (!candidate) throw new ForbiddenException()
    }
}