
import { SET_PASSWORD, SET_EMAIL, SET_VERIFICATION, SignInFormActions } from "./action-type";


export function setEmail(e: string): SignInFormActions {
  return {
    type: SET_EMAIL,
    payload: e
  };
};

export function setPassword(pw: string): SignInFormActions {
  return {
    type: SET_PASSWORD,
    payload: pw
  };
};

export function setVerificationStatus(status: boolean): SignInFormActions {
  return {
    type: SET_VERIFICATION,
    payload: status
  };
};