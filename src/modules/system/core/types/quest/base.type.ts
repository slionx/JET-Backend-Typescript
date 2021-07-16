import { TquestConditions } from "src/modules/system/core/types/quest/conditions.type";
import { TquestRewards } from "src/modules/system/core/types/quest/rewards.type";
import { EquestType } from "src/modules/system/core/types/quest/type.enum";

export type TquestBase = {
    _id: string,
    traderId: string,
    location: string,
    image: string,
    type: EquestType,
    isKey: boolean,
    restartable: boolean,
    instantComplete: boolean,
    secretQuest: boolean,
    min_level: 1,
    canShowNotificationsInGame: boolean,
    rewards: TquestRewards,
    conditions: TquestConditions
}