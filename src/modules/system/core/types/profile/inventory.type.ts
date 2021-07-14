import { tarkovItem } from "../tarkovItem.type";

export type TprofileInventory = {
    items: tarkovItem[],
    equipment: string,
    stash: string,
    questRaidItems: string,
    questStashItems: string,
    fastPanel: object
}