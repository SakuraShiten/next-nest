import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {AuthMiddleware} from "@/common/middlewares/auth.middleware";
import {JwtModule} from "@nestjs/jwt";
import {UsersModule} from "@/models/user/users.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PagesModule} from "@/models/pages/pages.module";
import {ElementsModule} from "@/models/elements/elements.module";
import {PageElementsModule} from "@/models/pageElements/pageElements.module";
import {Users} from "@/models/user/models/user.model";
import {Roles} from "@/models/user/models/role.model";
import {Pages} from "@/models/pages/models/pages.model";
import {Elements} from "@/models/elements/models/elements.model";
import {Texts} from "@/models/elements/models/texts.model";
import {APP_GUARD} from "@nestjs/core";
import {RolesGuard} from "@/common/guards/roles.guard";
import {Headers} from "@/models/elements/models/headers.model";

@Module({
    imports: [
        JwtModule.register({
            secret: 'myKey',
            global: true,
            signOptions: {expiresIn: '30d'}
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'test',
            synchronize: true,
            entities: [
                Users, Roles, Pages, Elements, Headers, Texts
            ],
            // dropSchema: true,
        }),
        UsersModule,
        PagesModule,
        ElementsModule,
        PageElementsModule,
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: RolesGuard
        }
    ],
    exports: [
        JwtModule
    ]
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .exclude(
                {path: '/users/registration', method: RequestMethod.POST},
                {path: '/users/auth', method: RequestMethod.POST},
                {path: '/pages/:userLogin/:pageUrl', method: RequestMethod.GET},
            )
            .forRoutes('*')
    }
}
