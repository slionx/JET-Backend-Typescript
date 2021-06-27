export enum ObjectType {
    Player,
}

export class BaseObject {
    readonly id: string;
    readonly type: ObjectType;
    readonly identifierNumber: number;
    private static identifierCounter = { [ObjectType.Player]: 0 };

    constructor(type: ObjectType, id: string) {
        this.id = id;
        this.type = type;
        this.identifierNumber = BaseObject.identifierCounter[type];
        BaseObject.identifierCounter[type] += 1;
    }
}
