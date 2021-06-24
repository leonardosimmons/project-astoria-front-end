
import { AppActions } from "../../action-types";
import { 
  ERROR_STATUS, 
  SET_ADDRESS, 
  SET_CITY, 
  SET_COUNTRY, 
  SET_POSTAL_CODE, 
  VERIFICATION_STATUS 
} from "../action-types/shipping";


export function setAddress(a: string): AppActions {
  return {
    type: SET_ADDRESS,
    payload: a
  };
};

export function setCity(c: string): AppActions {
  return {
    type: SET_CITY,
    payload: c
  };
};

export function setPostalCode(p: number): AppActions {
  return {
    type: SET_POSTAL_CODE,
    payload: p
  };
};

export function setCountry(c: string): AppActions {
  return {
    type: SET_COUNTRY,
    payload: c
  };
};

export function verified(s: boolean): AppActions {
  return {
    type: VERIFICATION_STATUS,
    payload: s
  };
};

export function error(e: boolean): AppActions {
  return {
    type: ERROR_STATUS,
    payload: e
  };
};
