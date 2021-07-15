import { characterBase } from "src/modules/profile/types/characterBase.type";
import { characterHideout } from "src/modules/profile/types/characterHideout.type";
import { characterInventory } from "src/modules/profile/types/characterInventory.type";
import { characterQuest } from "src/modules/profile/types/characterQuest.type";
import { characterSkills } from "src/modules/profile/types/characterSkills.type";
import { characterTraderStanding } from "src/modules/profile/types/traderStanding.type";

export interface IProfile {
    base?: characterBase;
    hideout?: characterHideout;
    inventory?: characterInventory;
    quests?: characterQuest[];
    skills?: characterSkills;
    standings?: { [key: string]: characterTraderStanding };
    setProfileData(profileData: characterBase, profileHideout: characterHideout, profileInventory: characterInventory, profileQuests: characterQuest[], profileSkills: characterSkills, profileStandings: { [key: string]: characterTraderStanding });
}
