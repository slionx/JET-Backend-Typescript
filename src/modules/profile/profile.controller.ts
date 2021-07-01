import { Controller, Post } from '@nestjs/common';

@Controller()
export class ProfileController {
    constructor() {}
/*
  '/client/game/profile/create': [Function],
  '/client/game/profile/list': [Function],
  '/client/game/profile/search': [Function],
  '/client/game/profile/select': [Function],
  '/client/game/profile/items/moving': [Function],
  '/client/game/profile/nickname/change': [Function],
  '/client/game/profile/nickname/reserved': [Function],
  '/client/game/profile/nickname/validate': [Function],
  '/client/game/profile/savage/regenerate': [Function],
  '/client/game/profile/voice/change': [Function],
*/
    @Post("client/game/profile")
    getIndex(): string {
            return "That Suposed to be homepage??";
    }
}