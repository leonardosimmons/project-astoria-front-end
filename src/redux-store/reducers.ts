
import { combineReducers } from 'redux';
import { cartReducer } from './cart/reducer';
import { orderReducer } from './order/reducer';
import { userReducer } from './user/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  order: orderReducer
});

export type AppState = ReturnType<typeof rootReducer>;