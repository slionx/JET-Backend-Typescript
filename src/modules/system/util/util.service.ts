import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class UtilService {
    private readonly logger = new Logger(UtilService.name);

    constructor() {}

    init() {
        this.logger.log("JET util initialized.");
    }
}
