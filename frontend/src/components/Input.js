import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({ placeholder, type }) => {
	return (
		<form className="input" noValidate autoComplete="off">
			<TextField
				className="input"
				id="outlined-basic"
				label={placeholder}
				variant="outlined"
				type={type}
				InputLabelProps={{ className: 'inputLabel' }}
				InputProps={{ className: 'inputText' }}
			/>
		</form>
	);
};

export default Input;
