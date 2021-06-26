import { Controller, Get } from '@nestjs/common';

@Controller()
export class SystemController {
    constructor(/*private readonly appService: AppService*/) {}

    @Get()
    getIndex(): string {
            return "Loaded Home Page...!";
    }
}
