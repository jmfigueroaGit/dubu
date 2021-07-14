import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
const App = () => {
	return (
		<Router>
			<main>
				<Route component={HomeScreen} path="/" exact />{' '}
				<Route component={LoginScreen} path="/login" />
				<Route component={RegisterScreen} path="/register" />
			</main>
		</Router>
	);
};

export default App;
