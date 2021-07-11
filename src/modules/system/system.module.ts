import { Module } from "@nestjs/common";
import { CoreService } from "./core/core.service";
import { SystemController } from "./system.controller";
import { UtilService } from "./util/util.service";

@Module({
    providers: [
        CoreService, 
        UtilService
    ],
    controllers: [SystemController]
})
export class SystemModule {}
