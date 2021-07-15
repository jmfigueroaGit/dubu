import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import index from './screens/Register/index';
import RegisterScreen from './screens/Register/RegisterScreen';
const App = () => {
	return (
		<Router>
			<main>
				<Route component={HomeScreen} path="/" exact />{' '}
				<Route component={LoginScreen} path="/login" />
				<Route component={index} path="/register" exact />
				<Route component={RegisterScreen} path="/register/v2" />
			</main>
		</Router>
	);
};

export default App;
