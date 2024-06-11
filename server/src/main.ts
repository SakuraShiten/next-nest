import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {FastifyAdapter, NestFastifyApplication} from "@nestjs/platform-fastify";
import fastifyCors from "@fastify/cors";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter()
    )
    app.register(fastifyCors, {
        origin: true, // Разрешить все источники
        methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    });
    app.setGlobalPrefix('api')

    const config = new DocumentBuilder()
        .addSecurity('bearer', {type: 'http', scheme: 'bearer'})
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('openapi', app, document)

    await app.listen(5000)
    console.log(`Application is running on: ${await app.getUrl()}`)
}

bootstrap()
