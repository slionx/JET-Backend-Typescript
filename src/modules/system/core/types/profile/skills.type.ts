import { TskillsCommon } from "../skills/common.type";
import { TskillsMastering } from "../skills/mastering.type";

export type TprofileSkills = {
    Common: TskillsCommon[],
    Mastering: TskillsMastering[],
    Points: number
}