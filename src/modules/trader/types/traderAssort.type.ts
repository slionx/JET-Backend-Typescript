// This is wrong

type BarterItem = {
    count: number;
    _tpl: string;
};

type Listing = {
    loyality: number;
    barter_scheme: Array<Array<BarterItem>>;
    items: Array<undefined>; // TODO: Create base item type.
};

type TraderAssort = { [key: string]: Listing };
