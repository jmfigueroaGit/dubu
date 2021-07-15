import React from 'react';
import Input from '../../components/Input';
import Buttons from '../../components/Button';
import DateTimePicker from '../../components/DateTimePicker';
import { Link } from 'react-router-dom';
const RegisterScreen = () => {
	return (
		<div className="register">
			<div>
				<div className="register-form">
					<div className="register-form__header">
						<h2>Create your account</h2>
					</div>
					<div className="register-form__input">
						<Input placeholder="Name" type="text" />
					</div>
					<div className="register-form__input">
						<Input placeholder="Email" type="email" />
					</div>
					<div className="register-form__date">
						<h4>Date of birth</h4>
						<p>
							This will not be shown publicly. Confirm your own age, even if
							this account is for a business, a pet, or something else.
						</p>
					</div>
					<DateTimePicker />
					<Link to="register/v2" className="link">
						<Buttons text="Next" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RegisterScreen;
