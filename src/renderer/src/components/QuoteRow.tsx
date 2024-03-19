import { For, createSignal } from 'solid-js'
import { QuoteData, QuoteStatus, removeQuote, saveQuote } from '@renderer/types'
// import { Waiting, Denied, Signed } from './Circles'
import { CircleStatus, circleBuilder, getCircleKeyFromValue } from './Circles'
import { RiSystemDeleteBin5Line } from 'solid-icons/ri'

export default function QuoteRow({ quote }: { quote: QuoteData }) {

	const [status, setStatus] = createSignal<QuoteStatus>(quote.status);

	const remove = (): void => {
		quote.status = status()
		removeQuote(quote)
	}

	return (
		<tr>
			<th scope="row">{quote.id}</th>
			<td>{quote.date}</td>
			<td>{quote.reference}</td>
			<td>{quote.name}</td>
			<td>{quote.price} €</td>
			<td>{quote.deposit} €</td>
			<td>
				<select class="form-select"
					value={getCircleKeyFromValue(status().name)}

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
			<td>
				<RiSystemDeleteBin5Line class="display-6 pointer" onClick={remove} />
			</td>
		</tr>
	)
}
