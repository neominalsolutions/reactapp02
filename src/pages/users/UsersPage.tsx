import { useState } from 'react';
import UserForm from './components/UserForm';
import { User } from './models/User';
import UserList from './components/UserList';

// parent component
// /users
export default function UsersPage() {
	const [users, setUsers] = useState<Array<User>>([]);

	const onFormSubmit = (formData: any) => {
		console.log('formData', formData);
		formData['id'] = users.length + 1;
		setUsers([...users, formData]); // state güncelleme
	};

	// submit={onFormSubmit} userForm component içindeki eylemi dinledim
	// props ile form component içerisinde custom bir event tanımı yaptık ve bu eventi onFormSubmit function ile dinliyoruz.
	return (
		<>
			{/* child-1 component */}
			<UserForm submit={onFormSubmit} />
			<hr></hr>
			<UserList items={users} />
		</>
	);
}
