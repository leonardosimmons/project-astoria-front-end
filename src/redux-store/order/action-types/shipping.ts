
//** ---------------------  TYPES  --------------------- **//
export const RESET_SHIPPING = 'reset_shipping';
export const SET_ADDRESS = 'set_address';
export const SET_CITY = 'set_city';
export const SET_POSTAL_CODE = 'set_postal_code';
export const SET_COUNTRY = 'set_country';
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

export type SetCountryAction = {
  type: typeof SET_COUNTRY;
  payload: string;
};

export type UpdateShippingVerificationStatusAction = {
  type: typeof UPDATE_SHIPPING_VERIFICATION_STATUS;
  payload: boolean;
};

export type UpdateShippingErrorStatusAction = {
  type: typeof UPDATE_SHIPPING_ERROR_STATUS;
  payload: boolean;
};


export type ShippingActions = ResetShippingAction | SetAddressAction | SetCityAction | SetPostalCodeAction | SetCountryAction | UpdateShippingErrorStatusAction | UpdateShippingVerificationStatusAction ;
