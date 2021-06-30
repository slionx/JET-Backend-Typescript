import { PathLike } from "fs";
import { characterTraderStanding } from "src/modules/profile/types/traderStanding.type";

// This is wrong

export enum Currency { // TODO: Move to another class
    RUB = "5449016a4bdc2d6f028b456f",
    USD = "5696686a4bdc2da3298b456a",
    EUR = "569668774bdc2da2298b4568",
}

export enum CurrencyString { // TODO: Move to another class
    RUB = "RUB",
    USD = "USD",
    EUR = "EUR",
}

type TRepair = {
    availability: boolean;
    quality: number;
    excluded_id_list: string[];
    excluded_category: string[]; // Double check this type. // should be string[]
    currency: Currency;
    currency_coefficient: number;
    price_rate: number;
};

type TInsurance = {
    availability: boolean;
    min_payment: number;
    min_return_hour: number;
    max_return_hour: number;
    max_storage_time: number;
    excluded_category: string[]; // Double check this type. // should be string[]
};

export type Trader = {
    _id: string;
    working: boolean;
    customization_seller: boolean;
    name: string;
    surname: string;
    nickname: string;
    location: string;
    avatar: PathLike;
    balance_rub: number;
    balance_dol: number;
    balance_eur: number;
    display: boolean;
    discount: number;
    discount_end: number;
    buyer_up: boolean;
    currency: CurrencyString;
    supply_next_time: number;
    repair: TRepair;
    insurance: TInsurance;
    gridHeight: number;
    loyalty: characterTraderStanding;
    sell_category: string[];
};
