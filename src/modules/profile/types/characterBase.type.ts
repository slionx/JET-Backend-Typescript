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
    TraderInfo: {[key: string]: TraderInfo},
    RagfairInfo: cRagfairInfo,
    WishList: object[]
}
type TraderInfo = {
    saleSum: number,
    standing: number,
    unlocked: boolean
}
type cRagfairInfo = {
    rating: number,
    isRatingGrowing: boolean,
    offers: object[]
}
type cStats = {
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
    AccountType: number,
    BannedState: boolean,
    BannedUntil: number,
    Bans: object[],
    Experience: number,
    GameVersion: string,
    IsStreamerModeAvailable: boolean,
    LastTimePlayedAsSavage: number,
    Level: number,
    LowerNickname: string,
    MemberCategory: number,
    NeedWipeOptions: object[],
    Nickname: string,
    NicknameChangeDate: number,
    RegistrationDate: number,
    SavageLockTime: number,
    Settings: {
        BotDifficulty: string,
        Experience: number,
        Role: string
    },
    Side: string,
    Voice: string,
    lastCompletedWipe: {[key: string]: string},
    lockedMoveCommands: boolean
}