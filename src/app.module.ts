import { Module } from "@nestjs/common";
import { JetModule } from "./modules/system/system.module";

@Module({
    imports: [JetModule],
})
export class AppModule {}
