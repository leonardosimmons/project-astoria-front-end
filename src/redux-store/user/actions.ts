
import React from 'react';
import axios from 'axios';
import { AppActions, AppThunk } from '../action-types';
import { UserData, UserInfo } from '../../utils/types';
import { SET_USER, SIGN_IN_USER, SIGN_OUT_USER } from './action-types';
import { setCartUser } from '../cart/actions/actions';


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
    const data = await axios.get(process.env.NEXT_PUBLIC_GET_ALL_USERS_API as string).then(res => res.status === 200 && res.data);
    const users = data.payload.map((u: UserData) => u);
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
      const isSignedIn = await axios.put(process.env.NEXT_PUBLIC_SIGN_IN_USER_API as string, {u_Id: vId}).then((res) => res.data.payload);

      if(isSignedIn) {
        dispatch(setUser(token));
        dispatch(setCartUser(token));
        dispatch(signInUser());
        return;
      }
    }

    axios({
      method: 'post',
      url: process.env.NEXT_PUBLIC_ADD_USER_API,
      data: {
        name: user.name,
        email: user.email,
        image: user.image
      }
    })
    .then((res) => res.status === 201 && res.data)
    .then(data => {
      const token: UserData = {
        id: data.payload.id,
        info: data.payload.info
      };

      axios.put(process.env.NEXT_PUBLIC_SIGN_IN_USER_API as string, {u_Id: token.id})
        .then((res) => res.data.payload)

    
    })
    .catch(err => { throw new Error(err) })
 }
 catch(err) {
  // create error state

  console.log(err);
 }
};


export const userSignOut = (u_Id: number): AppThunk => async (dispatch: React.Dispatch<AppActions>) => {
  try {
    await axios.put(process.env.NEXT_PUBLIC_SIGN_OUT_USER_API as string, {u_Id})
            .then(() => signOutUser);
  }
  catch(err) {
    // create error state

    console.log(err);
  }
};