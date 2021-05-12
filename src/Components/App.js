import React from 'react';
import GlobalStyles from '../Globals/GlobalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Error from './Error';
import Footer from './Footer';
import DropdownMenu from './DropdownMenu';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<GlobalStyles />
				{/* <Header /> */}
				{/* <Switch> */}
				{/* <Route exact path="/"> */}
				{/* <Home /> */}
				{/* </Route> */}
				{/* <Route path={['/error', '']}> */}
				{/* <Error /> */}
				{/* </Route> */}
				{/* </Switch> */}
				{/* <Footer /> */}
				<DropdownMenu />
			</div>
		</BrowserRouter>
	);
};

export default App;
