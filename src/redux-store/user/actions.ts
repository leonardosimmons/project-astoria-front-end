
import { AppActions } from '../action-types';
import { User } from '../../utils/types';
import { SET_USER, SIGN_IN_USER, SIGN_OUT_USER } from './action-types';


export const setUser = (id: number, u: User): AppActions => ({
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
