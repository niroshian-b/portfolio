import React, { useState } from 'react';
import GlobalStyles from '../Globals/GlobalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Error from './Error';
import Footer from './Footer';
import DropdownMenu from './DropdownMenu';

const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<BrowserRouter>
			<div>
				<GlobalStyles />
				<Header isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
				<DropdownMenu isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path={['/error', '']}>
						<Error />
					</Route>
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
