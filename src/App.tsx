import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionComponentSample from './components/FunctionComponentSample';
import FunctionComponentRefSample from './components/FunctionComponentRefSample';
import FunctionComponentFormSample from './components/FunctionComponentFormSample';

function App() {
	return (
		<div className="App">
			{/* <FunctionComponentSample /> */}
			{/* <FunctionComponentRefSample /> */}

			<FunctionComponentFormSample text="ali" />
		</div>
	);
}

export default App;
