import { Controller, Get, Logger, Param, Post, UseInterceptors } from '@nestjs/common';
import { json } from 'express';
import { CoreService } from './core/core.service';
import { InOutInterceptor } from './interceptors/inout.interceptor';

@Controller()
@UseInterceptors(InOutInterceptor)
export class SystemController {
    private readonly logger = new Logger(SystemController.name);
    constructor(private readonly coreService: CoreService) {
        //this.logger.debug("controller started");
        
    }

    @Get()
    getIndex(): string | Response {
        return "That Suposed to be homepage??";
    }

    @Post("client/game/:action")
    getGame(@Param('action') action): string {
        switch(action){
            case "start": return "";
            case "config": return "";
            case "keepalive": return "";
            case "logout": return "";
        }
    }
    @Post("client/game/bot/generate")
    getGameBotGenerate(): string {
        return "";
    }
    @Post("client/items")
    getItems(): string {
        const itemList = this.coreService.getItemList();
        return JSON.stringify(itemList);
    }

    @Post("client/mail/dialog/:action")
    getMailDialog(@Param('action') action): string {
        switch(action){
            case "getAllAttachments": return "";
            case "info": return "";
            case "list": return "";
            case "pin": return "";
            case "read": return "";
            case "remove": return "";
            case "unpin": return "";
            case "view": return "";
        }
    }

}
