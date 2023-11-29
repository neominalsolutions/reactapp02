import { useState } from 'react';

// type FunctionComponentSampleState = {
// 	counter: number;
// 	random: number;
// };

export default function FunctionComponentSample() {
	// let counter: number = 0;
	// let random: number = 0;
	console.log('...rendering');

	// function componentlerde istediğimiz kadar bağımsız state ile çalıaşbiliriz.

	const [counter, setCounter] = useState<number>(0); // 0 initialize value
	const [random, setRandom] = useState<number>(); // value type states

	const increase = () => {
		// counter += 1; state direk olarak müdehale edilemez
		setCounter(counter + 1);
		// this.state.counter = this.state.counter + 1;
		// setState({... this.state});
		console.log('counter', counter);
	};
	const randomNumber = () => {
		setRandom(Math.round(Number(Math.random() * 100)));
		console.log('random', random);
	};
	// render methodu ile aynı
	return (
		<>
			<div>
				<label>Counter: {counter}</label>{' '}
				<button onClick={increase}>(+)</button>
				<hr></hr>
				<label>Random Number: {random}</label>{' '}
				<button onClick={randomNumber}>Generate Random Number</button>
			</div>
		</>
	);
}
