import { Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { tarkovResponse } from '../system/core/types/tarkovResponse.type';
import { InOutInterceptor } from '../system/interceptors/inout.interceptor';

@Controller()
@UseInterceptors(InOutInterceptor)
export class BattleController {
    constructor() {}
/*

  '/singleplayer/settings/raid/endstate': [Function],
  '/singleplayer/settings/raid/menu': [Function]
    '/singleplayer/settings/defaultRaidSettings': [Function],
  '/singleplayer/settings/bot/limit': [Function],
  '/singleplayer/settings/bot/difficulty': [Function],
*/
    @Post("client/locations")
    getlocations(): string | tarkovResponse {
            return "retrun all locations lol";
    }
    @Get("client/match/:action")
    getMatch(@Param('action') action): string | tarkovResponse {
        switch(action){
            case "available": return "";
            case "exit": return "";
            case "join": return "123";
            case "updatePing": return "";
        }
    }    
    @Get("client/match/group/:action")
    getMatchGroup(@Param('action') action): string | tarkovResponse {
        switch(action){
            case "create": return "";
            case "delete": return "";
            case "exit_from_menu": return "";
            case "start_game": return "";
            case "status": return "";
        }
    }
    @Get("client/match/group/:type/:action")
    getMatchGroupSubType(@Param('type') type, @Param('action') action): string | tarkovResponse {
        if(type == "invite"){
            switch(action){
                case "accept": return "";
                case "cancel": return "";
                case "send": return "";
            }
        }
        if(type == "looking"){
            switch(action){
                case "start": return "";
                case "stop": return "";
            }
        }
    }
}