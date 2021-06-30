import { Controller, Get, Logger, UseInterceptors } from '@nestjs/common';
import { CompressionInterceptor } from './interceptors/compression.interceptor';

@Controller()
@UseInterceptors(CompressionInterceptor)
export class SystemController {
    private readonly logger = new Logger(SystemController.name);
    constructor() {
        //this.logger.debug("controller started");
    }

    @Get()
    getIndex(): string {
        return "That Suposed to be homepage??";
    }
}
