
import { CartProductActions } from './product';


//** ---------------------  TYPES  --------------------- **//
export const RESET_CART = 'reset_cart';
export const SET_IS_EMPTY = 'set_is_empty';


//** --------------------  ACTIONS  -------------------- **//
export type ResetCartAction = {
  type: typeof RESET_CART;
};

export type SetIsEmptyAction = {
  type: typeof SET_IS_EMPTY;
  payload: boolean;
};


export type CartActions = CartProductActions | ResetCartAction | SetIsEmptyAction;
