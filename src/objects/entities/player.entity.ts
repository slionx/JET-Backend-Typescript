import { BaseObject, ObjectType } from "../base.object";
import { IEntity } from "./interfaces/entity.interface";

export class Player extends BaseObject implements IEntity {
    private static _all: { [key: string]: Player } = {};
    static readonly all = Object.values(Player._all);

    constructor() {
        super(ObjectType.Player);

        Player._all[this.id] = this;
    }

    getById(id: number) {
        if (id in Player._all) {
            return Player._all[id];
        }

        return null;
    }

    destroy() {
        delete Player._all[this.id];
    }
}
