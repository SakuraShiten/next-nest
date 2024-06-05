import {Injectable, NestMiddleware, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {FastifyRequest, FastifyReply} from 'fastify'
import {UsersService} from "@/models/user/users.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService
    ) {
    }

    async use(req: FastifyRequest, res: FastifyReply, next: () => void) {
        const token = req.headers.authorization
        if (!token) throw new UnauthorizedException()
        try {
            const payload = await this.jwtService.verifyAsync(token)
            const user = await this.usersService.findOne(payload.id)
            if (!user) throw new UnauthorizedException()
            this.usersService.updateVisit(payload.id).then()
            req['user'] = {id: payload.id, login: user.login, roles: user.roles.map(role => role.role)}
        } catch (e) {
            throw new UnauthorizedException();
        }
        next()
    }
}