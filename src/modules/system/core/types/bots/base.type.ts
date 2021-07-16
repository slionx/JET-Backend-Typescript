import { TprofileHealth } from "src/modules/system/core/types/profile/health.type"
import { TprofileHideout } from "src/modules/system/core/types/profile/hideout.type"
import { TprofileInfo } from "src/modules/system/core/types/profile/info.type"
import { TprofileInventory } from "src/modules/system/core/types/profile/inventory.type"
import { TprofileRagfairInfo } from "src/modules/system/core/types/profile/ragfairInfo.type"
import { TprofileSkills } from "src/modules/system/core/types/profile/skills.type"
import { TprofileStats } from "src/modules/system/core/types/profile/stats.type"
import { TprofileTraderInfo } from "src/modules/system/core/types/profile/traderInfo.type"

export type TbotsBase = {
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
    Hideout: TprofileHideout[],
    Bonuses: object[],
    Notes: { Notes: object[] },
    Quests: [],
    TraderInfo: {[key: string]: TprofileTraderInfo},
    RagfairInfo: TprofileRagfairInfo,
    WishList: object[]
}