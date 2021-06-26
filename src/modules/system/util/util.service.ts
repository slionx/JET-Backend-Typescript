import { Injectable, Logger } from "@nestjs/common";
import fs from 'fs';

@Injectable()
export class UtilService {
    private readonly logger = new Logger(UtilService.name);

    constructor() {}

    init() {
        this.logger.log("JET util initialized.");
    }

    isType(data, string) { return typeof data == string; }

    jsonLoad(path)
    {
        return fs.readFileSync(path, 'utf8')
    }

    jsonLoadParse(path){
        return JSON.parse(this.jsonLoad(path));
    }

    jsonSave(data_to_save, path_to_file_to_save)
    {
        fs.writeFileSync(path_to_file_to_save, JSON.stringify(data_to_save));
    }

    getFileNamesInDir(directory)
    {
        return fs.readdirSync(directory);
    }
}
