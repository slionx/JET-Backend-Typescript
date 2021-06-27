import { Controller, Post } from '@nestjs/common';

@Controller()
export class ProfileController {
    constructor() {}

    @Post("client/game/profile")
    getIndex(): string {
            return "That Suposed to be homepage??";
    }
}