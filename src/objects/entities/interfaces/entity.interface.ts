import { ObjectType } from "src/objects/base.object";

// Missing static all
export interface IEntity {
    id: number;
    type: ObjectType;
    getById(id: number): IEntity;
    destroy(): void;
}
