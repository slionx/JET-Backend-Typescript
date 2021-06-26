import { Injectable, Logger } from "@nestjs/common";
import { UtilService } from "../util/util.service";
import { IDatabase } from "./interfaces/db.interface";
import * as path from "path";
import { existsSync, fstat, fstatSync } from "fs";

@Injectable()
export class CoreService {
    private readonly logger = new Logger(CoreService.name);

    constructor(private readonly utilService: UtilService) {}

    db: IDatabase = {};

    init() {
        this.loadDatabase();
        this.logger.log("JET initialized.");
    }

    private loadDatabase() {
        this.db = this.utilService.getDatabaseRecursive(`${process.cwd()}/database/`);
    }
}
