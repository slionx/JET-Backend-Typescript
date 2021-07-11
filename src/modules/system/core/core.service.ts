import { Injectable, Logger } from "@nestjs/common";
import { UtilService } from "../util/util.service";
import { IDatabase } from "./interfaces/db.interface";
import { IConfig } from "./interfaces/config.interface";
import { User } from "./entity/user.entity";

@Injectable()
export class CoreService {
    private readonly logger = new Logger(CoreService.name);

    constructor(private readonly utilService: UtilService) {}

    db: IDatabase = {};
    config: IConfig = {};
    users: {};
    itemsList: {};
    init() {
        this.loadConfig();
        this.loadDatabase();
        this.loadUsers();
        this.logger.log("JET initialized.");
    }

    private loadUsers(){
        const profilesFolders = this.utilService.getFileNamesInDir(`${this.utilService.getWorkingDir()}/users`);
        this.users = {};
        for(const userId of profilesFolders){
            this.users[userId] = new User(userId);
        }
        
    }
    private loadDatabase() {
        this.db = this.utilService.getDatabaseRecursive(
            `${this.utilService.getWorkingDir()}/database/`,
        );
    }
    private loadConfig() {
        this.logger.log("Loading config");
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
                /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/,
            ) &&
            this.config.ipAddress != "localhost"
        ) {
            this.logger.error(
                "ERROR: IP address is not shown as numerical ip address or localhost",
            );
            this.config.ipAddress = "127.0.0.1";
        }
    }
    getItemList(){
        if(this.itemsList == undefined)
        {
            this.itemsList = {};
            for(const category in this.db.items){
                for(const item in this.db.items[category]){
                    const itemToSave = this.db.items[category][item];
                    const id = itemToSave._id;
                    this.itemsList[id] = itemToSave;
                }
            }
        }
        return this.itemsList;
    }
}
