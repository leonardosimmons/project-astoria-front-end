
import React from 'react';
import { AppActions, AppThunk } from '../action-types';
import { UserData, UserInfo } from '../../utils/types';
import { setCartUser } from '../cart/actions/actions';
import { SET_USER, SIGN_IN_USER, SIGN_OUT_USER } from './action-types';

import { HttpController } from '../../helpers/HttpController';

const jwt = require('jsonwebtoken');


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
export const createAndSignInNewUser = (user: UserInfo): AppThunk => async(dispatch: React.Dispatch<AppActions | AppThunk>) => {
  try {
    const http: HttpController = new HttpController();

    // creates new user in database
    const data = user.password 
    ? await http.post(process.env.NEXT_PUBLIC_SIGN_UP_USER_API as string, user).then((res) => { if(res) return res.data; }) 
    : await http.post(process.env.NEXT_PUBLIC_ADD_USER_API as string, user).then((res) => { if(res) return res.data; });

    // signs in user to database
    const status = await http.signInUser(data.payload.id);

    if (status.signedIn) {
      const u: UserData = {
        id: data.payload.id,
        info: data.payload.info
      };

      localStorage.setItem('auth-token', JSON.stringify(status.token));

      dispatch(userSignIn(u));
    }
  }
  catch(err) {
    throw new Error(err);
  }
};

export const relogUser = (): AppThunk => async (dispatch: React.Dispatch<AppThunk>) => {
  const ISSERVER = typeof window === 'undefined';
  
  if(!ISSERVER) {
    const token: string = window.localStorage.getItem('auth-token') as string;
    const http: HttpController = new HttpController(token);

    if (token) {
      let user: UserData = <UserData>{};
      const parsed = JSON.parse(token);
      const decoded = jwt.decode(parsed);
      const users: Array<UserData> = await http.get(process.env.NEXT_PUBLIC_GET_ALL_USERS_API as string);
      
      users.map((u: UserData) => {
        if (decoded.u_id === u.id) {
          user = u;
        }
      });

      dispatch(verifyAndSignInUser(user.info));
    }
  }
};

export const signIn = (u_id: number, user: UserInfo): AppThunk => async (dispatch: React.Dispatch<AppThunk>) => {
  const http: HttpController = new HttpController();

  try {
    const status = await http.signInUser(u_id);

    console.log('test email')
    if (status.signedIn) {
      const u: UserData = {
        id: u_id,
        info: user
      };

      localStorage.setItem('auth-token', JSON.stringify(status.token));

      dispatch(userSignIn(u));
    }
  }
  catch(err) {
    throw new Error(err);
  }
};

export const userSignIn = (token: UserData): AppThunk => async (dispatch: React.Dispatch<AppActions>) => {
  dispatch(setUser(token));
  dispatch(setCartUser(token));
  dispatch(signInUser());
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
      const status = await http.signInUser(vId);
      
      if (status.signedIn) {
        const u: UserData = {
          id: vId,
          info: user
        };

        localStorage.setItem('auth-token', JSON.stringify(status.token));

        dispatch(userSignIn(u));
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
          localStorage.setItem('auth-token', ''); 
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
