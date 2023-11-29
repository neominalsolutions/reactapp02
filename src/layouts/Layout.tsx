import { Outlet } from 'react-router-dom';
import NavBar from './Menu';
import Footer from './Footer';

export default function Layout() {
	return (
		<>
			<div style={{ padding: '1rem' }}>
				<NavBar />
				<main style={{ padding: '1rem' }}>
					<Outlet />
					{/* UserPage, HomePage, AboutPage gibi page componentler outlet işaretlendiği yerde doma girecek. react işaretleyici bir component yapmış bu durumda sayfanın url hangi componentin açalıaşcağını index.ts dosyasında belirtip ilgili component doma girmesini sağlıyor. */}
				</main>
				<Footer>
					<p>Alt Bilgi</p>
					<NavBar />
				</Footer>
			</div>
		</>
	);
}
