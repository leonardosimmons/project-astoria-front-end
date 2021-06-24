
import { combineReducers } from 'redux';
import { shippingReducer } from './reducers/shipping';
import { orderStatusReducer } from './reducers/status';

export const orderReducer = combineReducers({
  shipping: shippingReducer,
  status: orderStatusReducer
});