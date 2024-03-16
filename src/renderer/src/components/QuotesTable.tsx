import { For } from 'solid-js'
import { QuoteData } from '@renderer/types'
import QuoteRow from './QuoteRow'

export default function QuotesTable(props: { quotes: QuoteData[] }) {

	return (
		<table class="table table-striped table-hover align-middle text-center">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Date</th>
					<th scope="col">Réference</th>
					<th scope="col">Intitulé</th>
					<th scope="col">Montant TTC</th>
					<th scope="col">Acompte</th>
					<th scope="col">Statu</th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				<For each={props.quotes}>{(quote) =>
					<QuoteRow quote={ quote } />
				}</For>
			</tbody>
		</table>
	)
}

