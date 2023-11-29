import UserForm from './components/UserForm';

export default function UsersPage() {
	const onFormSubmit = (formData: any) => {
		console.log('formData', formData);
	};

	// submit={onFormSubmit} userForm component içindeki eylemi dinledim

	return (
		<>
			{/* child-1 component */}
			<UserForm submit={onFormSubmit} />
		</>
	);
}
