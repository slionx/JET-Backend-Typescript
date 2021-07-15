import { Injectable } from "@nestjs/common";
import { UtilService } from "../system/util/util.service";

// this is not how services are supposed to work. i'll expain tomorrow.
@Injectable()
export class BattleService {
    constructor(private readonly utilService: UtilService) {
    //     this.locationRequestBase = this.utilService.jsonLoadParse(
    //         `${this.utilService.getWorkingDir()}/database/base/locations.json`,
    //     );
    //     const filesInBase = this.utilService.getFileNamesInDir(
    //         `${this.utilService.getWorkingDir()}/database/locations/base`,
    //     );
    //     for (const _number in filesInBase) {
    //         const name = filesInBase[_number].replace(".json", "");
    //         this.locationsBase[name] = this.utilService.jsonLoadParse(
    //             `${this.utilService.getWorkingDir()}/database/locations/base/${
    //                 filesInBase[_number]
    //             }`,
    //         );
    //     }
    //     const filesInLoot = this.utilService.getFileNamesInDir(
    //         `${this.utilService.getWorkingDir()}/database/locations/loot`,
    //     );
    //     for (const _number in filesInLoot) {
    //         const name = filesInLoot[_number].replace(".json", "");
    //         this.locationsLoot[name] = this.utilService.jsonLoadParse(
    //             `${this.utilService.getWorkingDir()}/database/locations/base/${
    //                 filesInLoot[_number]
    //             }`,
    //         );
    //     }
    }
}











type LocationsLoot = {
    forced: locLoot_forced[];
    mounted: locLoot_mounted[];
    static: locLoot_static[];
    dynamic: locLoot_dynamic[];
};
type locLoot_forced = {
    id: string;
    IsStatic: boolean;
    useGravity: boolean;
    randomRotation: boolean;
    Position: number[]; // size of 3 x,y,z :)
    Rotation: number[]; // size of 3 x,y,z :)
    Items: locLoot_Item[];
};
type locLoot_Item = {
    _id: string;
    _tpl: string;
    parentId: string;
    slotId: string;
    location: {
        x: number;
        y: number;
        z: number;
    };
};
type locLoot_mounted = {};
type locLoot_static = {
    id: string;
    IsStatic: boolean;
    useGravity: boolean;
    randomRotation: boolean;
    Position: number; // can be also x,y,z ???
    Rotation: number;
    Items: locLoot_Item[];
};
type locLoot_dynamic = {
    id: string;
    IsStatic: boolean;
    useGravity: boolean;
    randomRotation: boolean;
    Position: number[];
    Rotation: number[];
    Items: locLoot_Item[];
};
