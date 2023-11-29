import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionComponentSample from './components/FunctionComponentSample';
import FunctionComponentRefSample from './components/FunctionComponentRefSample';
import FunctionComponentFormSample from './components/FunctionComponentFormSample';
import UsersPage from './pages/users/UsersPage';

function App() {
	return (
		<div className="App">
			{/* <FunctionComponentSample /> */}
			{/* <FunctionComponentRefSample /> */}

			{/* <FunctionComponentFormSample text="ali" /> */}
			<UsersPage />
		</div>
	);
}

export default App;
