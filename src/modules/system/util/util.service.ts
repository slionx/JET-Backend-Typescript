import { Injectable, Logger } from "@nestjs/common";
import { dir } from "console";
import * as fs from "fs";
import * as path from "path";

@Injectable()
export class UtilService {
    private readonly logger = new Logger(UtilService.name);

    constructor() {
    }

    getWorkingDir(){ return process.cwd(); }

    jsonLoad(path: number | fs.PathLike) {
        return fs.readFileSync(path, "utf8");
    }

    jsonLoadParse(path: number | fs.PathLike) {
        if (!(path as string).includes(".json")) {
            return;
        }

        return JSON.parse(this.jsonLoad(path));
    }

    jsonSave(dataToSave: any, pathToFileToSave: number | fs.PathLike) {
        fs.writeFileSync(pathToFileToSave, JSON.stringify(dataToSave));
    }

    getFileNamesInDir(directory: fs.PathLike) {
        return fs.readdirSync(directory);
    }

    getDatabaseRecursive(filePath: string) {
        let tempData = {};

        const readedFolder = fs.readdirSync(filePath);

        const directories = readedFolder.filter((file) => {
            return fs.statSync(filePath + "/" + file).isDirectory();
        });

        const files = readedFolder.filter((file) => {
            return fs.statSync(filePath + "/" + file).isFile();
        });

        let i = 0,
            len = files.length;
        while (i < len) {
            tempData[files[i].split(".")[0]] = this.jsonLoadParse(
                path.resolve(filePath + files[i]),
            );
            i++;
        }

        (i = 0), (len = directories.length);
        while (i < len) {
            tempData[directories[i]] = this.getDatabaseRecursive(
                filePath + directories[i] + "/",
            );
            i++;
        }

        return tempData;
    }
}
