
//** ---------------------  TYPES  --------------------- **//
export const SET_ADDRESS = 'set_address';
export const SET_CITY = 'set_city';
export const SET_POSTAL_CODE = 'set_postal_code';
export const SET_COUNTRY = 'set_country';
export const VERIFICATION_STATUS = 'verification_status';
export const ERROR_STATUS = 'error_status';


//** --------------------  ACTIONS  -------------------- **//
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

export type VerificationStatusAction = {
  type: typeof VERIFICATION_STATUS;
  payload: boolean;
};

export type ErrorStatusAction = {
  type: typeof ERROR_STATUS;
  payload: boolean;
};


export type ShippingActions = SetAddressAction | SetCityAction | SetPostalCodeAction | SetCountryAction | VerificationStatusAction | ErrorStatusAction;
