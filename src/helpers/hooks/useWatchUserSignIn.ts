
import React from 'react';
import jwt from 'jsonwebtoken';
import axios, { CancelTokenSource }  from 'axios';
import { useSession } from 'next-auth/client';
import { UserInfo } from '../../utils/types';

import { getAuthToken } from '../functions';
import { useUser } from './useUser';


const logoutTime: number = 30 * 60 * 1000; // 30mins


export function useWatchUserSignIn() {
  const user = useUser();
  const [ session ] = useSession();
  const [ isSignedIn, setSignedIn ] = React.useState<boolean>(false);

  // USER SIGN IN
  React.useEffect(() => {
    const source: CancelTokenSource = axios.CancelToken.source();

    if (session && !user.status.isSignedIn) {      
      const token: UserInfo = {
        name: session.user?.name as string,
        email: session.user?.email as string,
        image: session.user?.image as string
      };

      user.signIn(token);
      setSignedIn(true);

      return () => {
        source.cancel();
      }
    }
  }, [session]);

  // AUTO SIGN OUT GUEST
  React.useEffect(() => {
    const source: CancelTokenSource = axios.CancelToken.source();

    if (!session && user.id !== 0) {
      const logout: NodeJS.Timeout = setTimeout(() => {
        user.signOut(user.id as number);
        setSignedIn(false);
      }, logoutTime);

      return () => {
        clearTimeout(logout);
        source.cancel();
      }
    }
  }, [user.id]);

  // RELOG USER ON ERROR/ RELOAD
  React.useEffect(() => {
    if (!session && user.id === 0) { 
      const token: string = getAuthToken(); 
          
      if (token) {
        const decoded = jwt.decode(token);
        
        console.log(decoded);
      }
    }
  }, [user.id]);

  return {
    isSignedIn
  }
};
