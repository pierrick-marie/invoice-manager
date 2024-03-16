import { For, Switch, Match, createSignal } from 'solid-js'
import { QuoteData, QuoteStatus, getValueStatus, getKeyStatus } from '@renderer/types'
import { CircleSigned, CircleWaiting, CircleDenied } from './Circles'

export default function QuoteRow({ quote }: { quote: QuoteData }) {

	const [status, setStatus] = createSignal<string>(quote.status);

	// console.log(Object.values(QuoteStatus))
	// console.log(Object.keys(QuoteStatus))
	// console.log(quote.status)
	// console.log(status())
	// console.log(quote)
	// console.log(getValueStatus(status()))
	// console.log(status().)

	return (
		<tr>
			<th scope="row">{quote.id}</th>
			<td>{quote.date}</td>
			<td>{quote.reference}</td>
			<td>{quote.name}</td>
			<td>{quote.price}</td>
			<td>{quote.deposit}</td>
			<td>
				<select class="form-select" value={ status() }
					onInput={e => { 
						console.log(e.currentTarget.value)
						setStatus(e.currentTarget.value)
					}}>
					<For each={Object.keys(QuoteStatus)}>{
						(status) => <option value={status}>{ getValueStatus(status) }</option>
					}</For>
				</select>
			</td>
			<td>
				{/* { getValueStatus(status()) } */}

				<Switch fallback={<CircleDenied />} match={status()}>
					<Match when={status() === getKeyStatus(QuoteStatus.Signed)} >
						<CircleSigned />
					</Match>
					<Match when={status() === getKeyStatus(QuoteStatus.Waiting)}>
						<CircleWaiting />
					</Match>
				</Switch>
			</td>
		</tr>
	)
}
