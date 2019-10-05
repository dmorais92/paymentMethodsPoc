import { combineReducers } from 'redux';
import payments from './paymentMethods.reducer';

const Root = combineReducers({
	payments
});

export default Root;
