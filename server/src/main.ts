import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {FastifyAdapter, NestFastifyApplication} from "@nestjs/platform-fastify";
import cors from '@fastify/cors'

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
        {cors: true}
    )


    app.setGlobalPrefix('api')
    await app.register(cors,{
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: '*',
        exposedHeaders: '*',
        credentials: true
    })
    const config = new DocumentBuilder()
        .addSecurity('bearer', {type: 'http', scheme: 'bearer'})
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('openapi', app, document)


    await app.listen(5000, '0.0.0.0')
    console.log(`Application is running on: ${await app.getUrl()}`)
}

bootstrap()
