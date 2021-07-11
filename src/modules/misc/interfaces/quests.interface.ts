interface Quest {
    _id: string,
    traderId: string,
    location: string,
    image: string,
    type: QuestType,
    isKey: boolean,
    restartable: boolean,
    instantComplete: boolean,
    secretQuest: boolean,
    min_level: 1,
    canShowNotificationsInGame: boolean,
    rewards: Quest_Rewards,
    conditions: QuestConditions
}
type Quest_Rewards = {
    Started: object[],
    Success: object[],
    Fail: object[],
}

type QuestConditions = {
    AvailableForStart: Quest_AvailableForStart[],
    AvailableForFinish: object[], // conditional, diffrent objects depended on _parent name
    Fail: object[]
}

type Quest_AvailableForStart = {
    _parent: string,
    _props: {
        compareMethod: string,
        value: string,
        index: number,
        parentId: string,
        id: string
    }
}

enum QuestType {
    Elimination = 'Elimination', 
    PickUp = 'PickUp',
    Completion = 'Completion',  
    Discover = 'Discover',
    Loyalty = 'Loyalty',     
    Exploration = 'Exploration',
    Multi = 'Multi',       
    Skill = 'Skill',
    Merchant = 'Merchant',    
    WeaponAssembly = 'WeaponAssembly',
    Standing = 'Standing',    
    Experience = 'Experience'
}
