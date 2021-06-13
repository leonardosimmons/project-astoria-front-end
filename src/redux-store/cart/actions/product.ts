
import { AppActions, AppThunk } from '../../action-types';
import { ProductCartToken } from '../../../utils/types';
import { 
  ADD_PRODUCT, 
  REMOVE_PRODUCT, 
  UPDATE_PRODUCT, 
  UPDATE_TOTAL_PRODUCT_COUNT 
} from './../action-types/product';
import React from 'react';
import { AppState } from '../../reducers';


//* Actions
export function addProductToCart(p: ProductCartToken): AppActions {
  return {
    type: ADD_PRODUCT,
    payload: p
  };
};

export function removeProductFromCart(p: ProductCartToken): AppActions {
  return {
    type: REMOVE_PRODUCT,
    payload: p
  };
};

export function updateProduct(i: number, p: ProductCartToken): AppActions {
  return {
    type: UPDATE_PRODUCT,
    payload: {
      index: i,
      product: p
    }
  };
};

export function updateTotalProductCount(q: number): AppActions {
  return {
    type: UPDATE_TOTAL_PRODUCT_COUNT,
    payload: q
  };
};


//* Thunk
export function addToCart(p: ProductCartToken): AppThunk {
  return async (dispatch: React.Dispatch<AppActions>) => {
    // determine if product is already in cart
    // if so -> then update product quantity
    // else add to cart

    // update user's cart within the database

    dispatch(addProductToCart(p));
  };
};

export function removeFromCart(p: ProductCartToken): AppThunk {
  return async (dispatch: React.Dispatch<AppActions>) => {
    // remove product from user's cart within database
    
    dispatch(removeProductFromCart(p));
  };
};

export function updateProductQuantity(index: number, quantity: number): AppThunk { 
  return async (dispatch: React.Dispatch<AppActions>, getState: () => AppState) => {
    const i: number = index;
    const q: number = quantity;
    const prod: ProductCartToken = getState().cart.items[i];

    prod.order.quantity = prod.order.quantity + q;

    // updated user's cart within database

    dispatch(updateProduct(i, prod));
  };
};

export function updateProductCount(quantity: number): AppThunk {
  return async (dispatch: React.Dispatch<AppActions>) => {  
    // updated user's cart within database
    
    dispatch(updateTotalProductCount(quantity));
  };
};
