import { Injectable, Logger } from "@nestjs/common";
import { UtilService } from "../util/util.service";

@Injectable()
export class CoreService {
    private readonly logger = new Logger(CoreService.name);

    constructor(private readonly utilService: UtilService) {}

    public db;
    //public globals;

    init() {
        this.logger.log("JET initialized.");
        // this.load_database();
    }

    load_database(){
        // load database from /ServerPath/database/here
        this.db;
        // GLOBALS
        let globals = JSON.parse(this.utilService.jsonLoad("./database/base/globals.json"));


        let bots = {
            assault: {},
            assaultgroup: {},
            bear: {},
            bossbully: {},
            bossgluhar: {},
            bosskilla: {},
            bosskojaniy: {},
            bosssanitar: {},
            bosstest: {},
            cursedassault: {},
            followerbully: {},
            followergluharassault: {},
            followergluharscout: {},
            followergluharsecurity: {},
            followergluharsnipe: {},
            followerkojaniy: {},
            followersanitar: {},
            followertest: {},
            marksman: {},
            playerscav: {},
            pmcbot: {},
            sectantpriest: {},
            sectantwarrior: {},
            test: {},
            usec: {}
        };

        for(let bot_name in bots){
            // this part shouldnt be changing thats why its hardcoded...
            //bots[bot_name] = {};
            bots[bot_name]["appearance"] = this.utilService.jsonLoadParse(`./database/bots/${bot_name}/appearance.json`);
            bots[bot_name]["chances"] = this.utilService.jsonLoadParse(`./database/bots/${bot_name}/chances.json`);
            bots[bot_name]["experience"] = this.utilService.jsonLoadParse(`./database/bots/${bot_name}/experience.json`);
            bots[bot_name]["generation"] = this.utilService.jsonLoadParse(`./database/bots/${bot_name}/generation.json`);
            bots[bot_name]["health"] = this.utilService.jsonLoadParse(`./database/bots/${bot_name}/health.json`);
            bots[bot_name]["inventory"] = this.utilService.jsonLoadParse(`./database/bots/${bot_name}/inventory.json`);
            bots[bot_name]["names"] = this.utilService.jsonLoadParse(`./database/bots/${bot_name}/names.json`);
            bots[bot_name]["difficulty"] = {};
            bots[bot_name]["difficulty"]["easy"] = this.utilService.jsonLoadParse(`./database/bots/${bot_name}/difficulty/easy.json`);
            bots[bot_name]["difficulty"]["normal"] = this.utilService.jsonLoadParse(`./database/bots/${bot_name}/difficulty/normal.json`);
            bots[bot_name]["difficulty"]["hard"] = this.utilService.jsonLoadParse(`./database/bots/${bot_name}/difficulty/hard.json`);
            bots[bot_name]["difficulty"]["impossible"] = this.utilService.jsonLoadParse(`./database/bots/${bot_name}/difficulty/impossible.json`);
        }
        bots.assaultgroup.
        let customization;
        let customization_files = this.utilService.getFileNamesInDir("./database/customization/");
        for(let file in customization_files){
            let id = customization_files[file].replace(".json", "");
            if(id.includes(".")) continue;
            customization[id] = this.utilService.jsonLoadParse(`./database/customization/${customization_files[file]}`);
        }

        let hideout = {areas: {}, production: {}, scavcase: {}, settings: {}};
        hideout.areas =      this.utilService.jsonLoadParse(`./database/hideout/areas.json`);
        hideout.production = this.utilService.jsonLoadParse(`./database/hideout/production.json`);
        hideout.scavcase =   this.utilService.jsonLoadParse(`./database/hideout/scavcase.json`);
        hideout.settings =   this.utilService.jsonLoadParse(`./database/hideout/settings.json`);

        let items = [];
        
        let item_node_files = this.utilService.getFileNamesInDir("./database/items/");
        for (let item_node in item_node_files)
        {
            let load_node_file = this.utilService.jsonLoadParse(`./database/items/${item_node_files[item_node]}`);
            for(let item of load_node_file)
            {
                items.push(item);
            }
        }
    }
}
