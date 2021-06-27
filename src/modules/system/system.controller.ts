import { Controller, Get } from '@nestjs/common';

@Controller()
export class SystemController {
    constructor() {}

    @Get()
    getIndex(): string {
            return "That Suposed to be homepage??";
    }
}
