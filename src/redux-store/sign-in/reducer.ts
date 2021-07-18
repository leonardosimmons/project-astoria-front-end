
import { SignInToken } from "../../utils/types/types";
import { SET_SIGN_IN_EMAIL, SET_SIGN_IN_PASSWORD, SET_SIGN_IN_VERIFICATION, SignInFormActions } from "./action-type";


export const signInFormInitalState: SignInToken = {
  email: '',
  password: '',
  isVerified: false
};


export function signInFormReducer(state = signInFormInitalState, action: SignInFormActions): SignInToken {
  switch (action.type) {
    case SET_SIGN_IN_EMAIL:
      return {...state, email: action.payload};
    case SET_SIGN_IN_PASSWORD:
      return {...state, password: action.payload};
    case SET_SIGN_IN_VERIFICATION:
      return {...state, isVerified: action.payload};
    default:
      return state;
  };
};