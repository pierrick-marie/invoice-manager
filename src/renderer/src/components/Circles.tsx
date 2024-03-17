import { QuoteStatus } from '@renderer/types'
import { FaSolidCircle } from 'solid-icons/fa'
import { JSXElement } from 'solid-js'

// ################
// Le nom des composants correspond aux clés des status dans types.ts
// ################

export enum CircleStatus {
	Waiting = "En attente",
	Signed = "Signé",
	Denied = "Refusé",
}

/**
 * Return the name of the key associated to a value of CircleStatus
 * @param status value of CircleStatus
 * @returns the name of the key for the CircleStatus
 */
export function getCircleKeyFromValue(status: string): string {
	return Object.keys(CircleStatus).find((key) => {
		return CircleStatus[key] === status
	}) as keyof typeof CircleStatus
}

export function circleBuilder(status: CircleStatus): QuoteStatus {
	switch (status) {
		case CircleStatus.Signed:
			return new SignedCircle()
		case CircleStatus.Denied:
			return new DeniedCircle()
		default:
			return new WaitingCircle()
	}
}

export class WaitingCircle implements QuoteStatus {
	name = CircleStatus.Waiting

	render(): JSXElement {
		return (
			<FaSolidCircle class="fs-3 text-primary" />
		)
	}
}

export class SignedCircle implements QuoteStatus {
	name = CircleStatus.Signed

	render(): JSXElement {
		return (
			<FaSolidCircle class="fs-3 text-success" />
		)
	}
}

export class DeniedCircle implements QuoteStatus {
	name = CircleStatus.Denied

	render(): JSXElement {

		return (
			<FaSolidCircle class="fs-3 text-danger" />
		)
	}
}
