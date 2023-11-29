import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<>
			<nav>
				<Link to="about">Hakımızda</Link> {' '}
				{/* <a href="/about">Hakkımızda</a> <Link></Link> */}
				<Link to="users"> Kullanıcılar</Link> {' '}
				{/* <a href="/users">Kullanıcılar</a> */}
				<a target="_blank" href="https://www.google.com" rel="noreferrer">
					Google
				</a>
			</nav>
		</>
	);
}
