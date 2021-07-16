export type TlocalesQuest = {
	name: string,
	description: string,
	note: string,
	failMessageText: string,
	startedMessageText: string,
	successMessageText: string,
	conditions: { [key: string]: string },
	location: string,
}