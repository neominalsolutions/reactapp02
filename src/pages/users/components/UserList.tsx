import { User } from '../models/User';

type UserListProps = {
	items: Array<User>;
};

export default function UserList(props: UserListProps) {
	return (
		<>
			<div>
				{props.items.map((item: User) => {
					return (
						<div key={item.id}>
							{item.name.toUpperCase()} {item.surname.toUpperCase()}
						</div>
					);
				})}
			</div>
		</>
	);
}
