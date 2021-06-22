
import { UserData } from '../../../utils/types';
import { CartProductActions } from './product';


//** ---------------------  TYPES  --------------------- **//
export const RESET_CART = 'reset_cart';
export const SET_IS_EMPTY = 'set_is_empty';
export const SET_CART_USER = 'set_cart_user';
export const UPDATE_TOTAL_COUNT = 'update_total_count';
export const UPDATE_TOTAL_PRICE = 'update_total_price';


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

export type UpdateTotalCountAction = {
  type: typeof UPDATE_TOTAL_COUNT;
  payload: number;
};

export type UpdateTotalPriceAction = {
  type: typeof UPDATE_TOTAL_PRICE;
  payload: number;
};

export type CartActions = CartProductActions | ResetCartAction | SetIsEmptyAction | SetCartUserAction | UpdateTotalCountAction | UpdateTotalPriceAction;
