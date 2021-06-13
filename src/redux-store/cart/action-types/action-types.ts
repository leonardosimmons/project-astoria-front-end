
import { UserData } from '../../../utils/types';
import { CartProductActions } from './product';


//** ---------------------  TYPES  --------------------- **//
export const RESET_CART = 'reset_cart';
export const SET_IS_EMPTY = 'set_is_empty';
export const SET_CART_USER = 'set_cart_user';


//** --------------------  ACTIONS  -------------------- **//
export type ResetCartAction = {
  type: typeof RESET_CART;
};

export type SetIsEmptyAction = {
  type: typeof SET_IS_EMPTY;
  payload: boolean;
};

export type SetCartUserAction = {
  type: typeof SET_CART_USER;
  payload: UserData;
};


export type CartActions = CartProductActions | ResetCartAction | SetIsEmptyAction | SetCartUserAction;
