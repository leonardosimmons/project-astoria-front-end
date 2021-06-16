
import React from 'react';
import { useSession } from 'next-auth/client';
import { useAppDispatch, useAppSelector } from './redux';
import { signOut as signOutSession } from 'next-auth/client';
import { UserInfo, UserContext, UserData } from '../../utils/types';
import { setUser, userSignOut, verifyAndSignInUser } from '../../redux-store/user/actions';
import { useCart } from './useCart';


const guestProfile: UserContext = {
  id: 123456789,
  info: {
    name: 'guest', 
    email: '', 
    image: ''
  },
  status: {
    isError: false,
    isSignedIn: false
  }
};


export function useUser() {
  const cart = useCart();
  const [ session ] = useSession();
  const dispatch = useAppDispatch();
  const guest = React.useRef<UserData>(guestProfile);
  const user: UserContext = useAppSelector((state) => state.user);

  // GUEST SIGN IN
  React.useEffect(() => {
    if (!session) {
      guestSignIn();
    }
  }, [session]);
  
  // USER SIGN IN
  React.useEffect(() => {
    if (session && !user.status.isSignedIn) {      
      const token: UserInfo = {
        name: session.user?.name as string,
        email: session.user?.email as string,
        image: session.user?.image as string
      };

      signIn(token);
    }
  }, [session]);

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

  function signOut(u_Id: number): void {
    dispatch(userSignOut(u_Id));
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
