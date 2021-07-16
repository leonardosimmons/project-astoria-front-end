
import { AppState } from './reducers';
import { ThunkAction } from 'redux-thunk';
import { UserActions } from './user/action-types';
import { CartActions } from './cart/action-types';
import { OrderActions } from './order/action-types/action-types';
import { RegistrationFormActions } from './registration/action-types';


export type AppActions = CartActions | RegistrationFormActions | OrderActions | UserActions;

export type AppThunk = ThunkAction<void, AppState, unknown, AppActions>;
