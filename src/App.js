import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Resources from './pages/Resources.tsx';
import NoMatch from './pages/NoMatch';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/resources' element={<Resources />} />
			<Route path='*' element={<NoMatch />} />
		</Routes>
	);
};

export default App;
