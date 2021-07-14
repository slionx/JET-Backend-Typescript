export type ThideoutArea = {
    type: number,
    level: number,
    active: boolean,
    passiveBonusesEnabled: boolean,
    completeTime: number,
    constructing: boolean,
    slots: object[],
    lastRecipe: string
}