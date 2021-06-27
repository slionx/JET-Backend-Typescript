export enum ObjectType {
    Player,
}

export class BaseObject {
    readonly id: number;
    readonly type: ObjectType;

    private static identifierCounter = { [ObjectType.Player]: 0 };

    constructor(type: ObjectType) {
        this.id = BaseObject.identifierCounter[type];
        this.type = type;

        BaseObject.identifierCounter[type] += 1;
    }
}
