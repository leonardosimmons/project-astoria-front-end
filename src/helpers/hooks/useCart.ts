
import React from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { 
  CartContext, 
  ProductCartToken, 
  UserContext 
} from '../../utils/types';

import { 
  getUserCart, 
  resetCart, 
  setCartUser, 
  setIsEmpty, 
  updateTotalCount,
  updateTotalPrice
} from '../../redux-store/cart/actions';

import { 
  addToCart, 
  removeFromCart,
  updateProductQuantity, 
} from '../../redux-store/cart/actions/product';


export function useCart() {
  const dispatch = useAppDispatch();
  const cart: CartContext = useAppSelector((state) => state.cart);

  // loads current users cart
  React.useEffect(() => {
    get();
  }, [cart.user]);

  // auto update total count
  React.useEffect(() => {
    let t: number = 0;
  
    cart.items.map((item: ProductCartToken) => {
      t = t + item.order.quantity;
    })

    updateCount(t);
  }, [cart.items]);

  // auto update total price
  React.useEffect(() => {
    let t: number = 0;

    cart.items.map((item: ProductCartToken) => {
      const p: number = item.product.details.price;
      const q: number = item.order.quantity;
      
      t = t + (p * q);
    });

    updatePrice(t);
  }, [cart.items]);

  function add(p: ProductCartToken): void {
    dispatch(addToCart(p));
  };
  
  function assignUser(u: UserContext): void {
    dispatch(setCartUser(u));
  }

  function isEmpty(e: boolean): void {
    dispatch(setIsEmpty(e))
  };

  function get() {
    dispatch(getUserCart());
  };

  function getCount(): number {
    let count: number = 0;

    cart.items.forEach((item: ProductCartToken) => {
      count = count + item.order.quantity;
    });

    return count;
  };

  function remove(id: number): void {
    dispatch(removeFromCart(id));
  };

  function reset(): void {
    dispatch(resetCart());
  };

  function updateCount(t: number): void {
    dispatch(updateTotalCount(t));
  };

  function updateQuantity(id: number, q: number): void {
    dispatch(updateProductQuantity(id, q));
  };

  function updatePrice(p: number): void {
    dispatch(updateTotalPrice(p));
  };

  return {
    user: cart.user,
    items: cart.items,
    summary: cart.summary,
    status: cart.status,
    add,
    assignUser,
    isEmpty,
    get,
    getCount,
    remove,
    reset,
    updateCount,
    updateQuantity,
    updatePrice
  };
};
