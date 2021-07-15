import { Logger } from "@nestjs/common";
import { UtilService } from "../../util/util.service";
import { IUser } from "../interfaces/user.interface";
import { Taccount } from "../types/account.type";
import { TprofileBase } from "../types/profile/base.type";
import { TprofileHideout } from "../types/profile/hideout.type";
import { TprofileInventory } from "../types/profile/inventory.type";
import { TprofileQuest } from "../types/profile/quest.type";
import { TprofileSkills } from "../types/profile/skills.type";
import { TprofileTraderInfo } from "../types/profile/traderInfo.type";
import { Profile } from "./profile.entity";

export class User implements IUser {
    login: string;
    password: string;
    profile: Profile;
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

    private loadUserData() {
        const account = this.utilService.jsonLoadParse(`${this.userDataPath()}account.json`) as Taccount;
        this.login = account.login;
        this.password = account.password;

        this.profile = new Profile();
        this.profile.setProfileData(
            this.utilService.jsonLoadParse(`${this.userDataPath()}character_base.json`) as TprofileBase,
            this.utilService.jsonLoadParse(`${this.userDataPath()}character_hideout.json`) as TprofileHideout,
            this.utilService.jsonLoadParse(`${this.userDataPath()}character_inventory.json`) as TprofileInventory,
            this.utilService.jsonLoadParse(`${this.userDataPath()}character_quests.json`) as TprofileQuest[],
            this.utilService.jsonLoadParse(`${this.userDataPath()}character_skills.json`) as TprofileSkills,
            this.utilService.jsonLoadParse(`${this.userDataPath()}character_traders.json`) as { [key: string]: TprofileTraderInfo }
        );
    }

    checkValidity(ver_login: string, ver_password: string) {
        return this.login == ver_login && this.password == ver_password;
    }
}


