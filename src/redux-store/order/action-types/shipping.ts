
import { OrderShippingInfo } from "../../../utils/types/types";

//** ---------------------  TYPES  --------------------- **//
export const RESET_SHIPPING = 'reset_shipping';
export const SET_ADDRESS = 'set_address';
export const SET_CITY = 'set_city';
export const SET_POSTAL_CODE = 'set_postal_code';
export const SET_STATE = 'set_state';
export const SET_SHIPPING_INFO = 'set_shipping_info';
export const UPDATE_SHIPPING_VERIFICATION_STATUS = 'update_shipping_verification_status';
export const UPDATE_SHIPPING_ERROR_STATUS = 'update_shipping_error_status';


//** --------------------  ACTIONS  -------------------- **//
export type ResetShippingAction = {
  type: typeof RESET_SHIPPING;
};

export type SetAddressAction = {
  type: typeof SET_ADDRESS;
  payload: string;
};

export type SetCityAction = {
  type: typeof SET_CITY;
  payload: string;
};

export type SetPostalCodeAction = {
  type: typeof SET_POSTAL_CODE;
  payload: number;
};

export type SetStateAction = {
  type: typeof SET_STATE;
  payload: string;
};

export type SetShippingInfoAction = {
  type: typeof SET_SHIPPING_INFO;
  payload: OrderShippingInfo;
};

export type UpdateShippingVerificationStatusAction = {
  type: typeof UPDATE_SHIPPING_VERIFICATION_STATUS;
  payload: boolean;
};

export type UpdateShippingErrorStatusAction = {
  type: typeof UPDATE_SHIPPING_ERROR_STATUS;
  payload: boolean;
};


export type ShippingActions = ResetShippingAction | SetAddressAction | SetCityAction | SetPostalCodeAction | SetStateAction | SetShippingInfoAction | UpdateShippingErrorStatusAction | UpdateShippingVerificationStatusAction ;
