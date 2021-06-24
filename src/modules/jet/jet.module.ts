import { Module } from "@nestjs/common";
import { CoreService } from "./core/core.service";

@Module({
    providers: [CoreService],
})
export class JetModule {}
