
import React from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { signOut as signOutSession } from 'next-auth/client';
import { UserInfo, UserContext, UserData } from '../../utils/types';
import { setUser, signOutUser, verifyAndSignInUser } from '../../redux-store/user/actions';
import { useCart } from './useCart';


const guestProfile: UserContext = {
  id: 123456789,
  info: {
    name: 'guest', 
    email: '', 
    image: ''
  },
  status: {
    signedIn: false
  }
};

export function useUser() {
  const cart = useCart();
  const dispatch = useAppDispatch();
  const guest = React.useRef<UserData>(guestProfile);
  const user: UserContext = useAppSelector((state) => state.user);

  function guestSignIn(): void {
    const token: UserData = {
      id: guest.current.id,
      info: guest.current.info
    };

    cart.assignUser(guestProfile);
    dispatch(setUser(token));
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
