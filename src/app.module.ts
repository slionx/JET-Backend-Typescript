import { Module } from "@nestjs/common";
import { BattleModule } from "./modules/battle/battle.module";
import { HideoutModule } from "./modules/hideout/hideout.module";
import { InventoryModule } from "./modules/inventory/inventory.module";
import { MiscModule } from "./modules/misc/misc.module";
import { ObjectsModule } from "./modules/objects/objects.module";
import { ProfileModule } from "./modules/profile/profile.module";
import { SystemModule } from "./modules/system/system.module";
import { TradeModule } from "./modules/trade/trade.module";

@Module({
    imports: [
        SystemModule,
        BattleModule,
        HideoutModule,
        InventoryModule,
        MiscModule,
        ProfileModule,
        TradeModule,
        ObjectsModule,
    ],
    controllers: [],
})
export class AppModule {}
