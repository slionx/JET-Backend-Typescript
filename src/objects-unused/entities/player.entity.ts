//import { UtilService } from "src/modules/system/util/util.service";
//import { BaseObject, ObjectType } from "../../modules/objects/base.object.class";
//import { IEntity } from "../../modules/objects/entity/player/interfaces/entity.interface";

/* this needs to be converted to the other method and deleted
export class Player extends BaseObject implements IEntity {
    private static _all: { [key: string]: Player } = {};
    static loginTo(login: string, password: string) {
        for (const playerId in Player._all) {
            if (Player._all[playerId].loginCorrect(login, password)) return playerId;
        }
        return "";
    }

    static getRequestProfileData(uniqueID) {}

    static all() {
        return Object.values(Player._all);
    }

    constructor(id: string, private readonly utilService: UtilService) {
        super(ObjectType.Player, id);
        Player._all[this.id] = this;
        this.loadAccountInfo();
        this.loadProfileData();
    }

    private login: string;
    private password: string;
    loginCorrect(login: string, password: string) {
        return this.login == login && this.password == password;
    }

    character = {
        base: {} as characterBase,
        hideout: {} as characterHideout,
        inventory: {} as characterInventory,
        quests: [] as cQuest[],
        skills: {} as cSkills,
        traders: {} as { [key: string]: cTraderStanding },
    };

    customizationStorage: object;
    messageInbox: object;
    userWeaponBuilds: object;

    preparedPMCProfile() {
        let profile = this.character.base;
        profile.Hideout = this.character.hideout;
        profile.Inventory = this.character.inventory;
        profile.Quests = this.character.quests;
        profile.Skills = this.character.skills;
        profile.TraderStandings = this.character.traders;
        return profile;
    }

    private loadProfileData() {
        this.character.base = this.utilService.jsonLoadParse(
            this.userFolder() + "character_base.json",
        );
        this.character.hideout = this.utilService.jsonLoadParse(
            this.userFolder() + "character_hideout.json",
        );
        this.character.inventory = this.utilService.jsonLoadParse(
            this.userFolder() + "character_inventory.json",
        );
        this.character.quests = this.utilService.jsonLoadParse(
            this.userFolder() + "character_quests.json",
        );
        this.character.skills = this.utilService.jsonLoadParse(
            this.userFolder() + "character_skills.json",
        );
        this.character.traders = this.utilService.jsonLoadParse(
            this.userFolder() + "character_traders.json",
        );
        this.customizationStorage = this.utilService.jsonLoadParse(
            this.userFolder() + "customization_storage.json",
        );
        this.messageInbox = this.utilService.jsonLoadParse(
            this.userFolder() + "message_inbox.json",
        );
        this.userWeaponBuilds = this.utilService.jsonLoadParse(
            this.userFolder() + "user_weapon_builds.json",
        );
    }

    private userFolder() {
        return `${this.utilService.getWorkingDir()}/users/${this.id}/`;
    }

    private loadAccountInfo() {
        const accountData = this.utilService.jsonLoadParse(
            this.userFolder() + "account.json",
        ) as accountInfo;

        this.login = accountData.login;
        this.password = accountData.password;
    }

    getById(id: string) {
        if (id in Player._all) {
            return Player._all[id];
        }

        return null;
    }

    destroy() {
        delete Player._all[this.id];
    }
}
*/
