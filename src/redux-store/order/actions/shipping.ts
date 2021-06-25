
import { AppActions } from '../../action-types';
import { 
  RESET_SHIPPING,
  SET_ADDRESS, 
  SET_CITY, 
  SET_COUNTRY, 
  SET_POSTAL_CODE, 
  UPDATE_SHIPPING_ERROR_STATUS, 
  UPDATE_SHIPPING_VERIFICATION_STATUS 
} from '../action-types/shipping';


export function resetOrderShipping(): AppActions {
  return {
    type: RESET_SHIPPING
  };
};

export function setOrderAddress(a: string): AppActions {
  return {
    type: SET_ADDRESS,
    payload: a
  };
};

export function setOrderCity(c: string): AppActions {
  return {
    type: SET_CITY,
    payload: c
  };
};

export function setOrderPostalCode(p: number): AppActions {
  return {
    type: SET_POSTAL_CODE,
    payload: p
  };
};

export function setOrderCountry(c: string): AppActions {
  return {
    type: SET_COUNTRY,
    payload: c
  };
};

export function shippingVerificationStatus(s: boolean): AppActions {
  return {
    type: UPDATE_SHIPPING_VERIFICATION_STATUS,
    payload: s
  };
};

export function shippingErrorStatus(e: boolean): AppActions {
  return {
    type: UPDATE_SHIPPING_ERROR_STATUS,
    payload: e
  };
};
