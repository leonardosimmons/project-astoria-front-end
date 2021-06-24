
import { AppActions } from '../../action-types';
import { OrderShipping } from '../../../utils/types';
import { 
  ERROR_STATUS,
  SET_ADDRESS, 
  SET_CITY, 
  SET_COUNTRY, 
  SET_POSTAL_CODE, 
  VERIFICATION_STATUS
} from './../action-types/shipping';


const shippingInitialState: OrderShipping = {
  info: {
    address: '',
    city: '',
    postal: 0,
    country: ''
  },
  status: { 
    isVerified: false, 
    isError: false 
  }
};


export function shippingReducer(state = shippingInitialState, action: AppActions): OrderShipping
{
  switch(action.type)
  {
    case SET_ADDRESS:
      return {
        ...state,
        info: {
          ...state.info,
          address: action.payload
        }
      }
    case SET_CITY:
      return {
        ...state,
        info: {
          ...state.info,
          city: action.payload
        }
      }
    case SET_POSTAL_CODE:
      return {
        ...state,
        info: {
          ...state.info,
          postal: action.payload
        }
      }
    case SET_COUNTRY:
      return {
        ...state,
        info: {
          ...state.info,
          country: action.payload
        }
      }
    case VERIFICATION_STATUS:
      return {
        ...state,
        status: {
          ...state.status,
          isVerified: action.payload
        }
      }
    case ERROR_STATUS:
      return {
        ...state,
        status: {
          ...state.status,
          isError: action.payload
        }
      }
    default:
      return state;
  };
};
