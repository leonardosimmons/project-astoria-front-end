
import { AppActions } from '../../action-types';
import { OrderShipping } from '../../../utils/types';
import { 
  RESET_SHIPPING,
  SET_ADDRESS, 
  SET_CITY, 
  SET_COUNTRY, 
  SET_POSTAL_CODE, 
  UPDATE_SHIPPING_ERROR_STATUS,
  UPDATE_SHIPPING_VERIFICATION_STATUS
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
    case RESET_SHIPPING:
      return shippingInitialState;
    case SET_ADDRESS:
      return {...state, info: {...state.info, address: action.payload}}
    case SET_CITY:
      return {...state, info: {...state.info, city: action.payload}}
    case SET_POSTAL_CODE:
      return {...state, info: {...state.info, postal: action.payload}}
    case SET_COUNTRY:
      return {...state, info: {...state.info, country: action.payload}}
    case UPDATE_SHIPPING_VERIFICATION_STATUS:
      return {...state, status: {...state.status, isVerified: action.payload}}
    case UPDATE_SHIPPING_ERROR_STATUS:
      return {...state, status: {...state.status, isError: action.payload}}
    default:
      return state;
  };
};
