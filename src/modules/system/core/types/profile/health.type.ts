import { TbodyPart } from "../bodyPart.type";
import { TcurrentMaximum } from "../currentMaximum.type";

export type TprofileHealth = {
    Hydration: TcurrentMaximum,
    Energy: TcurrentMaximum,
    Temperature: TcurrentMaximum,
    BodyParts: {
        Head: TbodyPart,
        Chest: TbodyPart,
        Stomach: TbodyPart,
        LeftArm: TbodyPart,
        RightArm: TbodyPart,
        LeftLeg: TbodyPart,
        RightLeg: TbodyPart
    },
    UpdateTime: number
}
