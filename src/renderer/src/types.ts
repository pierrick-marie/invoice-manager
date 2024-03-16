export enum QuoteStatus {
	Waiting = "En attente",
	Signed = "Signé",
	Denied = "Refusé",
}

export function getKeyStatus(status: QuoteStatus): string {
	return Object.keys(QuoteStatus)[Object.values(QuoteStatus).indexOf(status)]
}

export function getValueStatus(status: string): QuoteStatus {
	return Object.values(QuoteStatus)[Object.keys(QuoteStatus).indexOf(status)]
}

export interface QuoteData {
	id: number,
	date: string,
	reference: string,
	name: string,
	price: number,
	deposit: number,
	status: string,
}