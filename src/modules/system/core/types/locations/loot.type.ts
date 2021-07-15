import { Tposition } from "../position.type"
import { Titem } from "../tarkov/item.type"

export type TlocationsLoot = {
    Id: string,
    IsStatic: boolean,
    useGravity: boolean,
    randomRotation: boolean,
    Position: Tposition,
    Rotation: Tposition,
    IsGroupPosition: boolean,
    GroupPositions: any[],
    Root: string,
    Items: Titem[]
}