import { useState } from 'react';

type InputProps = {
	text?: string; // optional
};

// props: InputProps çok yaygın bir kullanım
// { text }: InputProps object decontruction yöntemi (daha okunaklı bir kullanım için tercih edilebilir)
export default function FunctionComponentFormSample(props: InputProps) {
	// state props üzerinden inital değer bağladık
	// props değerlerini state inital değerleri aktarmak için kullanıyoruz
	const [inputText, setInputText] = useState<string | undefined>(props.text);

	const onInputChange = (event: any) => {
		const _event = event as Event;
		setInputText((_event.target as any).value);
		console.log('...rendering');
		console.log('value', (_event.target as any).value);
	};

	const reset = () => {
		setInputText('');
		console.log('...rendering');
	};

	return (
		<>
			<input onChange={onInputChange} value={inputText} />
			<button onClick={reset}>Reset</button>
		</>
	);
}
