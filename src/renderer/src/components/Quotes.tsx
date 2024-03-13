import { For } from 'solid-js'

export enum QuoteStatus {
	Waiting = "En attente",
	Accepted = "Accepté",
	Signed = "Signé",
}

export type QuoteProps = {
	id: number,
	date: string,
	reference: string,
	name: string,
	price: number,
	deposit: number,
	status: QuoteStatus,
}

export default function Quotes(props: {quotes: QuoteProps[]}) {

	return (
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Date</th>
					<th scope="col">Réference</th>
					<th scope="col">Intitulé</th>
					<th scope="col">Montant TTC</th>
					<th scope="col">Acompte</th>
					<th scope="col">Statu</th>
				</tr>
			</thead>
			<tbody>
				<For each={props.quotes}>{(quote) =>
					<tr>
						<th scope="row">{quote.id}</th>
						<td>{quote.date}</td>
						<td>{quote.reference}</td>
						<td>{quote.name}</td>
						<td>{quote.price}</td>
						<td>{quote.deposit}</td>
						<td>{quote.status}</td>
					</tr>
				}</For>
			</tbody>
		</table>
	)
}

