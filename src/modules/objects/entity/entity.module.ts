import { Module } from "@nestjs/common";
import { Player } from "./player.entity.class";

@Module({
    providers: [{ provide: "PlayerEntity", useClass: Player }],
})
export class EntityModule {}
