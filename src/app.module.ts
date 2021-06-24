import { Module } from "@nestjs/common";
import { JetModule } from "./modules/jet/jet.module";

@Module({
    imports: [JetModule],
})
export class AppModule {}
