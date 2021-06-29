type cSkills = {
    Common: CommonSkill[],
    Mastering: MasteringSkill[],
    Points: number
}
type CommonSkill = {
    Id: string,
    Progress: number,
    PointsEarnedDuringSession: number,
    LastAccess: number
}
type MasteringSkill = {
    Id: string
}