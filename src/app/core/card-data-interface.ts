export interface CardData {
	Name: string;
	title: string;
	phrase: string;
	songUrl: string;
	partyDateTime: string;
	partyLocation: string;
	dressCode: string;
	confirmationDeadline: string;
	hastag: string;
	giftsData: {
		accountHolderName: string;
		cbuOrCvu: string;
		alias: string;
	},
	links: {
		googleMaps: string;
		saveDate: string;
		whatsapp: string;
	}
}