import {
	AUTH_LOGIN_FAIL,
	AUTH_LOGIN_REQUEST,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGOUT,
	AUTH_REGISTER_FAIL,
	AUTH_REGISTER_REQUEST,
	AUTH_REGISTER_SUCCESS,
	AUTH_DETAILS_FAIL,
	AUTH_DETAILS_REQUEST,
	AUTH_DETAILS_RESET,
	AUTH_DETAILS_SUCCESS,
	AUTH_UPDATE_PASSWORD_FAIL,
	AUTH_UPDATE_PASSWORD_REQUEST,
	AUTH_UPDATE_PASSWORD_SUCCESS,
	AUTH_UPDATE_PASSWORD_RESET,
} from '../constants/authConstants';
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: AUTH_LOGIN_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(
			'/api/auth/login',
			{ email, password },
			config
		);

		dispatch({
			type: AUTH_LOGIN_SUCCESS,
			payload: data,
		});

		localStorage.setItem('authInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: AUTH_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const logout = () => (dispatch) => {
	localStorage.removeItem('authInfo');
	dispatch({ type: AUTH_LOGOUT });
	dispatch({ type: AUTH_DETAILS_RESET });
	document.location.href = '/login';
};

export const register =
	(name, username, email, password) => async (dispatch) => {
		try {
			dispatch({
				type: AUTH_REGISTER_REQUEST,
			});

			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const { data } = await axios.post(
				'/api/auth/register',
				{ name, username, email, password },
				config
			);

			dispatch({
				type: AUTH_REGISTER_SUCCESS,
				payload: data,
			});

			dispatch({
				type: AUTH_LOGIN_SUCCESS,
				payload: data,
			});

			localStorage.setItem('authInfo', JSON.stringify(data));
		} catch (error) {
			dispatch({
				type: AUTH_REGISTER_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

export const getUserDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: AUTH_DETAILS_REQUEST,
		});

		const {
			authLogin: { authInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${authInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/auth/${id}`, config);

		dispatch({
			type: AUTH_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (message === 'Not authorized, token failed') {
			dispatch(logout());
		}
		dispatch({
			type: AUTH_DETAILS_FAIL,
			payload: message,
		});
	}
};
