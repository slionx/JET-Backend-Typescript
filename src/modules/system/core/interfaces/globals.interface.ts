export interface IGlobals {
    BotWeaponScatterings?: TBotWeaponScattering[],
    HealthEffect?: boolean,
    ItemPresets?: { [key: string]: TItemPreset },
    bot_presets?: TBotConfigs[],
    config?: {
        "AimPunchMagnitude": number,
        "Aiming": {
            "AimProceduralIntensity": number,
            "HeavyWeight": number,
            "LightWeight": number,
            "MaxTimeHeavy": number,
            "MaxTimeLight": number,
            "MinTimeHeavy": number,
            "MinTimeLight": number,
            "ProceduralIntensityByPose": {
                "x": number,
                "y": number,
                "z": number
            }
        },
        "ArmorMaterials": {
            "Aluminium": {
                "Destructibility": number,
                "ExplosionDestructibility": number,
                "MaxRepairDegradation": number,
                "MinRepairDegradation": number
            },
            "Aramid": {
                "Destructibility": number,
                "ExplosionDestructibility": number,
                "MaxRepairDegradation": number,
                "MinRepairDegradation": number
            },
            "ArmoredSteel": {
                "Destructibility": number,
                "ExplosionDestructibility": number,
                "MaxRepairDegradation": number,
                "MinRepairDegradation": number
            },
            "Ceramic": {
                "Destructibility": number,
                "ExplosionDestructibility": number,
                "MaxRepairDegradation": number,
                "MinRepairDegradation": number
            },
            "Combined": {
                "Destructibility": number,
                "ExplosionDestructibility": number,
                "MaxRepairDegradation": number,
                "MinRepairDegradation": number
            },
            "Glass": {
                "Destructibility": number,
                "ExplosionDestructibility": number,
                "MaxRepairDegradation": number,
                "MinRepairDegradation": number
            },
            "Titan": {
                "Destructibility": number,
                "ExplosionDestructibility": number,
                "MaxRepairDegradation": number,
                "MinRepairDegradation": number
            },
            "UHMWPE": {
                "Destructibility": number,
                "ExplosionDestructibility": number,
                "MaxRepairDegradation": number,
                "MinRepairDegradation": number
            }
        },
        "AzimuthPanelShowsPlayerOrientation": boolean,
        "BaseCheckTime": number,
        "BaseLoadTime": number,
        "BaseUnloadTime": number,
        "BotsEnabled": boolean,
        "Customization": {
            "BodyParts": {
                "Body": string,
                "Feet": string,
                "Hands": string,
                "Head": string
            },
            "CustomizationVoice": TCustomizationVoice[],
            "SavageBody": {
                "Top_BOSS_Sanitar": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "Top_security_Gorka4": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "Top_security_Husky": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "Tshirt_security_TshirtTatu_01": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "Tshirt_security_TshirtTatu_02": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "Wild_Dealmaker_body": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "scav_kit_upper_meteor": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "top_boss_tagilla": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "top_cultist_01": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "top_cultist_02": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "wild_Gluhar_body": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "wild_Killa_body": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "wild_Shturman_body": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "wild_body": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "wild_body_1": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "wild_body_2": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "wild_body_3": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "wild_body_motocross": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "wild_body_rainparka": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "wild_body_russia1": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "wild_body_underarmour": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "wild_pmcBot_body": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "wild_security_body_1": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                },
                "wild_security_body_2": {
                    "body": string,
                    "hands": string,
                    "isNotRandom": boolean
                }
            },
            "SavageFeet": {
                "Pants_BOSS_Glukhar": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "Pants_BOSS_Sanitar": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "Pants_BOSS_Shturman": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "Pants_security_Flora": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "Pants_security_Gorka4": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "Wild_Dealmaker_feet": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "Wild_Killa_feet": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "pants_boss_tagilla": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "pants_cultist_01": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "pants_cultist_02": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "scav_kit_lower_sklon": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "wild_feet": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "wild_feet_1": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "wild_feet_2": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "wild_feet_scavelite_taclite": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "wild_feet_slimPants": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "wild_feet_sweatpants": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "wild_feet_wasatch": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "wild_pmcBot_feet": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "wild_security_feet_1": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                }
            },
            "SavageHead": {
                "Head_BOSS_Glukhar": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "Head_BOSS_Sanitar": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "Wild_Dealmaker_head": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "Wild_Head_nonMesh": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "Wild_Killa_head": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "bear_head": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "bear_head_1": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "head_cultist_01": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "head_cultist_02": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "head_cultist_03": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "usec_head_1": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "wild_head_1": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "wild_head_2": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "wild_head_3": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "wild_head_drozd": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                },
                "wild_head_misha": {
                    "NotRandom": boolean,
                    "head": string,
                    "isNotRandom": boolean
                }
            }
        },
        "EventType": string[],
        "FenceSettings": {
            "FenceId": string,
            "Levels": {
                "-1": {
                    "AvailableExits": number,
                    "BotFollowChance": number,
                    "ExfiltrationPriceModifier": number,
                    "HostileBosses": boolean,
                    "HostileScavs": boolean,
                    "PaidExitCostModifier": number,
                    "PriceModifier": number,
                    "SavageCooldownModifier": number,
                    "ScavAttackSupport": boolean,
                    "ScavCaseTimeModifier": number,
                    "ScavEquipmentSpawnChanceModifier": number
                },
                "-2": {
                    "AvailableExits": number,
                    "BotFollowChance": number,
                    "ExfiltrationPriceModifier": number,
                    "HostileBosses": boolean,
                    "HostileScavs": boolean,
                    "PaidExitCostModifier": number,
                    "PriceModifier": number,
                    "SavageCooldownModifier": number,
                    "ScavAttackSupport": boolean,
                    "ScavCaseTimeModifier": number,
                    "ScavEquipmentSpawnChanceModifier": number
                },
                "-3": {
                    "AvailableExits": number,
                    "BotFollowChance": number,
                    "ExfiltrationPriceModifier": number,
                    "HostileBosses": boolean,
                    "HostileScavs": boolean,
                    "PaidExitCostModifier": number,
                    "PriceModifier": number,
                    "SavageCooldownModifier": number,
                    "ScavAttackSupport": boolean,
                    "ScavCaseTimeModifier": number,
                    "ScavEquipmentSpawnChanceModifier": number
                },
                "-4": {
                    "AvailableExits": number,
                    "BotFollowChance": number,
                    "ExfiltrationPriceModifier": number,
                    "HostileBosses": boolean,
                    "HostileScavs": boolean,
                    "PaidExitCostModifier": number,
                    "PriceModifier": number,
                    "SavageCooldownModifier": number,
                    "ScavAttackSupport": boolean,
                    "ScavCaseTimeModifier": number,
                    "ScavEquipmentSpawnChanceModifier": number
                },
                "-5": {
                    "AvailableExits": number,
                    "BotFollowChance": number,
                    "ExfiltrationPriceModifier": number,
                    "HostileBosses": boolean,
                    "HostileScavs": boolean,
                    "PaidExitCostModifier": number,
                    "PriceModifier": number,
                    "SavageCooldownModifier": number,
                    "ScavAttackSupport": boolean,
                    "ScavCaseTimeModifier": number,
                    "ScavEquipmentSpawnChanceModifier": number
                },
                "-6": {
                    "AvailableExits": number,
                    "BotFollowChance": number,
                    "ExfiltrationPriceModifier": number,
                    "HostileBosses": boolean,
                    "HostileScavs": boolean,
                    "PaidExitCostModifier": number,
                    "PriceModifier": number,
                    "SavageCooldownModifier": number,
                    "ScavAttackSupport": boolean,
                    "ScavCaseTimeModifier": number,
                    "ScavEquipmentSpawnChanceModifier": number
                },
                "-7": {
                    "AvailableExits": number,
                    "BotFollowChance": number,
                    "ExfiltrationPriceModifier": number,
                    "HostileBosses": boolean,
                    "HostileScavs": boolean,
                    "PaidExitCostModifier": number,
                    "PriceModifier": number,
                    "SavageCooldownModifier": number,
                    "ScavAttackSupport": boolean,
                    "ScavCaseTimeModifier": number,
                    "ScavEquipmentSpawnChanceModifier": number
                },
                "0": {
                    "AvailableExits": number,
                    "BotFollowChance": number,
                    "ExfiltrationPriceModifier": number,
                    "HostileBosses": boolean,
                    "HostileScavs": boolean,
                    "PaidExitCostModifier": number,
                    "PriceModifier": number,
                    "SavageCooldownModifier": number,
                    "ScavAttackSupport": boolean,
                    "ScavCaseTimeModifier": number,
                    "ScavEquipmentSpawnChanceModifier": number
                },
                "1": {
                    "AvailableExits": number,
                    "BotFollowChance": number,
                    "ExfiltrationPriceModifier": number,
                    "HostileBosses": boolean,
                    "HostileScavs": boolean,
                    "PaidExitCostModifier": number,
                    "PriceModifier": number,
                    "SavageCooldownModifier": number,
                    "ScavAttackSupport": boolean,
                    "ScavCaseTimeModifier": number,
                    "ScavEquipmentSpawnChanceModifier": number
                },
                "2": {
                    "AvailableExits": number,
                    "BotFollowChance": number,
                    "ExfiltrationPriceModifier": number,
                    "HostileBosses": boolean,
                    "HostileScavs": boolean,
                    "PaidExitCostModifier": number,
                    "PriceModifier": number,
                    "SavageCooldownModifier": number,
                    "ScavAttackSupport": boolean,
                    "ScavCaseTimeModifier": number,
                    "ScavEquipmentSpawnChanceModifier": number
                },
                "3": {
                    "AvailableExits": number,
                    "BotFollowChance": number,
                    "ExfiltrationPriceModifier": number,
                    "HostileBosses": boolean,
                    "HostileScavs": boolean,
                    "PaidExitCostModifier": number,
                    "PriceModifier": number,
                    "SavageCooldownModifier": number,
                    "ScavAttackSupport": boolean,
                    "ScavCaseTimeModifier": number,
                    "ScavEquipmentSpawnChanceModifier": number
                },
                "4": {
                    "AvailableExits": number,
                    "BotFollowChance": number,
                    "ExfiltrationPriceModifier": number,
                    "HostileBosses": boolean,
                    "HostileScavs": boolean,
                    "PaidExitCostModifier": number,
                    "PriceModifier": number,
                    "SavageCooldownModifier": number,
                    "ScavAttackSupport": boolean,
                    "ScavCaseTimeModifier": number,
                    "ScavEquipmentSpawnChanceModifier": number
                },
                "5": {
                    "AvailableExits": number,
                    "BotFollowChance": number,
                    "ExfiltrationPriceModifier": number,
                    "HostileBosses": boolean,
                    "HostileScavs": boolean,
                    "PaidExitCostModifier": number,
                    "PriceModifier": number,
                    "SavageCooldownModifier": number,
                    "ScavAttackSupport": boolean,
                    "ScavCaseTimeModifier": number,
                    "ScavEquipmentSpawnChanceModifier": number
                },
                "6": {
                    "AvailableExits": number,
                    "BotFollowChance": number,
                    "ExfiltrationPriceModifier": number,
                    "HostileBosses": boolean,
                    "HostileScavs": boolean,
                    "PaidExitCostModifier": number,
                    "PriceModifier": number,
                    "SavageCooldownModifier": number,
                    "ScavAttackSupport": boolean,
                    "ScavCaseTimeModifier": number,
                    "ScavEquipmentSpawnChanceModifier": number
                }
            },
            "paidExitStandingNumerator": number
        },
        "FractureCausedByBulletHit": {
            "B": number,
            "FunctionType": string,
            "K": number,
            "Threshold": number
        },
        "FractureCausedByFalling": {
            "B": number,
            "FunctionType": string,
            "K": number,
            "Threshold": number
        },
        "GameSearchingTimeout": number,
        "GlobalItemPriceModifier": number,
        "GlobalLootChanceModifier": number,
        "HandsOverdamage": number,
        "Health": {
            "Effects": {
                "Berserk": {
                    "DefaultDelay": number,
                    "DefaultResidueTime": number,
                    "WorkingTime": number
                },
                "BodyTemperature": {
                    "DefaultBuildUpTime": number,
                    "DefaultResidueTime": number,
                    "LoopTime": number
                },
                "BreakPart": {
                    "BulletHitProbability": {
                        "B": number,
                        "FunctionType": string,
                        "K": number,
                        "Threshold": number
                    },
                    "DefaultDelay": number,
                    "DefaultResidueTime": number,
                    "FallingProbability": {
                        "B": number,
                        "FunctionType": string,
                        "K": number,
                        "Threshold": number
                    },
                    "HealExperience": number,
                    "OfflineDurationMax": number,
                    "OfflineDurationMin": number,
                    "RemovePrice": number,
                    "RemovedAfterDeath": false
                },
                "ChronicStaminaFatigue": {
                    "EnergyRate": number,
                    "EnergyRatePerStack": number,
                    "TicksEvery": number,
                    "WorkingTime": number
                },
                "Contusion": {
                    "Dummy": number
                },
                "Dehydration": {
                    "BleedingHealth": number,
                    "BleedingLifeTime": number,
                    "BleedingLoopTime": number,
                    "DamageOnStrongDehydration": number,
                    "DefaultDelay": number,
                    "DefaultResidueTime": number,
                    "StrongDehydrationLoopTime": number
                },
                "Disorientation": {
                    "Dummy": number
                },
                "Exhaustion": {
                    "Damage": number,
                    "DamageLoopTime": number,
                    "DefaultDelay": number,
                    "DefaultResidueTime": number
                },
                "Existence": {
                    "DestroyedStomachEnergyTimeFactor": number,
                    "DestroyedStomachHydrationTimeFactor": number,
                    "EnergyDamage": number,
                    "EnergyLoopTime": number,
                    "HydrationDamage": number,
                    "HydrationLoopTime": number
                },
                "Flash": {
                    "Dummy": number
                },
                "Fracture": {
                    "BulletHitProbability": {
                        "B": number,
                        "FunctionType": string,
                        "K": number,
                        "Threshold": number
                    },
                    "DefaultDelay": number,
                    "DefaultResidueTime": number,
                    "FallingProbability": {
                        "B": number,
                        "FunctionType": string,
                        "K": number,
                        "Threshold": number
                    },
                    "HealExperience": number,
                    "OfflineDurationMax": number,
                    "OfflineDurationMin": number,
                    "RemovePrice": number,
                    "RemovedAfterDeath": boolean
                },
                "HeavyBleeding": {
                    "DamageEnergy": number,
                    "DamageHealth": number,
                    "DamageHealthDehydrated": number,
                    "DefaultDelay": number,
                    "DefaultResidueTime": number,
                    "EliteVitalityDuration": number,
                    "EnergyLoopTime": number,
                    "HealExperience": number,
                    "HealthLoopTime": number,
                    "HealthLoopTimeDehydrated": number,
                    "LifeTimeDehydrated": number,
                    "OfflineDurationMax": number,
                    "OfflineDurationMin": number,
                    "Probability": {
                        "B": number,
                        "FunctionType": string,
                        "K": number,
                        "Threshold": number
                    },
                    "RemovePrice": number,
                    "RemovedAfterDeath": false
                },
                "Intoxication": {
                    "DamageHealth": number,
                    "DefaultDelay": number,
                    "DefaultResidueTime": number,
                    "HealExperience": number,
                    "HealthLoopTime": number,
                    "OfflineDurationMax": number,
                    "OfflineDurationMin": number,
                    "RemovePrice": number,
                    "RemovedAfterDeath": false
                },
                "LightBleeding": {
                    "DamageEnergy": number,
                    "DamageHealth": number,
                    "DamageHealthDehydrated": number,
                    "DefaultDelay": number,
                    "DefaultResidueTime": number,
                    "EliteVitalityDuration": number,
                    "EnergyLoopTime": number,
                    "HealExperience": number,
                    "HealthLoopTime": number,
                    "HealthLoopTimeDehydrated": number,
                    "LifeTimeDehydrated": number,
                    "OfflineDurationMax": number,
                    "OfflineDurationMin": number,
                    "Probability": {
                        "B": number,
                        "FunctionType": string,
                        "K": number,
                        "Threshold": number
                    },
                    "RemovePrice": number,
                    "RemovedAfterDeath": boolean
                },
                "LowEdgeHealth": {
                    "DefaultDelay": number,
                    "DefaultResidueTime": number,
                    "StartCommonHealth": number
                },
                "MedEffect": {
                    "DrinkStartDelay": number,
                    "DrugsStartDelay": number,
                    "FoodStartDelay": number,
                    "LoopTime": number,
                    "MedKitStartDelay": number,
                    "MedicalStartDelay": number,
                    "StartDelay": number,
                    "StimulatorStartDelay": number
                },
                "Pain": {
                    "HealExperience": number,
                    "TremorDelay": number
                },
                "PainKiller": {
                    "Dummy": number
                },
                "RadExposure": {
                    "Damage": number,
                    "DamageLoopTime": number
                },
                "Regeneration": {
                    "BodyHealth": {
                        "Chest": {
                            "Value": number
                        },
                        "Head": {
                            "Value": number
                        },
                        "LeftArm": {
                            "Value": number
                        },
                        "LeftLeg": {
                            "Value": number
                        },
                        "RightArm": {
                            "Value": number
                        },
                        "RightLeg": {
                            "Value": number
                        },
                        "Stomach": {
                            "Value": number
                        }
                    },
                    "Energy": number,
                    "Hydration": number,
                    "Influences": {
                        "Fracture": {
                            "EnergySlowDownPercentage": number,
                            "HealthSlowDownPercentage": number,
                            "HydrationSlowDownPercentage": number
                        },
                        "HeavyBleeding": {
                            "EnergySlowDownPercentage": number,
                            "HealthSlowDownPercentage": number,
                            "HydrationSlowDownPercentage": number
                        },
                        "Intoxication": {
                            "EnergySlowDownPercentage": number,
                            "HealthSlowDownPercentage": number,
                            "HydrationSlowDownPercentage": number
                        },
                        "LightBleeding": {
                            "EnergySlowDownPercentage": number,
                            "HealthSlowDownPercentage": number,
                            "HydrationSlowDownPercentage": number
                        },
                        "RadExposure": {
                            "EnergySlowDownPercentage": number,
                            "HealthSlowDownPercentage": number,
                            "HydrationSlowDownPercentage": number
                        }
                    },
                    "LoopTime": number,
                    "MinimumHealthPercentage": number
                },
                "SandingScreen": {
                    "Dummy": number
                },
                "Stimulator": {
                    "BuffLoopTime": number,
                    "Buffs": {
                        "BuffsAdrenaline": TBuffs[],
                        "BuffsGoldenStarBalm": TBuffs[],
                        "BuffsPropital": TBuffs[],
                        "BuffsSJ1TGLabs": TBuffs[],
                        "BuffsSJ6TGLabs": TBuffs[],
                        "BuffsZagustin": TBuffs[],
                        "Buffs_3bTG": TBuffs[],
                        "Buffs_AHF1M": TBuffs[],
                        "Buffs_Antidote": TBuffs[],
                        "Buffs_BodyTemperature": TBuffs[],
                        "Buffs_KultistsToxin": TBuffs[],
                        "Buffs_L1": TBuffs[],
                        "Buffs_MULE": TBuffs[],
                        "Buffs_Meldonin": TBuffs[],
                        "Buffs_Obdolbos": TBuffs[],
                        "Buffs_P22": TBuffs[],
                        "Buffs_drink_aquamari": TBuffs[],
                        "Buffs_drink_hotrod": TBuffs[],
                        "Buffs_drink_jack": TBuffs[],
                        "Buffs_drink_juice_army": TBuffs[],
                        "Buffs_drink_maxenergy": TBuffs[],
                        "Buffs_drink_milk": TBuffs[],
                        "Buffs_drink_moonshine": TBuffs[],
                        "Buffs_drink_purewater": TBuffs[],
                        "Buffs_drink_tarcola": TBuffs[],
                        "Buffs_drink_vodka": TBuffs[],
                        "Buffs_drink_water": TBuffs[],
                        "Buffs_food_borodinskiye": TBuffs[],
                        "Buffs_food_condensed_milk": TBuffs[],
                        "Buffs_food_emelya": TBuffs[],
                        "Buffs_food_mayonez": TBuffs[],
                        "Buffs_food_mre": TBuffs[],
                        "Buffs_food_sugar": TBuffs[],
                        "Buffs_hultafors": TBuffs[],
                        "Buffs_melee_bleed": TBuffs[],
                        "Buffs_melee_blunt": TBuffs[],
                        "BuffseTGchange": TBuffs[]
                    }
                },
                "Stun": {
                    "Dummy": number
                },
                "Tremor": {
                    "DefaultDelay": number,
                    "DefaultResidueTime": number
                },
                "Wound": {
                    "ThresholdMax": number,
                    "ThresholdMin": number,
                    "WorkingTime": number
                }
            },
            "Falling": {
                "DamagePerMeter": number,
                "SafeHeight": number
            },
            "HealPrice": {
                "EnergyPointPrice": number,
                "HealthPointPrice": number,
                "HydrationPointPrice": number,
                "TrialLevels": number,
                "TrialRaids": number
            },
            "PlayerHealthFactors": {
                "BodyPartsHealth": {
                    "Chest": {
                        "Default": number,
                        "Maximum": number,
                        "Minimum": number
                    },
                    "Head": {
                        "Default": number,
                        "Maximum": number,
                        "Minimum": number
                    },
                    "LeftArm": {
                        "Default": number,
                        "Maximum": number,
                        "Minimum": number
                    },
                    "LeftLeg": {
                        "Default": number,
                        "Maximum": number,
                        "Minimum": number
                    },
                    "RightArm": {
                        "Default": number,
                        "Maximum": number,
                        "Minimum": number
                    },
                    "RightLeg": {
                        "Default": number,
                        "Maximum": number,
                        "Minimum": number
                    },
                    "Stomach": {
                        "Default": number,
                        "Maximum": number,
                        "Minimum": number
                    }
                },
                "HealthFactors": {
                    "Energy": {
                        "Default": number,
                        "Maximum": number,
                        "Minimum": number
                    },
                    "Hydration": {
                        "Default": number,
                        "Maximum": number,
                        "Minimum": number
                    },
                    "Poisoning": {
                        "Default": number,
                        "Maximum": number,
                        "Minimum": number
                    },
                    "Radiation": {
                        "Default": number,
                        "Maximum": number,
                        "Minimum": number
                    },
                    "Temperature": {
                        "Default": number,
                        "Maximum": number,
                        "Minimum": number
                    }
                }
            }
        },
        "Insurance": {
            "MaxStorageTimeInHour": number
        },
        "LegsOverdamage": number,
        "LoadTimeSpeedProgress": number,
        "Malfunction": {
            "AllowMalfForBots": false,
            "AmmoMalfChanceMult": number,
            "MagazineMalfChanceMult": number,
            "MalfRepairHardSlideMult": number,
            "MalfRepairOneHandBrokenMult": number,
            "MalfRepairTwoHandsBrokenMult": number
        },
        "MarksmanAccuracy": number,
        "Mastering": TMasterings[],
        "MaxBotsAliveOnMap": number,
        "MaxLoyaltyLevelForAll": false,
        "Overheat": {
            "AutoshotChance": number,
            "AutoshotMinOverheat": number,
            "AutoshotPossibilityDuration": number,
            "BarrelMoveMaxMult": number,
            "BarrelMoveRndDuration": number,
            "DurReduceMaxMult": number,
            "DurReduceMinMult": number,
            "EnableSlideOnMaxOverheat": true,
            "FirerateOverheatBorder": number,
            "FireratePitchMult": number,
            "FirerateReduceMaxMult": number,
            "FirerateReduceMinMult": number,
            "FixSlideOverheat": number,
            "MaxCOIIncreaseMult": number,
            "MaxMalfChance": number,
            "MaxWearOnMaxOverheat": number,
            "MaxWearOnOverheat": number,
            "MinMalfChance": number,
            "MinWearOnMaxOverheat": number,
            "MinWearOnOverheat": number,
            "ModCoolFactor": number,
            "ModHeatFactor": number,
            "OverheatWearLimit": number,
            "StartSlideOverheat": number
        },
        "RagFair": {
            "ChangePriceCoef": number,
            "balancerAveragePriceCoefficient": number,
            "balancerMinPriceCount": number,
            "balancerRemovePriceCoefficient": number,
            "balancerUserItemSaleCooldown": number,
            "balancerUserItemSaleCooldownEnabled": boolean,
            "communityItemTax": number,
            "communityRequirementTax": number,
            "communityTax": number,
            "delaySinceOfferAdd": number,
            "enabled": boolean,
            "includePveTraderSales": boolean,
            "isOnlyFoundInRaidAllowed": boolean,
            "maxActiveOfferCount": TMaxOfferCount[],
            "maxRenewOfferTimeInHour": number,
            "maxSumForDecreaseRatingPerOneSale": number,
            "maxSumForIncreaseRatingPerOneSale": number,
            "maxSumForRarity": {
                "Common": {
                    "value": number
                },
                "Not_exist": {
                    "value": number
                },
                "Rare": {
                    "value": number
                },
                "Superrare": {
                    "value": number
                }
            },
            "minUserLevel": number,
            "offerDurationTimeInHour": number,
            "offerDurationTimeInHourAfterRemove": number,
            "offerPriorityCost": number,
            "priceStabilizerEnabled": boolean,
            "priceStabilizerStartIntervalInHours": number,
            "priorityTimeModifier": number,
            "ratingDecreaseCount": number,
            "ratingIncreaseCount": number,
            "ratingSumForDecrease": number,
            "ratingSumForIncrease": number,
            "renewPricePerHour": number,
            "sellInOnePiece": number,
            "uniqueBuyerTimeoutInDays": number,
            "youSellOfferMaxStorageTimeInHour": number,
            "yourOfferDidNotSellMaxStorageTimeInHour": number
        },
        "RequirementReferences": {
            "Alpinist": TRequirementReference[]
        },
        "RestrictionsInRaid": TRestrictionInRaid[],
        "SavagePlayCooldown": number,
        "SavagePlayCooldownDevelop": number,
        "SavagePlayCooldownNdaFree": number,
        "SessionsToShowHotKeys": number,
        "SkillAtrophy": false,
        "SkillEnduranceWeightThreshold": number,
        "SkillExpPerLevel": number,
        "SkillFatiguePerPoint": number,
        "SkillFatigueReset": number,
        "SkillFreshEffectiveness": number,
        "SkillFreshPoints": number,
        "SkillMinEffectiveness": number,
        "SkillPointsBeforeFatigue": number,
        "SkillsSettings": {
            "AdvancedModding": object[],
            "AimDrills": {
                "WeaponShotAction": number
            },
            "Assault": {
                "WeaponChamberAction": number,
                "WeaponFixAction": number,
                "WeaponReloadAction": number,
                "WeaponShotAction": number
            },
            "AttachedLauncher": object[],
            "Attention": {
                "ExamineWithInstruction": number,
                "FindActionFalse": number,
                "FindActionTrue": number
            },
            "Auctions": object[],
            "Barter": object[],
            "BearAksystems": object[],
            "BearAssaultoperations": object[],
            "BearAuthority": object[],
            "BearHeavycaliber": object[],
            "BearRawpower": object[],
            "BotReload": object[],
            "BotSound": object[],
            "Charisma": {
                "SkillProgressAtn": number,
                "SkillProgressInt": number,
                "SkillProgressPer": number
            },
            "Cleanoperations": object[],
            "CovertMovement": {
                "MovementAction": number
            },
            "Crafting": {
                "CraftTimeReductionPerLevel": number,
                "CraftingCycleHours": number,
                "CraftingPointsToInteligence": number,
                "EliteExtraProductions": number,
                "PointsPerCraftingCycle": number,
                "PointsPerUniqueCraftCycle": number,
                "ProductionTimeReductionPerLevel": number,
                "UniqueCraftsPerCycle": number
            },
            "DMR": {
                "WeaponChamberAction": number,
                "WeaponFixAction": number,
                "WeaponReloadAction": number,
                "WeaponShotAction": number
            },
            "Endurance": {
                "GainPerFatigueStack": number,
                "MovementAction": number,
                "SprintAction": number
            },
            "FieldMedicine": object[],
            "FirstAid": object[],
            "Freetrading": object[],
            "HMG": object[],
            "Health": {
                "SkillProgress": number
            },
            "HeavyVests": object[],
            "HideoutManagement": {
                "ConsumptionReductionPerLevel": number,
                "EliteSlots": {
                    "AirFilteringUnit": {
                        "Container": number,
                        "Slots": number
                    },
                    "BitcoinFarm": {
                        "Container": number,
                        "Slots": number
                    },
                    "Generator": {
                        "Container": number,
                        "Slots": number
                    },
                    "WaterCollector": {
                        "Container": number,
                        "Slots": number
                    }
                },
                "SkillBoostPercent": number,
                "SkillPointsPerAreaUpgrade": number,
                "SkillPointsPerCraft": number,
                "SkillPointsRate": {
                    "AirFilteringUnit": {
                        "PointsGained": number,
                        "ResourceSpent": number
                    },
                    "Generator": {
                        "PointsGained": number,
                        "ResourceSpent": number
                    },
                    "SolarPower": {
                        "PointsGained": number,
                        "ResourceSpent": number
                    },
                    "WaterCollector": {
                        "PointsGained": number,
                        "ResourceSpent": number
                    }
                }
            },
            "Immunity": {
                "HealthNegativeEffect": number,
                "ImmunityMiscEffects": number,
                "ImmunityPainKiller": number,
                "ImmunityPoisonBuff": number,
                "StimulatorNegativeBuff": number
            },
            "Intellect": {
                "ExamineAction": number,
                "RepairAction": number,
                "SkillProgress": number
            },
            "LMG": object[],
            "Launcher": object[],
            "LightVests": object[],
            "Lockpicking": object[],
            "MagDrills": {
                "MagazineCheckAction": number,
                "RaidLoadedAmmoAction": number,
                "RaidUnloadedAmmoAction": number
            },
            "Melee": object[],
            "Memory": {
                "AnySkillUp": number,
                "SkillProgress": number
            },
            "Metabolism": {
                "DecreaseNegativeEffectDurationRate": number,
                "DecreasePoisonDurationRate": number,
                "EnergyRecoveryRate": number,
                "HydrationRecoveryRate": number,
                "IncreasePositiveEffectDurationRate": number
            },
            "NightOps": object[],
            "Perception": {
                "OnlineAction": number,
                "UniqueLoot": number
            },
            "Pistol": {
                "WeaponChamberAction": number,
                "WeaponFixAction": number,
                "WeaponReloadAction": number,
                "WeaponShotAction":number
            },
            "ProneMovement": object[],
            "RecoilControl": {
                "RecoilAction": number
            },
            "Revolver": object[],
            "SMG": object[],
            "Search": {
                "FindAction": number,
                "SearchAction": number
            },
            "Shadowconnections": object[],
            "Shotgun": {
                "WeaponChamberAction": number,
                "WeaponFixAction": number,
                "WeaponReloadAction": number,
                "WeaponShotAction": number
            },
            "SilentOps": object[],
            "SkillProgressRate": number,
            "Sniper": {
                "WeaponChamberAction": number,
                "WeaponFixAction": number,
                "WeaponReloadAction": number,
                "WeaponShotAction": number
            },
            "Sniping": object[],
            "Strength": {
                "FistfightAction": number,
                "MovementActionMax": number,
                "MovementActionMin": number,
                "PushUpMax": number,
                "PushUpMin": number,
                "SprintActionMax": number,
                "SprintActionMin": number,
                "ThrowAction": number
            },
            "StressResistance": {
                "HealthNegativeEffect": number,
                "LowHPDuration": number
            },
            "Surgery": {
                "SkillProgress": number,
                "SurgeryAction": number
            },
            "Taskperformance": object[],
            "Throwing": {
                "ThrowAction": number
            },
            "TroubleShooting": {
                "EliteAmmoChanceReduceMult": number,
                "EliteDurabilityChanceReduceMult": number,
                "EliteMagChanceReduceMult": number,
                "MalfRepairSpeedBonusPerLevel": number,
                "SkillPointsPerMalfFix": number
            },
            "UsecArsystems": object[],
            "UsecDeepweaponmodding_Settings": object[],
            "UsecLongrangeoptics_Settings": object[],
            "UsecNegotiations": object[],
            "UsecTactics": object[],
            "Vitality": {
                "DamageTakenAction": number,
                "HealthNegativeEffect": number
            },
            "WeaponModding": object[],
            "WeaponSkillProgressRate": number,
            "WeaponTreatment": {
                "DurLossReducePerLevel": number,
                "Filter": string[],
                "SkillPointsPerRepair": number,
                "WearChanceReducePerLevel": number
            }
        },
        "SprintSpeed": {
            "x": number,
            "y": number,
            "z": number
        },
        "Stamina": {
            "AimConsumptionByPose": {
                "x": number,
                "y": number,
                "z": number
            },
            "AimDrainRate": number,
            "AimingSpeedMultiplier": number,
            "BaseHoldBreathConsumption": number,
            "BaseOverweightLimits": {
                "x": number,
                "y": number,
                "z": number
            },
            "BaseRestorationRate": number,
            "Capacity": number,
            "CrouchConsumption": {
                "x": number,
                "y": number,
                "z": number
            },
            "ExhaustedMeleeDamageMultiplier": number,
            "ExhaustedMeleeSpeed": number,
            "FallDamageMultiplier": number,
            "FatigueAmountToCreateEffect": number,
            "FatigueRestorationRate": number,
            "GrenadeHighThrow": number,
            "GrenadeLowThrow": number,
            "HandsCapacity": number,
            "HandsRestoration": number,
            "HoldBreathStaminaMultiplier": {
                "x": number,
                "y": number,
                "z": number
            },
            "JumpConsumption": number,
            "OverweightConsumptionByPose": {
                "x": number,
                "y": number,
                "z": number
            },
            "OxygenCapacity": number,
            "OxygenRestoration": number,
            "ProneConsumption": number,
            "RestorationMultiplierByPose": {
                "x": number,
                "y": number,
                "z": number
            },
            "SafeHeightOverweight": number,
            "SitToStandConsumption": number,
            "SoundRadius": {
                "x": number,
                "y": number,
                "z": number
            },
            "SprintAccelerationLowerLimit": number,
            "SprintDrainRate": number,
            "SprintOverweightLimits": {
                "x": number,
                "y": number,
                "z": number
            },
            "SprintSensitivityLowerLimit": number,
            "SprintSpeedLowerLimit": number,
            "StaminaExhaustionCausesJiggle": boolean,
            "StaminaExhaustionRocksCamera": boolean,
            "StaminaExhaustionStartsBreathSound": boolean,
            "StandupConsumption": {
                "x": number,
                "y": number,
                "z": number
            },
            "TransitionSpeed": {
                "x": number,
                "y": number,
                "z": number
            },
            "WalkConsumption": {
                "x": number,
                "y": number,
                "z": number
            },
            "WalkOverweightLimits": {
                "x": number,
                "y": number,
                "z": number
            },
            "WalkSpeedOverweightLimits": {
                "x": number,
                "y": number,
                "z": number
            },
            "WalkVisualEffectMultiplier": number
        },
        "StaminaDrain": {
            "LeftPlatoPoint": number,
            "LowerLeftPoint": number,
            "LowerRightPoint": number,
            "RightLimit": number,
            "RightPlatoPoint": number,
            "ZeroValue": number
        },
        "StaminaRestoration": {
            "LeftPlatoPoint": number,
            "LowerLeftPoint": number,
            "LowerRightPoint": number,
            "RightLimit": number,
            "RightPlatoPoint": number,
            "ZeroValue": number
        },
        "StomachOverdamage": number,
        "TODSkyDate": string,
        "TeamSearchingTimeout": number,
        "TestValue": number,
        "TimeBeforeDeploy": number,
        "TimeBeforeDeployLocal": number,
        "TradingUnlimitedItems": boolean,
        "UncheckOnShot": boolean,
        "WAVE_COEF_HIGH": number,
        "WAVE_COEF_HORDE": number,
        "WAVE_COEF_LOW": number,
        "WAVE_COEF_MID": number,
        "WalkSpeed": {
            "x": number,
            "y": number,
            "z": number
        },
        "WallContusionAbsorption": {
            "x": number,
            "y": number,
            "z": number
        },
        "WeaponSkillProgressRate": number,
        "armor": {
            "class": [{[key: string]: number}]
        },
        "content": {
            "ip": string,
            "port": number,
            "root": string
        },
        "exp": {
            "expForLockedDoorBreach": number,
            "expForLockedDoorOpen": number,
            "heal": {
                "expForEnergy": number,
                "expForHeal": number,
                "expForHydration": number
            },
            "kill": {
                "bloodLossToLitre": number,
                "combo": [{[key: string]: number}],
                "expOnDamageAllHealth": number,
                "headShotMult": number,
                "longShotDistance": number,
                "victimBotLevelExp": number,
                "victimLevelExp": number
            },
            "level": {
                "clan_level": number,
                "exp_table": [{[key: string]: number}],
                "mastering1": number,
                "mastering2": number,
                "savage_level": number,
                "trade_level": number
            },
            "loot": null,
            "loot_attempts": [{[key: string]: number}],
            "match_end": {
                "README": string,
                "killedMult": number,
                "leftMult": number,
                "miaMult": number,
                "mia_exp_reward": number,
                "runnerMult": number,
                "runner_exp_reward": number,
                "survivedMult": number,
                "survived_exp_requirement": number,
                "survived_exp_reward": number,
                "survived_seconds_requirement": number
            },
            "triggerMult": number
        },
        "handbook": {
            "defaultCategory": "5b5f78dc86f77409407a7f8e"
        },
        "rating": {
            "categories": {
                "avgEarnings": boolean,
                "experience": boolean,
                "inventoryFullCost": boolean,
                "kd": boolean,
                "kills": boolean,
                "longestShot": boolean,
                "ragFairStanding": boolean,
                "raidCount": boolean,
                "surviveRatio": boolean,
                "timeOnline": boolean
            },
            "levelRequired": number,
            "limit": number
        },
        "t_base_lockpicking": number,
        "t_base_looting": number,
        "tournament": {
            "categories": {
                "dogtags": boolean
            },
            "levelRequired": number,
            "limit": number
        }
    },
    time?: number
}

