
import { useDispatch, useSelector } from 'react-redux';
import { signOut as signOutSession } from 'next-auth/client';
import { UserInfo, UserContext } from '../../utils/types';
import { AppState } from '../../redux-store/reducers';
import { setUser, signOutUser, verifyAndSignInUser } from '../../redux-store/user/actions';
import React from 'react';


const guestProfile: Partial<UserContext> = {
  id: 123456789,
  info: {
    name: 'guest', 
    email: '', 
    image: ''
  }
};

export function useUser() {
  const dispatch = useDispatch();
  const [ guest ] = React.useState<Partial<UserContext>>(guestProfile);
  const user: UserContext = useSelector((state: AppState) => state.user);

  function guestSignIn(): void {
    dispatch(setUser(guest.id as number, guest.info!));
  };

  function signIn(u: UserInfo): void {
    dispatch(verifyAndSignInUser(u));
  };

  function signOut(): void {
    dispatch(signOutUser());
    signOutSession();
  };

  return {
    id: user.id,
    info: user.info,
    status: user.status,
    guestSignIn,
    signIn,
    signOut,
  };
};
