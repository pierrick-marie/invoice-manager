import { type Component } from 'solid-js'
// import electronLogo from './assets/img/electron.svg'

import QuotesTable from './components/QuotesTable'
import { QuoteData } from './types'
import { CircleStatus, circleBuilder } from './components/Circles'

import Navbar from './components/Navbar'
// import Title from './components/Title'

const App: Component = () => {
	// const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')	

	const quotesData: QuoteData[] = [
		{ id: 1, name: 'Keyboard Cat', date: '15/12/23', reference: 'Malt', price: 3150, deposit: 0, status: circleBuilder(CircleStatus.Waiting) },
		{ id: 2, name: 'Keyboard Bob', date: '16/12/23', reference: 'Malt', price: 2800, deposit: 0, status: circleBuilder(CircleStatus.Signed) },
		{ id: 3, name: 'Keyboard Charlie', date: '17/12/23', reference: 'Malt', price: 2800, deposit: 0, status: circleBuilder(CircleStatus.Denied) },
	];

	return (
		<>

			<Navbar />

			<div class="container py-4 mx-auto">

				{/* <Title title={"Hello Bootstrap and Vite. It's amasing!"} /> */}
				<h1 class="display-4 text-center">Devis</h1>

				{/* <img alt="logo" class="logo" src={electronLogo} /> */}
				{/* <div class="creator">Powered by electron-vite</div>
				<div class="text">
					Build an Electron app with <span class="solid">Solid</span>
					&nbsp;and <span class="ts">TypeScript</span>

					<p>Test</p>
				</div> */}

				{/* <p class="tip">Please try pressing <code>F12</code> to open the devTool</p>
			<div class="actions">
				<div class="action">
					<a href="https://electron-vite.org/" target="_blank" rel="noreferrer">Documentation</a>
				</div>
			*/}
				{/* <div class="action">
					<a target="_blank" rel="noreferrer" onClick={ipcHandle}>Send IPC</a>
				</div> */}

				<QuotesTable quotes={quotesData} />

			</div>
		</>
	)
}

export default App
