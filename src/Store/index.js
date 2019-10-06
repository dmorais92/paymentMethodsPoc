import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import throttle from 'lodash.throttle';
import RootReducer from './root.reducer';
import { loadState, saveState } from './localStorage';

const isDevelopment = process.env.NODE_ENV === 'development';
const middlewares = [thunk];
if (isDevelopment) {
  middlewares.push(logger);
}

const persistedState = loadState();
const store = createStore(RootReducer, persistedState, applyMiddleware(...middlewares));

store.subscribe(
  throttle(() => {
    saveState({
      payments: store.getState().payments,
    });
  }, 1000),
);
export default store;
