import { UtilService } from "../system/util/util.service";


export class User {

    constructor(userUniqueID: string, private readonly utilService: UtilService){
        this.uniqueID = userUniqueID;
        this.loadUserData();
    }
    uniqueID: string;
    login: string;
    password: string;
    character = {
        base: {},
        hideout: {},
        inventory: {},
        quests: {},
        skills: {},
        traders: {}
    };
    customizationStorage: object;
    messageInbox: object;
    userWeaponBuilds: object;

    testLogin(login: string, password: string){
        return this.login == login && this.password == password;
    }

    private loadUserData(){
        const userFolderPath = `${this.utilService.getWorkingDir()}/users/${this.uniqueID}/`;
        const accountData = this.utilService.jsonLoadParse(userFolderPath + "account.json") as accountInfo;
        // assign login and password
        this.login = accountData.login;
        this.password = accountData.password;

        this.character.base = this.utilService.jsonLoadParse(userFolderPath + "character_base.json");
        this.character.hideout = this.utilService.jsonLoadParse(userFolderPath + "character_hideout.json");
        this.character.inventory = this.utilService.jsonLoadParse(userFolderPath + "character_inventory.json");
        this.character.quests = this.utilService.jsonLoadParse(userFolderPath + "character_quests.json");
        this.character.skills = this.utilService.jsonLoadParse(userFolderPath + "character_skills.json");
        this.character.traders = this.utilService.jsonLoadParse(userFolderPath + "character_traders.json");
        this.customizationStorage = this.utilService.jsonLoadParse(userFolderPath + "customization_storage.json");
        this.messageInbox = this.utilService.jsonLoadParse(userFolderPath + "message_inbox.json");
        this.userWeaponBuilds = this.utilService.jsonLoadParse(userFolderPath + "user_weapon_builds.json");


    }
}