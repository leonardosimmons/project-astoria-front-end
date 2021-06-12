
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../../redux-store/action-types';
import { AppState } from '../../redux-store/reducers';
import { setUser, signInUser, signOutUser } from '../../redux-store/user/actions';
import { UserInfo, UserContext } from '../../utils/types';
import { signOut as signOutSession } from 'next-auth/client';

export function useUser() {
  const dispatch: React.Dispatch<AppActions> = useDispatch();
  const user: UserContext = useSelector((state: AppState) => state.user);

  async function register(u: UserInfo) {
    
  };

  function signIn(id: number, u: UserInfo): void {
    dispatch(setUser(id, u));
    dispatch(signInUser());
  };

  function signOut(): void {
    dispatch(signOutUser());
    signOutSession();
  };

  return {
    id: user.id,
    info: user.info,
    status: user.status,
    signIn,
    signOut
  };
};
