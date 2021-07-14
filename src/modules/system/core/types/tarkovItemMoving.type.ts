import { tarkovItem } from "./tarkovItem.type"

export type tarkovItemMoving = {
    "warnings": any[],
    "profileChanges": { [key: string]: TprofileChanges }
}
type TprofileChanges = {
    _id: string,
    experience: number,
    quests: any[],
    ragFairOffers:any[],
    builds: any[],
    items:{"change": tarkovItem[], "new": tarkovItem[], "del": tarkovItem[]},
    production:null,
    skills:{},
    traderRelations:[]
}