import { characterHideout } from "./characterHideout.type"
import { characterInventory } from "./characterInventory.type"
import { characterQuest } from "./characterQuest.type"
import { characterSkills } from "./characterSkills.type"
import { characterTraderStanding } from "./traderStanding.type"

export type characterBase = {
    _id: string,
    aid: string,
    savage: string,
    Info: cInformation,
    Customization: {
        Head: string,
        Body: string,
        Feet: string,
        Hands: string
    },
    Health: cHealth,
    Inventory: characterInventory,
    Skills: characterSkills,
    Stats: cStats,
    Encyclopedia: { [key: string]: boolean },
    ConditionCounters: { Counters: object[] },
    BackendCounters: object,
    InsuredItems: object[],
    Hideout: characterHideout,
    Bonuses: object[],
    Notes: { Notes: object[] },
    Quests: characterQuest[],
    TraderStandings: { [key: string]: characterTraderStanding },
    RagfairInfo: cRagfairInfo,
    WishList: object[]
}
type cRagfairInfo = {
    rating: number,
    isRatingGrowing: boolean,
    offers: object[]
}
type cStats = {
    SessionCounters: null,
    OverallCounters: {
        Items: object[]
    },
    SessionExperienceMult: number,
    ExperienceBonusMult: number,
    TotalSessionExperience: number,
    LastSessionDate: number,
    Aggressor: null,
    DroppedItems: object[],
    FoundInRaidItems: object[],
    Victims: object[],
    CarriedQuestItems: object[],
    DamageHistory: {
        LethalDamagePart: string,
        LethalDamage: null,
        BodyParts: object[]
    },
    LastPlayerState: null,
    TotalInGameTime: number,
    SurvivorClass: string
}
type cHealth = {
    Hydration: currMaxAmount,
    Energy: currMaxAmount,
    Temperature: currMaxAmount,
    BodyParts: {
        Head: bodyPartVal,
        Chest: bodyPartVal,
        Stomach: bodyPartVal,
        LeftArm: bodyPartVal,
        RightArm: bodyPartVal,
        LeftLeg: bodyPartVal,
        RightLeg: bodyPartVal
    },
    UpdateTime: number
}
type bodyPartVal = {
    Health: currMaxAmount
}
type currMaxAmount = {
    Current: number,
    Maximum: number
}
type cInformation = {
    Nickname: string,
    LowerNickname: string,
    Side: string,
    Voice: string,
    Level: number,
    Experience: number,
    RegistrationDate: number,
    GameVersion: string,
    AccountType: number,
    MemberCategory: number,
    lockedMoveCommands: boolean,
    SavageLockTime: number,
    LastTimePlayedAsSavage: number,
    Settings: {
        Role: string,
        BotDifficulty: string,
        Experience: number
    },
    NeedWipe: boolean,
    GlobalWipe: boolean,
    NicknameChangeDate: number,
    Bans: object[]
}