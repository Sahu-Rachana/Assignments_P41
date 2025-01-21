import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";


async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    await app.listen(3000);
}
bootstrap();





/*
// All code written in one main.ts file //

import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
    @Get()
    getRootRoute() {
        return 'hi there!';
    }
}

@Module({
    controllers: [AppController]
})
class AppModule {}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    await app.listen(3000);
}
bootstrap();*/