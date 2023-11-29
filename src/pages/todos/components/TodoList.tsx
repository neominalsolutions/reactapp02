import { useEffect, useState } from 'react';
import { Todo } from '../models/Todo';
import TodoItem from './TodoItem';

type TodoListProps = {
	items: Todo[];
};

export default function TodoList({ items }: TodoListProps) {
	const [filteredItems, setFilteredItems] = useState<Todo[]>([]);

	// items apiden tekrar çekildiği zaman items referansı değişeceği için yeniden itemsları güncelle

	useEffect(() => {
		setFilteredItems([...items]);
	}, [items]); // items değerinin değişimin takip edip filteredItemsları güncelle demek.

	const onSearch = (event: any) => {
		const text = event.target.value;
		const _items = items.filter((x) => new RegExp(text, 'i').test(x.title));
		setFilteredItems([..._items]);
		console.log('text', text);
		console.log('filteredItems', filteredItems);
	};

	console.log('filteredItems', items);

	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'start',
					padding: '5rem',
				}}
			>
				<input onChange={onSearch} placeholder="arama yapınız" />
				<hr></hr>
				{filteredItems.map((item: Todo) => {
					return (
						<>
							<TodoItem title={item.title} completed={item.completed} />
						</>
					);
				})}
			</div>
		</>
	);
}
