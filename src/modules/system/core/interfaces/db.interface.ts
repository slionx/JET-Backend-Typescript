export interface IDatabase {
    base?: {
        botBase?: string;
        botCore?: string;
        fleaOffer?: string;
        globals?: string;
        locations?: string;
        matchMetrics?: string;
    };
    bots?: {
        assault?: any;
        assaultgroup?: any;
        bear?: any;
        bossbully?: any;
        bossgluhar?: any;
        bosskilla?: any;
        bosskojaniy?: any;
        bosssanitar?: any;
        bosstest?: any;
        cursedassault?: any;
        followerbully?: any;
        followergluharassault?: any;
        followergluharscout?: any;
        followergluharsecurity?: any;
        followergluharsnipe?: any;
        followerkojaniy?: any;
        followersanitar?: any;
        followertest?: any;
        marksman?: any;
        playerscav?: any;
        pmcbot?: any;
        sectantpriest?: any;
        sectantwarrior?: any;
        test?: any;
        usec?: any;
    };
    customization?: {
        [key: string]: any;
    };
    dialogues?: {
        [key: string]: any;
    };
    hideout?: {
        areas?: { [key: string]: any };
        production?: { [key: string]: any };
        scavcase?: { [key: string]: any };
        settings?: { [key: string]: any };
    };
    items?: {
        Ammo?: any[];
        AmmoBox?: any[];
        ArmBand?: any[];
        Armor?: any[];
        ArmoredEquipment?: any[];
        AssaultCarbine?: any[];
        AssaultRifle?: any[];
        AssaultScope?: any[];
        AuxiliaryMod?: any[];
        Backpack?: any[];
        Barrel?: any[];
        BarterItem?: any[];
        Battery?: any[];
        Bipod?: any[];
        BuildingMaterial?: any[];
        Charge?: any[];
        Collimator?: any[];
        CompactCollimator?: any[];
        Compass?: any[];
        Compensator?: any[];
        CompoundItem?: any[];
        Drink?: any[];
        Drugs?: any[];
        Electronics?: any[];
        Equipment?: any[];
        FaceCover?: any[];
        FlashHider?: any[];
        Flashlight?: any[];
        Food?: any[];
        FoodDrink?: any[];
        Foregrip?: any[];
        Fuel?: any[];
        FunctionalMod?: any[];
        Gasblock?: any[];
        GearMod?: any[];
        GrenadeLauncher?: any[];
        Handguard?: any[];
        Headphones?: any[];
        Headwear?: any[];
        HouseholdGoods?: any[];
        Info?: any[];
        Inventory?: any[];
        IronSight?: any[];
        Item?: any[];
        Jewelry?: any[];
        Key?: any[];
        Keycard?: any[];
        KeyMechanical?: any[];
        Knife?: any[];
        Launcher?: any[];
        LightLaser?: any[];
        LockableContainer?: any[];
        LootContainer?: any[];
        Lubricant?: any[];
        MachineGun?: any[];
        Magazine?: any[];
        Map?: any[];
        MarksmanRifle?: any[];
        MasterMod?: any[];
        Medical?: any[];
        MedicalSupplies?: any[];
        MedKit?: any[];
        Meds?: any[];
        MobContainer?: any[];
        Mod?: any[];
        Money?: any[];
        Mount?: any[];
        Muzzle?: any[];
        MuzzleCombo?: any[];
        NightVision?: any[];
        OpticScope?: any[];
        Other?: any[];
        Pistol?: any[];
        PistolGrip?: any[];
        Pms?: any[];
        Pockets?: any[];
        RailCovers?: any[];
        Receiver?: any[];
        SearchableItem?: any[];
        Shaft?: any[];
        Shotgun?: any[];
        Sights?: any[];
        Silencer?: any[];
        SimpleContainer?: any[];
        Smg?: any[];
        SniperRifle?: any[];
        SpecialScope?: any[];
        SpecialWeapon?: any[];
        SpecItem?: any[];
        StackableItem?: any[];
        Stash?: any[];
        StationaryContainer?: any[];
        Stimulator?: any[];
        Stock?: any[];
        TacticalCombo?: any[];
        ThermalVision?: any[];
        ThrowWeap?: any[];
        Tool?: any[];
        Vest?: any[];
        Visors?: any[];
        Weapon?: any[];
    };
    locales?: {
        en?: {
            banners?: any;
            customization?: any;
            en?: any;
            enum?: any;
            error?: any;
            handbook?: any;
            interface?: any;
            locale?: any;
            locations?: any;
            mail?: any;
            menu?: any;
            preset?: any;
            quest?: any;
            season?: any;
            templates?: any;
            trading?: any;
        };
        fr?: {
            banners?: any;
            customization?: any;
            en?: any;
            enum?: any;
            error?: any;
            handbook?: any;
            interface?: any;
            locale?: any;
            locations?: any;
            mail?: any;
            menu?: any;
            preset?: any;
            quest?: any;
            season?: any;
            templates?: any;
            trading?: any;
        };
        ge?: {
            banners?: any;
            customization?: any;
            en?: any;
            enum?: any;
            error?: any;
            handbook?: any;
            interface?: any;
            locale?: any;
            locations?: any;
            mail?: any;
            menu?: any;
            preset?: any;
            quest?: any;
            season?: any;
            templates?: any;
            trading?: any;
        };
        ru?: {
            banners?: any;
            customization?: any;
            en?: any;
            enum?: any;
            error?: any;
            handbook?: any;
            interface?: any;
            locale?: any;
            locations?: any;
            mail?: any;
            menu?: any;
            preset?: any;
            quest?: any;
            season?: any;
            templates?: any;
            trading?: any;
        };
    };
    locations?: {
        base?: {
            bigmap?: any;
            develop?: any;
            factory4_day?: any;
            factory4_night?: any;
            hideout?: any;
            interchange?: any;
            laboratory?: any;
            lighthouse?: any;
            privatearea?: any;
            rezervbase?: any;
            shoreline?: any;
            suburbs?: any;
            tarkovstreets?: any;
            terminal?: any;
            town?: any;
            woods?: any;
        };
        loot?: {
            bigmap?: any;
            develop?: any;
            factory4_day?: any;
            factory4_night?: any;
            interchange?: any;
            laboratory?: any;
            rezervbase?: any;
            shoreline?: any;
            woods?: any;
        };
    };
    profile?: {
        Developer?: {
            character?: any;
            starting_outfit?: any;
            storage?: any;
            trader_bear?: any;
            trader_usec?: any;
        };
        "Edge Of Darkness"?: {
            character?: any;
            starting_outfit?: any;
            storage?: any;
            trader_bear?: any;
            trader_usec?: any;
        };
        "Left Behind"?: {
            character?: any;
            starting_outfit?: any;
            storage?: any;
            trader_bear?: any;
            trader_usec?: any;
        };
        "Prepare To Escape"?: {
            character?: any;
            starting_outfit?: any;
            storage?: any;
            trader_bear?: any;
            trader_usec?: any;
        };
        Standard?: {
            character?: any;
            starting_outfit?: any;
            storage?: any;
            trader_bear?: any;
            trader_usec?: any;
        };
    };
    traders?: {
        "54cb50c76803fa8b248b4571"?: {
            assort?: any;
            base?: any;
            categories?: any;
            questassort?: any;
        };
        "54cb57776803fa99248b456e"?: {
            assort?: any;
            base?: any;
            categories?: any;
            questassort?: any;
            suits?: any;
        };
        "579dc571d53a0658a154fbec"?: {
            assort?: any;
            base?: any;
            categories?: any;
            questassort?: any;
        };
        "58330581ace78e27b8b10cee"?: {
            assort?: any;
            base?: any;
            categories?: any;
            questassort?: any;
            dialogue?: any;
        };
        "5935c25fb3acc3127c3d8cd9"?: {
            assort?: any;
            base?: any;
            categories?: any;
            questassort?: any;
            dialogue?: any;
        };
        "5a7c2eca46aef81a7ca2145d"?: {
            assort?: any;
            base?: any;
            categories?: any;
            questassort?: any;
            suits?: any;
        };
        "5ac3b934156ae10c4430e83c"?: {
            assort?: any;
            base?: any;
            categories?: any;
            questassort?: any;
        };
        "5c0647fdd443bc2504c2d371"?: {
            assort?: any;
            base?: any;
            categories?: any;
            questassort?: any;
        };
        ragfair?: {
            assort?: any;
            base?: any;
            categories?: any;
        };
    };
    weather?: {
        fog?: any;
        heavyclouds?: any;
        heavyrain?: any;
        lightclouds?: any;
        lightrain?: any;
        storm?: any;
        sun?: any;
        thunder?: any;
        wind?: any;
    };
}
