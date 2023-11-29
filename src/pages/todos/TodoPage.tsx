// page componentlerde props ihtiyaç yok

import { useEffect, useLayoutEffect, useState } from 'react';
import { Todo } from './models/Todo';
import axios from 'axios';
import TodoList from './components/TodoList';
import { fetchTodos, fetchTodosById } from './services/todosApi';
// url ile çağırıldığı için props ihtiyaç duymaz
export default function TodoPage() {
	const [bgColor, setBgColor] = useState<string>('black');
	const [random, setRandom] = useState<number>(0);
	const [todos, setTodos] = useState<Todo[]>([]);
	const colors = ['white', 'yellow', 'green', 'blue', 'red'];
	useLayoutEffect(() => {
		// didmount + [bgColor] + didupdate 2 hook birlikte tek bir function içinde çalışır.
		console.log('useLayoutEffect 1 kez useEffect öncesinde tetikler');
		// document.body.style.backgroundColor = 'black';
		// document.body.style.color = 'white';
		// document nesnesi üzerinde stil değişiklikleri varsa burada uygulanır// senkron çalışır. // 'doma üzerindeki stil değişimlerinde kullanılır'
	}, [bgColor]); // bgColor değişimini takip et burası state change işleminde tetiklenir.
	// [bgColor, random] yaparsak bgColor veya random state değişiminden birinde bir değişiklik oluğu durumda tetiklenir.

	useEffect(() => {
		// didMount life cycle method denk gelir
		console.log('useEffect 1 kereye mahsus component doma gireken çalışır');
		// '1 kez useLayoutEffect sonrasında tetiklenir.' // sayfa açılışında veri çekip state güncellememiz gereken bir durum varsa burada yapılır. asenkron çalışır

		loadData(); // sayfanın ilk açışında datayı çek.
		return () => {
			// clean up function , willunmount methoduna denk gelir.
			console.log('component domdan çıkarken çalışır');
		};
	}, []); // [] demek state takibi yapmadığı anlamına gelir

	// 1.yöntem servis olmadan direk kullanım. Bu yöntemi genelde tercih etmiyoruz. servis yapısı ile başka componentlerde de todos listesine ihtiyacımız olabilir diye data işlemlerini bir servis klasörü içinden yapıyoruz.
	const loadData = async () => {
		try {
			// const response = await axios.get(
			// 	'https://jsonplaceholder.typicode.com/todos'
			// );
			// const data = response.data as Todo[]; // mapping işlemi
			const data = (await fetchTodos()) as Todo[];
			// fetchTodosById(1);
			console.log('todos', data);
			setTodos([...data]);
		} catch (error) {}
	};

	return (
		<>
			random: {random}
			<div style={{ backgroundColor: bgColor }}>
				<button
					onClick={() => {
						const colorIndex = Math.round(Math.random() * colors.length);
						// setBgColor(colors[colorIndex]);
						setRandom(colorIndex);
					}}
				>
					Random Color
				</button>
			</div>
			<hr></hr>
			<TodoList items={todos} />
		</>
	);
}
