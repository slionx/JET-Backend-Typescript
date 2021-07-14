import { TprofileHealth } from "./health.type";
import { TprofileHideout } from "./hideout.type";
import { TprofileInfo } from "./info.type";
import { TprofileInventory } from "./inventory.type";
import { TprofileQuest } from "./quest.type";
import { TprofileRagfairInfo } from "./ragfairInfo.type";
import { TprofileSkills } from "./skills.type";
import { TprofileStats } from "./stats.type";
import { TprofileTraderInfo } from "./traderInfo.type";

export type characterBase = {
    _id: string,
    aid: string,
    savage: string,
    Info: TprofileInfo,
    Customization: {
        Head: string,
        Body: string,
        Feet: string,
        Hands: string
    },
    Health: TprofileHealth,
    Inventory: TprofileInventory,
    Skills: TprofileSkills,
    Stats: TprofileStats,
    Encyclopedia: { [key: string]: boolean },
    ConditionCounters: { Counters: object[] },
    BackendCounters: object,
    InsuredItems: object[],
    Hideout: TprofileHideout,
    Bonuses: object[],
    Notes: { Notes: object[] },
    Quests: TprofileQuest[],
    TraderInfo: {[key: string]: TprofileTraderInfo},
    RagfairInfo: TprofileRagfairInfo,
    WishList: object[]
}