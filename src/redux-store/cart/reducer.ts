
import { AppActions } from '../action-types';
import { CartContext, ProductCartToken } from '../../utils/types';

import { 
  RESET_CART, 
  SET_CART_USER, 
  SET_IS_EMPTY, 
  UPDATE_TOTAL_COUNT, 
  UPDATE_TOTAL_PRICE 
} from './action-types';

import { 
  ADD_PRODUCT, 
  REMOVE_PRODUCT, 
  UPDATE_PRODUCT, 
} from './action-types/product';

import { 
  UPDATE_CHECKING_OUT_STATUS, 
  UPDATE_EMPTY_STATUS, 
  UPDATE_COMPLETE_STATUS, 
  UPDATE_PENDING_STATUS, 
  UPDATE_ERROR_STATUS 
} from './action-types/status';


const cartInitialState: CartContext = {
  user: {
    id: 0,
    info: {
      name: '',
      email: '',
      image: ''
    },
    status : {
      isError: false, 
      isSignedIn: false 
    }
  },
  items: [],
  summary: { count: 0, total: 0 },
  status: {
    isCheckingOut: false,
    isComplete: false,
    isEmpty: true,
    isError: false,
    isPending: false,
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
    case SET_CART_USER:
      return {
        ...state,
        user: {
          ...action.payload, 
          status: {
            ...state.user.status, 
            isSignedIn: true 
          }
        }
      };
    case UPDATE_CHECKING_OUT_STATUS:
      return {
        ...state,
        status: {
          ...state.status,
          isCheckingOut: action.payload
        }
      };
    case UPDATE_COMPLETE_STATUS:
      return {
        ...state,
        status: {
          ...state.status,
          isComplete: action.payload
        }
      };
    case UPDATE_EMPTY_STATUS:
      return {
        ...state,
        status: {
          ...state.status,
          isEmpty: action.payload
        }
      };
      case UPDATE_ERROR_STATUS:
        return {
          ...state,
          status: {
            ...state.status,
            isError: action.payload
          }
        };
    case UPDATE_PENDING_STATUS: 
      return {
        ...state,
        status: {
          ...state.status,
          isPending: action.payload
        }
      };
    case UPDATE_PRODUCT:
      return {
        ...state, 
        items: state.items.splice(action.payload.index, 1, action.payload.product)
      };
    case UPDATE_TOTAL_COUNT:
      return {
        ...state,
        summary: {
          ...state.summary,
          count: action.payload
        }
      };
    case UPDATE_TOTAL_PRICE:
      return {
        ...state,
        summary: {
          ...state.summary,
          total: action.payload
        }
      };
    default:
      return state;
  };
};
