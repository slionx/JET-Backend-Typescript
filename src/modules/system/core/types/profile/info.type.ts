export type TprofileInfo = {
    AccountType: number,
    BannedState: boolean,
    BannedUntil: number,
    Bans: object[],
    Experience: number,
    GameVersion: string,
    IsStreamerModeAvailable: boolean,
    LastTimePlayedAsSavage: number,
    Level: number,
    LowerNickname: string,
    MemberCategory: number,
    NeedWipeOptions: object[],
    Nickname: string,
    NicknameChangeDate: number,
    RegistrationDate: number,
    SavageLockTime: number,
    Settings: {
        BotDifficulty: string,
        Experience: number,
        Role: string
    },
    Side: string,
    Voice: string,
    lastCompletedWipe: {[key: string]: string},
    lockedMoveCommands: boolean
}