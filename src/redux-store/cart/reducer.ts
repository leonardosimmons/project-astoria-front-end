
import { AppActions } from '../action-types';
import { CartContext, ProductCartToken } from '../../utils/types';

import { RESET_CART, SET_IS_EMPTY } from './action-types';
import { 
  ADD_PRODUCT, 
  REMOVE_PRODUCT, 
  UPDATE_PRODUCT, 
  UPDATE_TOTAL_PRODUCT_COUNT  
} from './action-types/product';


const cartInitialState: CartContext = {
  user: {
    id: 0,
    info: {
      name: '',
      email: '',
      image: ''
    },
    status : { signedIn: false }
  },
  items: [],
  summary: { count: 0, total: 0 },
  status: {
    isCheckingOut: false,
    isComplete: false,
    isEmpty: true,
    isPending: false,
    isUser: false
  }
};


export function cartReducer(state = cartInitialState, action: AppActions): CartContext
{
  switch(action.type)
  {
    case ADD_PRODUCT:
      return {
        ...state, 
        items: [...state.items, action.payload]
      };
    case REMOVE_PRODUCT:
      return {
        ...state, 
        items: state.items.filter((p: ProductCartToken) => p.product.meta.id !== action.payload.product.meta.id)
      };
    case RESET_CART:
      return {
        ...state,
        items: []
      }
    case SET_IS_EMPTY:
      return {
        ...state, 
        status: {
          ...state.status, 
          isEmpty: action.payload
        }
      };
    case UPDATE_PRODUCT:
      return {
        ...state, 
        items: state.items.splice(action.payload.index, 1, action.payload.product)
      };
    case UPDATE_TOTAL_PRODUCT_COUNT:
      return {
        ...state,
        summary: { 
          ...state.summary, 
          count: state.summary.count + action.payload
        }
      }
    default:
      return state;
  };
};
