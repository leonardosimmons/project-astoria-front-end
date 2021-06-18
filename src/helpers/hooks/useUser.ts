
import { useAppDispatch, useAppSelector } from './redux';
import { signOut as signOutSession } from 'next-auth/client';
import { UserInfo, UserContext, UserData } from '../../utils/types';

import { rand } from '../functions';
import { useCart } from './useCart';

import { 
  createAndSignInNewUser, 
  setUser, 
  userSignOut, 
  verifyAndSignInUser 
} from '../../redux-store/user/actions';


const guest: UserContext = {
  id: rand(100000000, 999999999),
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
  const dispatch = useAppDispatch();
  const user: UserContext = useAppSelector((state) => state.user);

  function guestSignIn(): void {
    const token: UserData = {
      id: guest.id,
      info: {
        ...guest.info,
        name: `guest_${rand(100000, 999999)}`
      }
    };
    
    cart.assignUser({...token, status: { isError: false, isSignedIn: true }});
    dispatch(setUser(token));
    dispatch(createAndSignInNewUser(token.info));
  };
  
  function signIn(u: UserInfo): void {
    dispatch(verifyAndSignInUser(u));
  };

  function signOut(u_id: number): void {
    dispatch(userSignOut(u_id));
    signOutSession();
  };

  return {
    id: user.id,
    info: user.info,
    status: user.status,
    guestSignIn,
    signIn,
    signOut
  };
};
