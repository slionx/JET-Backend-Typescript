import { Injectable } from "@nestjs/common";
import { Player } from "src/objects/entities/player.entity";

@Injectable()
export class EntityService {
    private playerManager = Player;

    constructor() {}

    createPlayer() {
        return new this.playerManager();
    }
}
