
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


//* Middleware
export const verifyAndSignInUser = (user: UserInfo): AppThunk => async (dispatch: React.Dispatch<AppActions>) => {
  try {
    const api: string = '/sign-in';
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

      const token: UserData = {
        id: vId,
        info: user
      };

      // sign in at database
      const isSignedIn = await http.put(process.env.NEXT_PUBLIC_USER_API as string + api, {u_Id: vId});

      if(isSignedIn) {
        dispatch(setUser(token));
        dispatch(setCartUser(token));
        dispatch(signInUser());
        return;
      }
    }

    const token: UserInfo = {
      name: user.name,
      email: user.email,
      image: user.image
    };
    
    await http.post(process.env.NEXT_PUBLIC_ADD_USER_API as string, token)
    .then((res) => { if(res) return res.status === 201 && res.data })
    .then(data => {
      const token: UserData = {
        id: data.payload.id,
        info: data.payload.info
      };

      http.put(process.env.NEXT_PUBLIC_USER_API as string + api, {u_Id: token.id});
    })
    .catch(err => { throw new Error(err) });
  }
  catch(err) {
   // create error state

   console.log(err);
  }
};


export const userSignOut = (u_Id: number): AppThunk => async (dispatch: React.Dispatch<AppActions>) => {
  try {
    const api: string = '/sign-out';
    const http: HttpController = new HttpController();

    await http.put(process.env.NEXT_PUBLIC_USER_API as string + api, {u_Id})
    .then((res) => { if(res) return dispatch(signOutUser()); });
  }
  catch(err) {
    // create error state

    console.log(err);
  }
};
