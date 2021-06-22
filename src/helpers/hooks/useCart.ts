
import { useAppDispatch, useAppSelector } from './redux';
import { CartContext, ProductCartToken, UserContext } from '../../utils/types';

import { getUserCart, resetCart, setCartUser, setIsEmpty } from '../../redux-store/cart/actions';
import { addToCart, removeFromCart, updateProductCount, updateProductQuantity } from '../../redux-store/cart/actions/product';
import { useSession } from 'next-auth/client';


export function useCart() {
  const dispatch = useAppDispatch();
  const [ session ] = useSession();
  const cart: CartContext = useAppSelector((state) => state.cart);

  
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

  function remove(p: ProductCartToken): void {
    dispatch(removeFromCart(p));
  };

  function reset(): void {
    dispatch(resetCart());
  };

  function updateQuantity(i: number, q: number): void {
    dispatch(updateProductQuantity(i, q));
  };

  function updateCount(q: number): void {
    dispatch(updateProductCount(q));
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
    remove,
    reset,
    updateQuantity,
    updateCount
  };
};
