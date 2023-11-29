type UserFormProps = {
	submit: (formData: any) => void;
};

// child componentten parent componente veri geçiş işlemi
export default function UserForm(props: UserFormProps) {
	const onSubmit = (event: any) => {
		const _event = event as Event; // casting

		_event.preventDefault();

		const form: HTMLFormElement = _event.target as HTMLFormElement;

		const _formData: any = {};

		for (let index = 0; index < form.elements.length; index++) {
			const inputElement = form.elements[index] as HTMLInputElement;

			if (inputElement.required && inputElement.value.trim() === '') {
				alert(`${inputElement.name} boş geçilemez`);
			} else {
				if (inputElement.type === 'text') {
					console.log('inputElement.name', inputElement.name);
					// property ismi = property value
					_formData[inputElement.name] = inputElement.value;
				}
			}
		}

		for (let index = 0; index < form.elements.length; index++) {
			const element = form.elements[index] as HTMLInputElement;

			if (element.type === 'text') {
				element.value = '';
			}
		}

		props.submit(_formData);
	};

	return (
		<>
			<form onSubmit={onSubmit} method="post" noValidate={true}>
				<input type="text" name="name" placeholder="name" required />
				<input type="text" placeholder="surname" name="surname" required />
				<input type="submit" value="Ekle" />
			</form>
		</>
	);
}
