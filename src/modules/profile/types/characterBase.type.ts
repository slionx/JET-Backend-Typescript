type characterBase = {
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
    Inventory: object,
    Skills: object,
    Stats: cStats,
    Encyclopedia: { [key: string]: boolean },
    ConditionCounters: { Counters: object[] },
    BackendCounters: object,
    InsuredItems: object[],
    Hideout: object,
    Bonuses: object[],
    Notes: { Notes: object[] },
    Quests: object[],
    TraderStandings: object,
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