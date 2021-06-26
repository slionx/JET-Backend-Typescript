import { Module } from "@nestjs/common";
import { CoreService } from "./core/core.service";
import { UtilService } from "./util/util.service";

@Module({
    providers: [CoreService, UtilService],
})
export class SystemModule {}
