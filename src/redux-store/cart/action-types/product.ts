
import { ProductCartToken } from '../../../utils/types';


//** ---------------------  TYPES  --------------------- **//
export const ADD_PRODUCT = 'add_product_to_cart';
export const REMOVE_PRODUCT = 'remove_product_from_cart';
export const UPDATE_PRODUCT = 'update_product';
export const UPDATE_TOTAL_PRODUCT_COUNT = 'update_total_product_count'


//** --------------------  ACTIONS  -------------------- **//
export type AddProductAction = {
  type: typeof ADD_PRODUCT;
  payload: ProductCartToken;
};

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT;
  payload: ProductCartToken;
};

export type UpdateProductListAction = {
  type: typeof UPDATE_PRODUCT;
  payload: {
    index: number;
    product: ProductCartToken;
  }
};

export type UpdateTotalProductCountAction = {
  type: typeof UPDATE_TOTAL_PRODUCT_COUNT;
  payload: number;
};

export type CartProductActions = AddProductAction | RemoveProductAction | UpdateProductListAction | UpdateTotalProductCountAction;
