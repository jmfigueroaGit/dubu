import React from 'react';
import Input from '../../components/Input';
import Buttons from '../../components/Button';
const RegisterScreen = () => {
	return (
		<div className="register">
			<div>
				<div className="register-form">
					<div className="register-form__header">
						<h2>Create your account</h2>
					</div>
					<div className="register-form__input">
						<Input placeholder="Username" type="email" />
					</div>
					<div className="register-form__input">
						<Input placeholder="Password" type="password" />
					</div>
					<div className="register-form__date">
						<p>
							By signing up, you agree to the Terms of Service and Privacy
							Policy, including Cookie Use. Others will be able to find you by
							email or phone number when provided · Privacy Options
						</p>
					</div>
					<Buttons text="Next" />
				</div>
			</div>
		</div>
	);
};

export default RegisterScreen;
