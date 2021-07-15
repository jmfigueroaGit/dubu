import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createTheme({
	palette: {
		primary: {
			main: '#FFFFFF',
		},
		secondary: {
			main: '#24C4CD',
		},
	},
});
const Buttons = ({ text }) => {
	return (
		<ThemeProvider theme={theme}>
			<Button variant="contained" color="secondary" size="small">
				<span className="btn btn-default">{text}</span>
			</Button>
		</ThemeProvider>
	);
};

export default Buttons;
