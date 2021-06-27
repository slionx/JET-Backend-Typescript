import { Injectable } from "@nestjs/common";
import { type } from "os";
import { UtilService } from "../system/util/util.service";

@Injectable()
export class BattleService {

    constructor(private readonly utilService: UtilService) {
        this.locationRequestBase = this.utilService.jsonLoadParse(`${this.utilService.getWorkingDir()}/database/base/locations.json`);
        const filesInBase = this.utilService.getFileNamesInDir(`${this.utilService.getWorkingDir()}/database/locations/base`);
        for(const _number in filesInBase){
            const name = filesInBase[_number].replace(".json", "");
            this.locationsBase[name] = this.utilService.jsonLoadParse(`${this.utilService.getWorkingDir()}/database/locations/base/${filesInBase[_number]}`);
        }
        const filesInLoot = this.utilService.getFileNamesInDir(`${this.utilService.getWorkingDir()}/database/locations/loot`);
        for(const _number in filesInLoot){
            const name = filesInLoot[_number].replace(".json", "");
            this.locationsLoot[name] = this.utilService.jsonLoadParse(`${this.utilService.getWorkingDir()}/database/locations/base/${filesInLoot[_number]}`);
        }
    }
    locationRequestBase;
    locationsBase;
    locationsLoot;


}

type LocationsBase = {
    bigmap: MapConfig,
    develop: MapConfig,
    factory4_day: MapConfig,
    factory4_night: MapConfig,
    hideout: MapConfig,
    interchange: MapConfig,
    laboratory: MapConfig,
    lighthouse: MapConfig,
    privatearea: MapConfig,
    rezervbase: MapConfig,
    shoreline: MapConfig,
    suburbs: MapConfig,
    tarkovstreets: MapConfig,
    terminal: MapConfig,
    town: MapConfig,
    woods: MapConfig
}
type MapConfig = {
    Enabled: boolean,
    Locaked: boolean,
    Insurance: boolean,
    SafeLocation: boolean,
    Name: string,
    Description: string,
    Scene: {
        path: string,
        rcid: string,
    },
    Area: number,
    RequiredPlayerLevel: number,
    MinPlayers: number,
	MaxPlayers: number,
	exit_count: number,
	exit_access_time: number,
	exit_time: number,
	Preview: {
		path: string,
		rcid: string
	},
	IconX: number,
	IconY: number,
	filter_ex: object[],
	waves: Wave[],
    limits: object[],
	AveragePlayTime: number,
	AveragePlayerLevel: number,
	escape_time_limit: number,
	Rules: string,
	IsSecret: boolean,
	doors: object[],
	tmp_location_field_remove_me: number,
	MinDistToExitPoint: number,
	MaxDistToFreePoint: number,
	MinDistToFreePoint: number,
	MaxBotPerZone: number,
	OpenZones: string,
	OcculsionCullingEnabled: boolean,
	GlobalLootChanceModifier: number,
	OldSpawn: boolean,
	NewSpawn: boolean,
	BotMax: number,
	BotStart: number,
	BotStop: number,
	BotMaxTimePlayer: number,
	BotSpawnTimeOnMin: number,
	BotSpawnTimeOnMax: number,
	BotSpawnTimeOffMin: number,
	BotSpawnTimeOffMax: number,
	BotMaxPlayer: number,
	BotEasy: number,
	BotNormal: number,
	BotHard: number,
	BotImpossible: number,
	BotAssault: number,
	BotMarksman: number,
	DisabledScavExits: "",
	AccessKeys: object[],
	UnixDateTime: number,
	users_gather_seconds: number,
	users_spawn_seconds_n: number,
	users_spawn_seconds_n2: number,
	users_summon_seconds: number,
	sav_summon_seconds: number,
	matching_min_seconds: number,
    MinMaxBots: MinMaxBots,
    BotLocationModifier: BotLocationModifier,
    exits: exit[],
    DisabledForScav: boolean,
	BossLocationSpawn: BossLocationSpawn[],
    SpawnPointParams: SpawnPointParams[],
    Id: string,
	_Id: string,
	Loot: object[], // this should be loot type here
    Banners: Banner[]
}
type Wave = {
    number: number,
    time_min: number,
    time_max: number,
    slots_min: number,
    slots_max: number,
    SpawnPoints: string,
    BotSide: string,
    BotPreset: string,
    WildSpawnType: string,
    isPlayers: boolean
}
type MinMaxBots = {
    min: number,
	max: number,
	WildSpawnType: string
}
type BotLocationModifier = {
    AccuracySpeed: number,
    Scattering: number,
    GainSight: number,
    MarksmanAccuratyCoef: number,
    VisibleDistance: number,
    DistToActivate: number,
    DistToSleep: number,
    MagnetPower: number,
    DistToPersueAxemanCoef: number
}
type exit = {
    Name: string,
    EntryPoints: string,
    Chance: number,
    MinTime: number,
    MaxTime: number,
    PlayersCount: number,
    ExfiltrationTime: number,
    PassageRequirement: string,
    ExfiltrationType: string,
    Id: string,
    Count: number,
    RequirementTip: string
}
type BossLocationSpawn = {
    BossName: string,
    BossChance: number,
    BossZone: string,
    BossPlayer: boolean,
    BossDifficult: string,
    BossEscortType: string,
    BossEscortDifficult: string,
    BossEscortAmount: string,
    Time: number
}
type SpawnPointParams = {
    Id: string,
    Position: {
        x: number,
        y: number,
        z: number
    },
    Rotation: number,
    Sides: string[],
    Categories: string[],
    Infiltration: string,
    DelayToCanSpawnSec: number,
    ColliderParams: {
        _parent: string,
        _props: {
            Center: {
                x: number,
                y: number,
                z: number
            },
            Radius: number
        }
    }
}
type Banner = {
    id: string,
    pic: {
        path: string,
        rcid: string
    }
}

type LocationsLoot = {
    forced: locLoot_forced[],
    mounted: locLoot_mounted[],
    static: locLoot_static[],
    dynamic: locLoot_dynamic[],
}
type locLoot_forced = {
    "id": string,
    "IsStatic": boolean,
    "useGravity": boolean,
    "randomRotation": boolean,
    "Position": number[], // size of 3 x,y,z :)
    "Rotation": number[], // size of 3 x,y,z :)
    "Items": locLoot_Item[]
}
type locLoot_Item = {
    _id: string,
    _tpl: string,
    parentId: string,
    slotId: string,
    location: {
        x: number,
        y: number,
        z: number
    }
}
type locLoot_mounted = {
    
}
type locLoot_static = {
    id: string,
    IsStatic: boolean,
    useGravity: boolean,
    randomRotation: boolean,
    Position: number, // can be also x,y,z ???
    Rotation: number,
    Items: locLoot_Item[]
}
type locLoot_dynamic = {
    id: string,
    IsStatic: boolean,
    useGravity: boolean,
    randomRotation: boolean,
    Position: number[],
    Rotation: number[],
    Items: locLoot_Item[]
}