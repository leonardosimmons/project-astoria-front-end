
import React from 'react';
import { SignInToken } from '../../utils/types/types';
import { SET_SIGN_IN_PASSWORD, SET_SIGN_IN_EMAIL, SET_SIGN_IN_VERIFICATION, SignInFormActions } from './action-type';
import { AppThunk } from '../action-types';

import { HttpController } from '../../helpers/HttpController';
import { signIn } from '../user/actions';


//* Actions
export function setEmail(e: string): SignInFormActions {
  return {
    type: SET_SIGN_IN_EMAIL,
    payload: e
  };
};

export function setPassword(pw: string): SignInFormActions {
  return {
    type: SET_SIGN_IN_PASSWORD,
    payload: pw
  };
};

export function setVerificationStatus(status: boolean): SignInFormActions {
  return {
    type: SET_SIGN_IN_VERIFICATION,
    payload: status
  };
};


//* Thunk
export const verifyUserSignIn = (token: SignInToken): AppThunk => async (dispatch: React.Dispatch<AppThunk>) => {
  const http: HttpController = new HttpController();

  try{
    const status = await http.post(
      process.env.NEXT_PUBLIC_VERIFY_USER_API as string, 
      { 
        email: token.email, 
        password: token.password 
      }
    )
    .then((res: any) => res.data.payload);

    if (!status) {
      alert('Entered email address not found');
      location.reload();
      return;
    }

    if (status.verified) {
      dispatch(signIn(status.id, status.info));
      window.history.back();
      return;
    }

    alert('Password entered was incorrect.');
    location.reload();
  }
  catch(err) {
    throw new Error(err);
  }
};
