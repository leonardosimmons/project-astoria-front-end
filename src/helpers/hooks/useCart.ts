
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
  setIsEmpty 
} from '../../redux-store/cart/actions';

import { 
  addToCart, 
  removeFromCart, 
  updateProductCount, 
  updateProductQuantity 
} from '../../redux-store/cart/actions/product';


export function useCart() {
  const dispatch = useAppDispatch();
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

  function remove(id: number): void {
    dispatch(removeFromCart(id));
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
