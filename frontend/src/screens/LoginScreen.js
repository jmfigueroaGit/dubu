import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
const LoginScreen = () => {
	return (
		<div className="login">
			<div>
				<div className="login-form">
					<h1>Login in to Dubu</h1>
					<div className="login-form__input">
						<Input placeholder="Email" type="email" />
					</div>
					<div className="login-form__input">
						<Input placeholder="Password" type="password" />
					</div>
					<Button text="Login" />
					<h5>
						<span className="text__forgot-password">
							<a href="/login">Forgot Password?</a>
						</span>
						<span className="text__sign-up">
							<a href="/login">Sign up for Dubu</a>
						</span>
					</h5>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
