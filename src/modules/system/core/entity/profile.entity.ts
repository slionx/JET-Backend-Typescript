import { characterBase } from "src/modules/profile/types/characterBase.type";
import { characterHideout } from "src/modules/profile/types/characterHideout.type";
import { characterInventory } from "src/modules/profile/types/characterInventory.type";
import { characterQuest } from "src/modules/profile/types/characterQuest.type";
import { characterSkills } from "src/modules/profile/types/characterSkills.type";
import { characterTraderStanding } from "src/modules/profile/types/traderStanding.type";
import { IProfile } from "../interfaces/profile.interface";

export class Profile implements IProfile {
    base: characterBase;
    hideout: characterHideout;
    inventory: characterInventory;
    quests: characterQuest[];
    skills: characterSkills;
    standings: { [key: string]: characterTraderStanding };

    constructor(){}

    updateProfile(){
        
    }

    setProfileData(profileData, profileHideout, profileInventory, profileQuests, profileSkills, profileStandings){
        this.base = profileData;
        this.hideout = profileHideout;
        this.inventory = profileInventory;
        this.quests = profileQuests;
        this.skills = profileSkills;
        this.standings = profileStandings;
    }
}