import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {AuthMiddleware, excludeConfig} from "@/common/middlewares/auth.middleware";
import {JwtModule} from "@nestjs/jwt";
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
import {ConfigModule} from "@nestjs/config";
import databaseConfig from "@/common/config/database.config";
import jwtConfig from "@/common/config/jwt.config";
import {UsersModule} from "@/models/user/users.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [databaseConfig, jwtConfig]
        }),

        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET
        }),

        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DATABASE_HOST,
            port: +process.env.DATABASE_PORT!,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            entities: [
                Users, Roles, Pages, Elements, Headers, Texts
            ],
            synchronize: true
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
        consumer.apply(AuthMiddleware).exclude(...excludeConfig).forRoutes('*')
    }
}
