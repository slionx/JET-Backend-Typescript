import { Module } from "@nestjs/common";
import { EntityService } from "./entity.service";

@Module({
    providers: [EntityService],
    imports: [],
})
export class EntityModule {}
