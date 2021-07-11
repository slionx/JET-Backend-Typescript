interface Locales_Full {
	banners: { [key: string]: Locales_Banner },
	customization: { [key: string]: Locales_Customization },
	enum: object[],
	error: { [key: string]: string },
	handbook: { [key: string]: string },
	interface: { [key: string]: string },
	locations: { [key: string]: Locales_Locations },
	mail: { [key: string]: string },
	preset: { [key: string]: Locales_Preset },
	quest: { [key: string]: Locales_Quest },
	season: { [key: string]: string },
	templates: { [key: string]: Locales_Templates },
	trading: { [key: string]: Locales_Trading }
}

type Locales_Banner = {
	name: string,
	description: string
}
type Locales_Customization = {
	Name: string,
	ShortName: string,
	Description: string
}
type Locales_Templates = {
	Name: string,
	ShortName: string,
	Description: string
}
type Locales_Locations = {
	Name: string,
	Description: string
}
type Locales_Preset = {
	Name: string
}
type Locales_Quest = {
	name: string,
	description: string,
	note: string,
	failMessageText: string,
	startedMessageText: string,
	successMessageText: string,
	conditions: { [key: string]: string },
	location: string,
}
type Locales_Trading = {
	FullName: string,
	FirstName: string,
	Nickname: string,
	Location: string,
	Description: string
}
interface Locales_Language {
	ShortName: string,
	Name: string
}

interface Locales_Menu {
    menu: { [key: string]: string }
}