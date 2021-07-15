import { Tposition } from "../position.type";

export type TlocationsSpawnPointParams = {
    Id: string;
    Position: Tposition;
    Rotation: number;
    Sides: string[];
    Categories: string[];
    Infiltration: string;
    DelayToCanSpawnSec: number;
    ColliderParams: {
        _parent: string;
        _props: {
            Center: Tposition;
            Radius: number;
        };
    };
};