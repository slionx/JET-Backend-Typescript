import { IProfile } from "../interfaces/profile.interface";
import { TprofileBase } from "../types/profile/base.type";
import { TprofileHideout } from "../types/profile/hideout.type";
import { TprofileInventory } from "../types/profile/inventory.type";
import { TprofileQuest } from "../types/profile/quest.type";
import { TprofileSkills } from "../types/profile/skills.type";
import { TprofileTraderInfo } from "../types/profile/traderInfo.type";

export class Profile implements IProfile {
    base: TprofileBase;
    hideout: TprofileHideout;
    inventory: TprofileInventory;
    quests: TprofileQuest[];
    skills: TprofileSkills;
    standings: { [key: string]: TprofileTraderInfo };

    constructor(){}

    updateProfile(){
        
    }
    getFullProfile(){
        let profile = this.base;
        profile.Hideout = this.hideout;
        profile.Inventory = this.inventory;
        profile.Quests = this.quests;
        profile.Skills = this.skills;
        profile.TraderInfo = this.standings;
        return profile;
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