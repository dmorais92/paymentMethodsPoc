import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from './root.reducer';

const store = createStore(
	RootReducer,
	{
		payments: {
			paymentMethodsData: []
		}
	},
	applyMiddleware(logger, thunk)
);

export default store;
