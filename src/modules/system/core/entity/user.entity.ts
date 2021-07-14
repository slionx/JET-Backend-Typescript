import { Logger } from "@nestjs/common";
import { characterBase } from "src/modules/profile/types/characterBase.type";
import { characterHideout } from "src/modules/profile/types/characterHideout.type";
import { characterInventory } from "src/modules/profile/types/characterInventory.type";
import { characterQuest } from "src/modules/profile/types/characterQuest.type";
import { characterSkills } from "src/modules/profile/types/characterSkills.type";
import { characterTraderStanding } from "src/modules/profile/types/traderStanding.type";
import { UtilService } from "../../util/util.service";
import { IUser } from "../interfaces/user.interface";

export class User implements IUser {
    login;
    password;
    private profile: characterBase;
    private _id: string;
    private readonly utilService = new UtilService();
    private readonly logger = new Logger("User");

    constructor(id: string) {
        // id is a user identifier which means folder name
        this._id = id;
        this.loadUserData();
        this.logger.log(`+ Profile: ${this._id}`);
    }
    private userDataPath(){
        return `${this.utilService.getWorkingDir()}/users/${this._id}/`;
    }
    getProfile(){
        return this.profile;
    }
    private loadUserData(){
        const account = this.utilService.jsonLoadParse(`${this.userDataPath()}account.json`) as accountInfo;
        this.login = account.login;
        this.password = account.password;

        this.profile = this.utilService.jsonLoadParse(`${this.userDataPath()}character_base.json`) as characterBase;
        this.profile.Hideout = this.utilService.jsonLoadParse(`${this.userDataPath()}character_hideout.json`) as characterHideout;
        this.profile.Inventory = this.utilService.jsonLoadParse(`${this.userDataPath()}character_inventory.json`) as characterInventory;
        this.profile.Quests = this.utilService.jsonLoadParse(`${this.userDataPath()}character_quests.json`) as characterQuest[];
        this.profile.Skills = this.utilService.jsonLoadParse(`${this.userDataPath()}character_skills.json`) as characterSkills;
        this.profile.TraderStandings = this.utilService.jsonLoadParse(`${this.userDataPath()}character_traders.json`) as { [key: string]: characterTraderStanding };
    }

    checkValidity(ver_login: string, ver_password: string) {
        return this.login == ver_login && this.password == ver_password;
    }
}

export class Profile {

    constructor(profileData: characterBase){}
}