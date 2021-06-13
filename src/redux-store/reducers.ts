import { combineReducers } from 'redux';
import { indexPageReducer } from '../containers/pages/index/state';
import { registrationFormReducer } from '../containers/pages/register/state/reducer';
import { cartReducer } from './cart/reducer';
import { userReducer } from './user/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  // indexPage: indexPageReducer,
  // regForm: registrationFormReducer,
});

export type AppState = ReturnType<typeof rootReducer>;