import { Titem } from "./item.type"

export type TitemMoving = {
    "warnings": any[],
    "profileChanges": { [key: string]: TprofileChanges }
}
type TprofileChanges = {
    _id: string,
    experience: number,
    quests: any[],
    ragFairOffers:any[],
    builds: any[],
    items:{"change": Titem[], "new": Titem[], "del": Titem[]},
    production:null,
    skills:{},
    traderRelations:[]
}