export type TbotsInventory = {
    equipment: {
        Headwear: string[],
        Earpiece: string[],
        FaceCover: string[],
        ArmorVest: string[],
        Eyewear: string[],
        ArmBand: string[],
        TacticalVest: string[],
        Pockets: string[],
        Backpack: string[],
        SecuredContainer: string[],
        FirstPrimaryWeapon: string[],
        SecondPrimaryWeapon: string[],
        Holster: string[],
        Scabbard: string[]
    },
    mods: {[key: string]: object}
    items: {
        TacticalVest: string[],
        Pockets: string[],
        Backpack: string[],
        SecuredContainer: string[],
        SpecialLoot: string[]
    }
}