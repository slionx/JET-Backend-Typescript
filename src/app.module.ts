import { Module } from "@nestjs/common";
import { BattleModule } from "./modules/battle/battle.module";
import { HideoutModule } from "./modules/hideout/hideout.module";
import { InventoryModule } from "./modules/inventory/inventory.module";
import { MiscModule } from "./modules/misc/misc.module";
import { ObjectsModule } from "./modules/objects-unused/objects.module";
import { ProfileModule } from "./modules/profile/profile.module";
import { SystemModule } from "./modules/system/system.module";
import { TraderModule } from "./modules/trader/trader.module";

@Module({
    imports: [
        SystemModule,
        BattleModule,
        HideoutModule,
        InventoryModule,
        MiscModule,
        ProfileModule,
        TraderModule,
        ObjectsModule,
    ],
    controllers: [],
})
export class AppModule {}
