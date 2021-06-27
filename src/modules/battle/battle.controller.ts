import { Controller, Post } from '@nestjs/common';

@Controller()
export class BattleController {
    constructor() {}

    @Post("lol1")
    getIndex(): string {
            return "That Suposed to be homepage??";
    }
}