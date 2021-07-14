export type TprofileStats = {
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