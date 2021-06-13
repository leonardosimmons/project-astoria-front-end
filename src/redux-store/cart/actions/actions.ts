
import { UserData } from '../../../utils/types/types';
import { AppActions } from '../../action-types';
import { RESET_CART, SET_CART_USER, SET_IS_EMPTY } from '../action-types';


//* Actions
export function resetCart(): AppActions {
  return {
    type: RESET_CART
  };
};

export function setIsEmpty(b: boolean): AppActions {
  return {
    type: SET_IS_EMPTY,
    payload: b
  };
};


export function setCartUser(u: UserData): AppActions {
  return {
    type: SET_CART_USER,
    payload: u
  };
};
