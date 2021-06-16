
import React from 'react';
import { Session } from "next-auth";
import { UserInfo } from '../../utils/types/types';

export function useWatchUserSignIn(user: any, session: Session | null) {
  const [ isSignedIn, setSignedIn ] = React.useState<boolean>(false);

  // GUEST SIGN IN
  React.useEffect(() => {
    if (!session) {
      user.guestSignIn();
      setSignedIn(false);
    }
  }, []);
  
  // USER SIGN IN
  React.useEffect(() => {
    if (session && !user.status.isSignedIn) {      
      const token: UserInfo = {
        name: session.user?.name as string,
        email: session.user?.email as string,
        image: session.user?.image as string
      };

      user.signIn(token);
      setSignedIn(true);
    }
  }, [session]);

  return {
    isSignedIn
  }
};