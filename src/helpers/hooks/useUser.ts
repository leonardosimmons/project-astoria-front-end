
import { useAppDispatch, useAppSelector } from './redux';
import { signOut as signOutSession } from 'next-auth/client';
import { UserInfo, UserContext, UserData } from '../../utils/types';

import { rand } from '../functions';
import { 
  createAndSignInNewUser, 
  userSignOut, 
  verifyAndSignInUser 
} from '../../redux-store/user/actions';
import { HttpController } from '../HttpController';


export function useUser() {
  const dispatch = useAppDispatch();
  const http: HttpController = new HttpController();
  const user: UserContext = useAppSelector((state) => state.user);

  async function get(id: number): Promise<UserData> {
    let user: UserData = <UserData>{};
    const res = await http.get(process.env.NEXT_PUBLIC_GET_USER_API as string + id);
    await res.map((uD: UserData) => user = uD);
    return user;
  };

  function guestSignIn(): void {
    const token: UserData = {
      id: rand(100000000, 999999999),
      info: {
        name: `guest_${rand(100000, 999999)}`,
        email: '', 
        image: ''
      }
    };
    
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
    get,
    guestSignIn,
    signIn,
    signOut
  };
};
