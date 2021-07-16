
import { combineReducers } from 'redux';
import { cartReducer } from './cart/reducer';
import { orderReducer } from './order/reducer';
import { userReducer } from './user/reducer';
import { registrationFormReducer } from './registration/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  order: orderReducer,
  registration: registrationFormReducer
});

export type AppState = ReturnType<typeof rootReducer>;