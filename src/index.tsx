import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersPage from './pages/users/UsersPage';
import Layout from './layouts/Layout';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={Layout}>
					<Route path="" element={<h1>Anasayfa</h1>}></Route>
					<Route path="users" Component={UsersPage}></Route>
					<Route path="about" element={<h1>Hakkımızda Sayfası</h1>}></Route>
				</Route>
			</Routes>
		</BrowserRouter>

		{/* <App /> */}
	</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
