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

export const authLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case AUTH_LOGIN_REQUEST:
			return { loading: true };
		case AUTH_LOGIN_SUCCESS:
			return { loading: false, authInfo: action.payload };
		case AUTH_LOGIN_FAIL:
			return { loading: false, error: action.payload };
		case AUTH_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const authRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case AUTH_REGISTER_REQUEST:
			return { loading: true };
		case AUTH_REGISTER_SUCCESS:
			return { loading: false, authInfo: action.payload };
		case AUTH_REGISTER_FAIL:
			return { loading: false, error: action.payload };
		case AUTH_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const authDetailsReducer = (state = { user: {} }, action) => {
	switch (action.type) {
		case AUTH_DETAILS_REQUEST:
			return { ...state, loading: true };
		case AUTH_DETAILS_SUCCESS:
			return { loading: false, user: action.payload };
		case AUTH_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		case AUTH_DETAILS_RESET:
			return { user: {} };
		default:
			return state;
	}
};

export const authUpdateProfileReducer = (state = {}, action) => {
	switch (action.type) {
		case AUTH_UPDATE_PASSWORD_REQUEST:
			return { loading: true };
		case AUTH_UPDATE_PASSWORD_SUCCESS:
			return { loading: false, success: true, authInfo: action.payload };
		case AUTH_UPDATE_PASSWORD_FAIL:
			return { loading: false, error: action.payload };
		case AUTH_UPDATE_PASSWORD_RESET:
			return {};
		default:
			return state;
	}
};
