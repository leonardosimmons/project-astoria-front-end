
import { SignInToken } from "../../utils/types/types";
import { SET_EMAIL, SET_PASSWORD, SET_VERIFICATION, SignInFormActions } from "./action-type";


export const signInFormInitalState: SignInToken = {
  email: '',
  password: '',
  isVerified: false
};


export function signInFormReducer(state = signInFormInitalState, action: SignInFormActions): SignInToken {
  switch (action.type) {
    case SET_EMAIL:
      return {...state, email: action.payload};
    case SET_PASSWORD:
      return {...state, password: action.payload};
    case SET_VERIFICATION:
      return {...state, isVerified: action.payload};
    default:
      return state;
  };
};