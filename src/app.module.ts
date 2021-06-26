import { Module } from "@nestjs/common";
import { AccountModule } from "./modules/account/account.module";
import { BattleModule } from "./modules/battle/battle.module";
import { HideoutModule } from "./modules/hideout/hideout.module";
import { InventoryModule } from "./modules/inventory/inventory.module";
import { MiscModule } from "./modules/misc/misc.module";
import { ProfileModule } from "./modules/profile/profile.module";
import { SystemController } from "./modules/system/system.controller";
import { SystemModule } from "./modules/system/system.module";
import { TradeModule } from "./modules/trade/trade.module";

@Module({
    imports: [SystemModule, AccountModule, BattleModule, HideoutModule, InventoryModule, MiscModule, ProfileModule, TradeModule],
    controllers: [SystemController]
})
export class AppModule {}
