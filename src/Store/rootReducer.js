import { combineReducers } from "redux";
import payments from "./paymentMethodsReducer.js";

const Root = combineReducers({
  payments
});
export default Root;
