import { Injectable } from "@nestjs/common";
import { Player } from "src/objects/entities/player.entity";
import { UtilService } from "../system/util/util.service";

@Injectable()
export class EntityService {
    private playerManager = Player;

    constructor(private readonly utilService: UtilService) {}

    createPlayer(id: string) {
        return new this.playerManager(id, this.utilService);
    }
}
