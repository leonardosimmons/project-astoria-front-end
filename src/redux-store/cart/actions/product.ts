
import { ProductCartToken, ProductOrderToken } from '../../../utils/types';
import { HttpController } from '../../../helpers/HttpController';

import { AppActions, AppThunk } from '../../action-types';
import { 
  ADD_PRODUCT, 
  REMOVE_PRODUCT, 
  UPDATE_PRODUCT, 
  UPDATE_TOTAL_PRODUCT_COUNT 
} from './../action-types/product';



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
export function addToCart(prod: ProductCartToken): AppThunk { 
  return async () => {
    const token: string = JSON.parse(localStorage.getItem('auth-token') as string);
    const http: HttpController = new HttpController(token);
    const url: string = process.env.NEXT_PUBLIC_ADD_TO_CART as string;

    const p: ProductOrderToken = {
      u_id: prod.user.id as string,
      prod_id: prod.product.meta.id,
      size: prod.order.size,
      quantity: prod.order.quantity
    };

    try {
      await http.post(url, p); 
    }
    catch(err) {
      console.log(err);
    }
  };
};

export function removeFromCart(id: number): AppThunk { 
  return async () => {
    const token: string = JSON.parse(localStorage.getItem('auth-token') as string);
    const http: HttpController = new HttpController(token);
    
    try {
      await http.remove(process.env.NEXT_PUBLIC_REMOVE_FROM_CART as string, { order_id: id });
    }
    catch(err) {
      console.log(err);
    }
  };
};

export function updateProductQuantity(id: number, quantity: number): AppThunk { 
  return async () => {
    const token: string = JSON.parse(localStorage.getItem('auth-token') as string);
    const http: HttpController = new HttpController(token);
    const update = { id: id, quantity: quantity };
  
    try {
      await http.put(process.env.NEXT_PUBLIC_UPDATE_PRODUCT_QUANTITY as string, update);
    }
    catch(err) {
      console.log(err);
    }
  }
};
