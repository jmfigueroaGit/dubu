import React from 'react';
import Input from '../components/Input';
import Buttons from '../components/Button';
import { Link } from 'react-router-dom';
const LoginScreen = () => {
	return (
		<div className="login">
			<div>
				<div className="login-form">
					<div className="login-form__header">
						<h1>Login in to Dubu</h1>
					</div>
					<div className="login-form__input">
						<Input placeholder="Email" type="email" />
					</div>
					<div className="login-form__input">
						<Input placeholder="Password" type="password" />
					</div>
					<Buttons text="Login" />
					<h5>
						<Link to="/register" className="link">
							<span className="text__forgot-password">Forgot Password?</span>
						</Link>{' '}
						<Link to="/register" className="link">
							<span className="text__sign-up">Sign up for Dubu</span>
						</Link>
					</h5>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
