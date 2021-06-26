import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { CoreService } from "./modules/system/core/core.service";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const coreService = app.select(AppModule).get(CoreService);

    coreService.init();

    await app.listen(3000);
}

bootstrap();
