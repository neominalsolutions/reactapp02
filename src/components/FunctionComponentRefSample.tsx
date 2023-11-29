import { useState } from 'react';

interface User {
	id: number;
	name: string;
	surname: string;
}
export default function FunctionComponentRefSample() {
	console.log('...rendering');
	// formdaki bilgileri diziye push edeceğiz.
	const [users, setUsers] = useState<Array<User>>([]);

	const onSubmit = (event: any) => {
		const _event = event as Event; // casting

		_event.preventDefault(); // formun gönderilmesini engelle
		// spa uygulamalarda form işlemlerinde sayfanın refleshlenmemesi için preventDefault ile formun default davranışına geri döndürürüz. web client olan front end uygulamaları react, vue, svelte, angular

		const form: HTMLFormElement = _event.target as HTMLFormElement; // event.target element dönüyor type casting

		const _formData: any = {};

		console.log('form', _event);

		console.log('form.elements.length', form.elements.length);

		for (let index = 0; index < form.elements.length; index++) {
			const inputElement = form.elements[index] as HTMLInputElement;

			console.log('inputElement.type', inputElement.type);

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

		//console.log('formData', _formData);
		// formda state içerisine id users dizindeki kullanılıların sayısı kadar id üretiyorum. seq_id üretimi yaptım

		_formData['id'] = users.length + 1; // elimizdeki değişken senkron çalışır.
		// setFormData({ ..._formData }); // state asenkron olarak çalışır.
		// console.log('state formData', formData);

		// users.push(_formData);
		// setUsers(users); // invalid user listesindeki referans değeri değişmediğinden virtual dom güncellenmedi.

		// 1.yöntem
		// users.push(_formData);
		// setUsers([...users]);

		// 2.yöntem tek satır yazım şekli
		setUsers([...users, _formData]); // push ettik. tercih ettiğim yöntem

		// 3.yöntem
		// users.push(_formData);
		// const _users = users.map((item) => {
		// 			return {
		// 				id: item.id,
		// 				name: item.name,
		// 				surname: item.surname,
		// 			};
		// 		});

		// console.log('form-submit', formData);

		// clear Inputs
		for (let index = 0; index < form.elements.length; index++) {
			const element = form.elements[index] as HTMLInputElement;

			if (element.type === 'text') {
				element.value = '';
			}
		}
	};

	// noValidate html5 validasyon çağırma demek
	return (
		<>
			<form onSubmit={onSubmit} method="post" noValidate={true}>
				<input type="text" name="name" placeholder="name" required />
				<input type="text" placeholder="surname" name="surname" required />
				<input type="submit" value="Ekle" />
			</form>

			<div>
				{users.map((user: User) => {
					return (
						<div key={user.id}>
							{user.name.toUpperCase()} {user.surname.toUpperCase()}
						</div>
					);
				})}
			</div>
		</>
	);
}
