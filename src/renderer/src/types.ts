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