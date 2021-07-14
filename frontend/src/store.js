import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	authLoginReducer,
	authRegisterReducer,
	authDetailsReducer,
} from './reducers/authReducers';

const reducer = combineReducers({
	authLogin: authLoginReducer,
	authRegister: authRegisterReducer,
	authDetails: authDetailsReducer,
});

const authInfoFromStorage = localStorage.getItem('authInfo')
	? JSON.parse(localStorage.getItem('authInfo'))
	: null;

const initialState = {
	authLogin: { authInfo: authInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
