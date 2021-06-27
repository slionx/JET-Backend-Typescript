import { ObjectType } from "src/objects/base.object";

// Missing static all
export interface IEntity {
    id: string;
    type: ObjectType;
    getById(id: string): IEntity;
    destroy(): void;
}
