export type characterTraderStanding = {
        currentLevel: number,
        currentSalesSum: number,
        currentStanding: number,
        NextLoyalty: null,
        loyaltyLevels: { [key: string]: loyalityLevel},
        display: boolean
}
type loyalityLevel = {
    minLevel: number,
    minSalesSum: number,
    minStanding: number
}