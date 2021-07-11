export type characterInventory = {
    items: Item[],
    equipment: string,
    stash: string,
    questRaidItems: string,
    questStashItems: string,
    fastPanel: object
}
type Item = {
    _id: string,
    _tpl: string,
    parentId: string | null, // i think thats how you determine that it can be missing ???
    slotId:  string | null, // i think thats how you determine that it can be missing ???
    upd: ItemStats | null
}
type ItemStats = {
    Repairable: iRepairable,
    Foldable: iFoldable,
    FireMode: iFireMode,
    Resource: iResource,
    Sight: iSight,
    Dogtag: iDogtag,
    MedKit: iMedKit,
    FoodDrink: iFoodDrink,
    UnlimitedCount: boolean,
    StackObjectsCount: number,
}
type iRepairable = {
    MaxDurability: number,
    Durability: number
}
type iFoldable = {
    Folded: boolean
}
type iFireMode = {
    FireMode: string
}
type iSight = {
    ScopesCurrentCalibPointIndexes: number[],
    ScopesSelectedModes: number[],
    SelectedScope: number
}
type iDogtag = {
    AccountId: string,
    ProfileId: string,
    Nickname: string,
    Side: string,
    Level: number,
    Time: string,
    Status: string,
    KillerAccountId: string,
    KillerProfileId: string,
    KillerName: string,
    WeaponName: string
}
type iMedKit = {
    HpResource: number
}
type iFoodDrink = {
    HpPercent: number
}
type iResource = {
    Value: number
}