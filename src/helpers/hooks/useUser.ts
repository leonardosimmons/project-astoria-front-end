
import React from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { signOut as signOutSession } from 'next-auth/client';
import { UserInfo, UserContext } from '../../utils/types';
import { setUser, signOutUser, verifyAndSignInUser } from '../../redux-store/user/actions';


const guestProfile: Partial<UserContext> = {
  id: 123456789,
  info: {
    name: 'guest', 
    email: '', 
    image: ''
  }
};

export function useUser() {
  const dispatch = useAppDispatch();
  const user: UserContext = useAppSelector((state) => state.user);
  const guest = React.useRef<Partial<UserContext>>(guestProfile);

  function guestSignIn(): void {
    dispatch(setUser(guest.current.id as number, guest.current.info!));
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
