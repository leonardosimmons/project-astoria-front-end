
import React from 'react';
import { AppActions, AppThunk } from '../action-types';
import { UserData, UserInfo } from '../../utils/types';
import { setCartUser } from '../cart/actions/actions';
import { SET_USER, SIGN_IN_USER, SIGN_OUT_USER } from './action-types';

import { HttpController } from '../../helpers/HttpController';


export function setUser (u: UserData): AppActions {
  return {
    type: SET_USER,
    payload: u
  };
};

export function signInUser(): AppActions { 
  return {
    type: SIGN_IN_USER
  };
};

export function signOutUser(): AppActions { 
  return {
    type: SIGN_OUT_USER
  }; 
};


//* Thunk
export const createAndSignInNewUser = (user: UserInfo): AppThunk => async(dispatch: React.Dispatch<AppActions>) => {
  try {
    const http: HttpController = new HttpController();

    // creates new user in database
    const data = await http.post(process.env.NEXT_PUBLIC_ADD_USER_API as string, user).then((res) => { 
      if(res) return res.data; 
    });

    // signs in user to database
    const status = await http.signIn(data.payload.id); //! return an jwt token

    if (status.isSignedIn) {
      const token: UserData = {
        id: data.payload.id,
        info: data.payload.info
      };

      dispatch(setUser(token));
      dispatch(setCartUser(token));
      dispatch(signInUser());
    }
  }
  catch(err) {
    throw new Error(err);
  }
};

export const verifyAndSignInUser = (user: UserInfo): AppThunk => async (dispatch: React.Dispatch<AppActions | AppThunk>) => {
  try {
    const http: HttpController = new HttpController();
    const users: Array<UserData> = await http.get(process.env.NEXT_PUBLIC_GET_ALL_USERS_API as string);
    const isTaken: boolean = users.some((uD: UserData) => user.name === uD.info.name);

    if (isTaken) 
    {
      let vId: number = 0;

      users.map((uD: UserData) => {
        if (uD.info.name === user.name) {
          vId = uD.id as number;
        }
      });

      // sign in at database
      const status = await http.signIn(vId); //! return a jwt token
      
      if (status.isSignedIn) {
        const token: UserData = {
          id: vId,
          info: user
        };

        dispatch(setUser(token));
        dispatch(setCartUser(token));
        dispatch(signInUser());
        return;
      }
    }

    dispatch(createAndSignInNewUser(user));
  }
  catch(err) {
   // create error state

   console.log(err);
  }
};


export const userSignOut = (u_id: number): AppThunk => async (dispatch: React.Dispatch<AppActions>) => {
  try {
    const api: string = '/sign-out';
    const http: HttpController = new HttpController();

    await http.put(process.env.NEXT_PUBLIC_USER_API as string + api, {u_id})
      .then((res) => { 
        if(res) 
          return dispatch(signOutUser()); 
        }
      )
      .catch(err => { throw new Error(err); })
  }
  catch(err) {
    // create error state

    console.log(err);
  }
};
