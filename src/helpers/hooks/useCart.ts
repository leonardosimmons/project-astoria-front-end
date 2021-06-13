
import { useAppDispatch, useAppSelector } from './redux';
import { CartContext, ProductCartToken } from '../../utils/types';

import { resetCart, setIsEmpty } from '../../redux-store/cart/actions/actions';
import { addToCart, removeFromCart, updateProductCount, updateProductQuantity } from '../../redux-store/cart/actions/product';


export function useCart() {
  const dispatch = useAppDispatch();
  const cart: CartContext = useAppSelector((state) => state.cart);

  function add(p: ProductCartToken): void {
    dispatch(addToCart(p));
  };

  function isEmpty(e: boolean): void {
    dispatch(setIsEmpty(e))
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
    isEmpty,
    remove,
    reset,
    updateQuantity,
    updateCount
  };
};
