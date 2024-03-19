import { For, createSignal } from 'solid-js'
import { QuoteData, QuoteStatus, removeQuote, saveQuote } from '@renderer/types'
// import { Waiting, Denied, Signed } from './Circles'
import { CircleStatus, circleBuilder, getCircleKeyFromValue } from './Circles'
import { BiRegularSave } from 'solid-icons/bi'

function padTo2Digits(num: number) {
	return num.toString().padStart(2, '0');
}

function getCurrentData(): string {
	const now = new Date();

	const day = now.getDate()
	const month = padTo2Digits(now.getMonth() + 1)
	const year = now.getFullYear()

	return [day, month, year].join('/')
}

export default function QuoteRow({ id }: { id: number }) {

	const [status, setStatus] = createSignal<QuoteStatus>(circleBuilder(CircleStatus.Waiting));

	const save = (): void => {

		console.log('Save')
	}

	return (
		<tr>
			<th scope="row">{id}</th>
			<td>{getCurrentData()}</td> 
			<td>
				<input type="text" class="form-control" placeholder="Référence" aria-label="Référence" aria-describedby="basic-addon1" />
			</td>
			<td>
				<input type="text" class="form-control" placeholder="Intitulé" aria-label="Intitulé" aria-describedby="basic-addon1" />
			</td>
			<td>
				<input type="text" class="form-control" placeholder="Montant" aria-label="Montant" aria-describedby="basic-addon1" />
			</td>
			<td>
				<input type="text" class="form-control" placeholder="Accompte" aria-label="Accompte" aria-describedby="basic-addon1" />
			</td>
			<td>
				<select class="form-select"

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
				<BiRegularSave class="display-6 pointer" onClick={save} />
			</td>
		</tr>
	)
}
