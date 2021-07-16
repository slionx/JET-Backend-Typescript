import { TlocalesBanner } from "./banner.type";
import { TlocalesCustomization } from "./customization.type";
import { TlocalesLocation } from "./locations.type";
import { TlocalesPreset } from "./preset.type";
import { TlocalesQuest } from "./quest.type";
import { TlocalesTemplate } from "./template.type";
import { TlocalesTrading } from "./trading.type";

export type TlocalesBase = {
	banners: { [key: string]: TlocalesBanner },
	customization: { [key: string]: TlocalesCustomization },
	enum: object[],
	error: { [key: string]: string },
	handbook: { [key: string]: string },
	interface: { [key: string]: string },
	locations: { [key: string]: TlocalesLocation },
	mail: { [key: string]: string },
	preset: { [key: string]: TlocalesPreset },
	quest: { [key: string]: TlocalesQuest },
	season: { [key: string]: string },
	templates: { [key: string]: TlocalesTemplate },
	trading: { [key: string]: TlocalesTrading }
}