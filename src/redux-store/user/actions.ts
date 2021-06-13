
import React from 'react';
import axios from 'axios';
import { AppActions, AppThunk } from '../action-types';
import { UserData, UserInfo } from '../../utils/types';
import { SET_USER, SIGN_IN_USER, SIGN_OUT_USER } from './action-types';


export function setUser (id: number, u: UserInfo): AppActions {
  return {
    type: SET_USER,
    payload: {
      id: id,
      info: u
    }
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
  const res = await axios.get(process.env.NEXT_PUBLIC_GET_ALL_USERS_API as string);
  const data = await res.data;

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
    
    dispatch(setUser(vId, user));
    dispatch(signInUser());
    return;
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
    dispatch(setUser(data.payload.id, data.payload.info));
    dispatch(signInUser());
  })
  .catch(err => { throw new Error(err) })
};
