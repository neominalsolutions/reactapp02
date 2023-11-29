import axios from 'axios';
import { Todo } from '../models/Todo';

export const fetchTodos = async () => {
	try {
		let response = await axios.get(
			'https://jsonplaceholder.typicode.com/todos'
		);
		return response.data as Todo[];
	} catch (error) {}
};

export const fetchTodosById = async (id: number) => {
	return Promise.resolve({});
};
