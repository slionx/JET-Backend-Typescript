type characterHideout = {
    Production: object,
    Areas: Area[]
}
type Area = {
    type: number,
    level: number,
    active: boolean,
    passiveBonusesEnabled: boolean,
    completeTime: number,
    constructing: boolean,
    slots: object[],
    lastRecipe: string
}