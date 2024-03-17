import { For, createSignal } from 'solid-js'
import { QuoteData, QuoteStatus } from '@renderer/types'
// import { Waiting, Denied, Signed } from './Circles'
import { CircleStatus, circleBuilder, getCircleKeyFromValue } from './Circles';

export default function QuoteRow({ quote }: { quote: QuoteData }) {

	const [status, setStatus] = createSignal<QuoteStatus>(quote.status);

	return (
		<tr>
			<th scope="row">{quote.id}</th>
			<td>{quote.date}</td>
			<td>{quote.reference}</td>
			<td>{quote.name}</td>
			<td>{quote.price}</td>
			<td>{quote.deposit}</td>
			<td>
				<select class="form-select"
					value={ getCircleKeyFromValue(status().name) }

					onInput={e => {
						const name: string = e.currentTarget.value
						const newStatus: QuoteStatus = circleBuilder(CircleStatus[name])

						setStatus(newStatus)
					}}>
					<For each={Object.keys(CircleStatus)}>{
						(status) => {
							return (
								<option value={status}>{CircleStatus[status]}</option>
							)
						}
					}</For>
				</select>
			</td>
			<td>
				{status().render()}
			</td>
		</tr>
	)
}
