import { Injectable, Logger } from "@nestjs/common";
import { UtilService } from "../system/util/util.service";

@Injectable()
export class TraderService {
    private readonly logger = new Logger(TraderService.name);
    constructor(private readonly utilService: UtilService){
    }
}