import { BaseObject, ObjectType } from "../../base.object.class";
import { IEntity } from "./interfaces/entity.interface";

export class Player extends BaseObject implements IEntity {
    private static _all: { [ObjectType.Player]?: Player };

    constructor(id: string) {
        super(id, ObjectType.Player);

        Player._all[this.id] = this;
    }

    getById(id: string) {
        if (id in Player._all) {
            return Player._all[id];
        }

        return null;
    }

    destroy() {
        delete Player._all[this.id];
    }
}
