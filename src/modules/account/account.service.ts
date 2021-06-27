import { Injectable, Logger } from "@nestjs/common";
import { UtilService } from "../util/util.service";

@Injectable()
export class AccountService {
    private readonly logger = new Logger(AccountService.name);

    constructor(private readonly utilService: UtilService) {}


    init() {
        this.logger.log("JET initialized.");
    }

}
