import { Injectable, Logger } from "@nestjs/common";
import { UtilService } from "../util/util.service";
import { IDatabase } from "./interfaces/db.interface";
import { IConfig } from "./interfaces/config.interface";

@Injectable()
export class CoreService {
    private readonly logger = new Logger(CoreService.name);

    constructor(private readonly utilService: UtilService) {}

    db: IDatabase = {};
    config: IConfig = {};
    users: {};
    init() {
        this.loadConfig();
        this.loadDatabase();

        this.logger.log("JET initialized.");
    }

    private loadDatabase() {
        this.db = this.utilService.getDatabaseRecursive(
            `${this.utilService.getWorkingDir()}/database/`,
        );
    }

    private loadConfig() {
        try {
            this.config = this.utilService.jsonLoadParse(
                `${this.utilService.getWorkingDir()}/config.json`,
            );
        } catch (error) {
            this.logger.error(error);
        }

        if (this.config.port <= 1024 && this.config.port != 443) {
            this.logger.error(
                "ERROR: Port is below system reserved port range 1024 (excluding 443 port)",
            );
            this.config.port = 443;
        }

        if (
            !this.config.ipAddress.match(
                /^(?:(?:^|\.)(?:2(?:5[0-5]|[0-4]\d)|1?\d?\d)){4}$/,
            ) ||
            this.config.ipAddress != "localhost"
        ) {
            this.logger.error(
                "ERROR: IP address is not shown as numerical ip address or localhost",
            );
            this.config.ipAddress = "127.0.0.1";
        }
    }
}
