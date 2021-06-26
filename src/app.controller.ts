import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// remove after not usefull
//{'err': 0, 'errmsg': '', 'data': VARIABLE}
//VARIABLE: null, [], "{data}"

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
            return this.appService.getHello();
    }
}
