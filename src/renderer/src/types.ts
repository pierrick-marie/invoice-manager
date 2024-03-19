import { JSXElement } from "solid-js"

export interface QuoteStatus {
	name: string
	render(): JSXElement
}

export interface QuoteData {
	id: number
	date: string
	reference: string
	name: string
	price: number
	deposit: number
	status: QuoteStatus
}

export function removeQuote (quote: QuoteData): void {
	console.log(`Delete: `)
	console.log(quote)
}

export function saveQuote (quote: QuoteData): void {
	console.log(`Save: `)
	console.log(quote)	
}
