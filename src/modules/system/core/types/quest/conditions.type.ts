import { TquestAvailableForStart } from "./availableForStart.type";

export type TquestConditions = {
    AvailableForStart: TquestAvailableForStart[],
    AvailableForFinish: object[], // conditional, diffrent objects depended on _parent name
    Fail: object[]
}