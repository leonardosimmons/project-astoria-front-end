
import { AppActions } from '../action-types';
import { UserInfo } from '../../utils/types';
import { SET_USER, SIGN_IN_USER, SIGN_OUT_USER } from './action-types';


export const setUser = (id: number, u: UserInfo): AppActions => ({
  type: SET_USER,
  payload: {
    id: id,
    info: u
  }
});

export const signInUser = (): AppActions => ({ 
  type: SIGN_IN_USER 
});

export const signOutUser = (): AppActions => ({ 
  type: SIGN_OUT_USER 
});
