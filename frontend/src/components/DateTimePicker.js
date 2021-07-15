import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
const materialTheme = createTheme({
	overrides: {
		MuiPickersToolbar: {
			toolbar: {
				backgroundColor: '#2F3569',
			},
		},
		MuiPickersDay: {
			day: {
				color: lightBlue.A700,
			},
			daySelected: {
				backgroundColor: lightBlue['400'],
			},
			dayDisabled: {
				color: lightBlue['100'],
			},
			current: {
				color: lightBlue['900'],
			},
		},
		MuiPickersModal: {
			dialogAction: {
				color: lightBlue['400'],
			},
		},
	},
});
export default function DateTimePicker() {
	// The first commit of Material-UI
	const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now()));

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<ThemeProvider theme={materialTheme}>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker
					margin="normal"
					id="date-picker-dialog"
					format="MM/dd/yyyy"
					value={selectedDate}
					InputProps={{ className: 'inputDate' }}
					onChange={handleDateChange}
					variant="inline"
					KeyboardButtonProps={{
						className: 'inputIcon',
					}}
				/>
			</MuiPickersUtilsProvider>
		</ThemeProvider>
	);
}