type TRestrictionInRaid = {
    TemplateId: string, 
    Value: number
}

type TRequirementReference = {
    Count: number,
    Id: string,
    RequiredSlot: string,
    Requirement: string,
    RequirementTip: string
}

type TMaxOfferCount = {
    count: number,
    from: number,
    to: number
}

type TMasterings = {
    Level2: number,
    Level3: number,
    Name: string,
    Templates: string[]
}

type TBuffs = {
    AbsoluteValue: boolean,
    BuffType: string,
    Chance: number,
    Delay: number,
    Duration: number,
    SkillName: string,
    Value: number
}

type TCustomizationVoice = {
    isNotRandom: boolean,
    side: string[],
    voice: string
}

type TBotConfigs = {
    BotDifficulty: string,
    COEF_IF_MOVE: number,
    FIRST_CONTACT_ADD_SEC: number,
    HearingSense: number,
    MAX_AIMING_UPGRADE_BY_TIME: number,
    Role: string,
    SCATTERING_DIST_MODIF: number,
    ScatteringPerMeter: number,
    UseThis: boolean,
    VisibleAngle: number,
    VisibleDistance: number
}

type TItemPreset = {
    "_changeWeaponName": boolean,
    "_encyclopedia": string,
    "_id": string,
    "_items": object[],
    "_name": string,
    "_parent": string,
    "_type": string
}

type TBotWeaponScattering = {
    Name: string,
    PriorityScatter100meter: number,
    PriorityScatter10meter: number,
    PriorityScatter1meter: number
}