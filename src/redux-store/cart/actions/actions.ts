
import React from 'react';
import { AppActions, AppThunk } from '../../action-types';
import { HttpController } from '../../../helpers/HttpController';
import { ProductCartToken, UserData } from '../../../utils/types';
import { 
  RESET_CART, 
  SET_CART_USER, 
  SET_IS_EMPTY, 
  UPDATE_TOTAL_COUNT, 
  UPDATE_TOTAL_PRICE 
} from '../action-types';

import { addProductToCart } from './product';


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

export function updateTotalCount(t: number): AppActions {
  return {
    type: UPDATE_TOTAL_COUNT,
    payload: t
  };
};

export function updateTotalPrice(p: number): AppActions {
  return {
    type: UPDATE_TOTAL_PRICE,
    payload: p
  };
};


//* Thunk
export function getUserCart(): AppThunk {
  return async (dispatch: React.Dispatch<AppActions>) => {
    const ISSERVER = typeof window === 'undefined';
    
    if (!ISSERVER) {
      const token: string = JSON.parse(window.localStorage.getItem('auth-token') as string);
      const http: HttpController = new HttpController(token);

      if (token) {
        const cart: Array<ProductCartToken> = await http.get(process.env.NEXT_PUBLIC_GET_USER_CART as string);
        dispatch(resetCart());
        
        for(let i=0; i < cart.length; i++) {
          dispatch(addProductToCart(cart[i]));
        }
      }
    }
  };
};
