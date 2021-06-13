
import { UserInfo } from '../../utils/types';

//** ---------------------  TYPES  --------------------- **//
export const SET_USER = 'set_user';
export const SIGN_IN_USER = 'sign_in_user';
export const SIGN_OUT_USER = 'sign_out_user';


//** --------------------  ACTIONS  -------------------- **//
export type SetUserAction = {
  type: typeof SET_USER;
  payload: {
    id: number;
    info: UserInfo;
  };
};  

export type SignInUserAction = {
  type: typeof SIGN_IN_USER;
};

export type SignOutUserAction = {
  type: typeof SIGN_OUT_USER;
};


export type UserActions = SetUserAction | SignInUserAction | SignOutUserAction;
