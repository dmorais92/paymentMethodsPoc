import { combineReducers } from 'redux';
import payments from './payments.reducer';

const Root = combineReducers({
  payments,
});

export default Root;
