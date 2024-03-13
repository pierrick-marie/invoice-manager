import { type Component, createSignal } from 'solid-js'

type TitleProps = {
	title: string,
}

const Title: Component<TitleProps> = (props) => {

	const [count, setCount] = createSignal(0);

	const incrementHandler = (): void => {
		setCount(c => c + 1)
	}

	const resetHandler = (): void => {
		setCount(0)
	}

	return (
		<div >
			<h1>{ props.title } {count()}</h1>
			<button class="btn btn-danger" onClick={incrementHandler}>Primary button</button>
			<button class="btn btn-success" onClick={resetHandler}>Reset button</button>
		</div>
	)
}

export default Title
