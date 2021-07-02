import { Injectable, Logger } from "@nestjs/common";
import { CoreService } from "../system/core/core.service";
import { UtilService } from "../system/util/util.service";
import { IBotBase } from "./interfaces/botBase.instance";

@Injectable()
export class BotService {
    private readonly logger = new Logger(CoreService.name);

    constructor(private readonly utilService: UtilService, private readonly coreService: CoreService) {
        this.BotBase = this.coreService.db.base.botBase;
        this.BotDatabase = this.coreService.db.bots;
    }

    readonly BotBase: IBotBase;
    readonly BotDatabase;
    
    generateSingle(type){

    }
    generateByInput(input){

    }
}
