import { useState } from 'react';

type TodoItemProps = {
	completed: boolean;
	title: string;
};

export default function TodoItem(props: TodoItemProps) {
	const [completed, setCompleted] = useState<boolean>(props.completed);

	return (
		<>
			<p>
				<b>Yapılacak:</b> {props.title} <b>{completed ? 'Done' : 'Not Done'}</b>
				<input
					onChange={() => {
						setCompleted(!completed);
					}}
					type="checkbox"
					checked={completed}
				/>{' '}
				{completed === false && <button>Sil</button>}
			</p>
		</>
	);
}
