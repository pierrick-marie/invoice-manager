import './assets/scss/main.scss'

import { render } from 'solid-js/web'
import App from './App'

import '@popperjs/core'
import 'bootstrap'

render(() => <App />, document.getElementById('root') as HTMLElement)
