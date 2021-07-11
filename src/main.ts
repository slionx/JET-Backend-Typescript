import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { CoreService } from "./modules/system/core/core.service";
import { UtilService } from "./modules/system/util/util.service";
import * as compression from 'compression';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const coreService = app.select(AppModule).get(CoreService);
    app.use(compression());
    coreService.init();
    await app.listen(coreService.config.port, coreService.config.ipAddress);
}

bootstrap();
