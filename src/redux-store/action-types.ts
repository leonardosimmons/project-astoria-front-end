
import { AppState } from './reducers';
import { ThunkAction } from 'redux-thunk';
import { UserActions } from './user/action-types';
import { CartActions } from './cart/action-types';


export type AppActions = CartActions | UserActions;

export type AppThunk = ThunkAction<void, AppState, unknown, AppActions>;
