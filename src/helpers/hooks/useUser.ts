
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../../redux-store/action-types';
import { AppState } from '../../redux-store/reducers';
import { setUser, signInUser, signOutUser } from '../../redux-store/user/actions';
import { User, UserContext } from '../../utils/types';
import { signOut as signOutSession, useSession } from 'next-auth/client';

export function useUser() {
  const [ session, loading ] = useSession();
  const dispatch: React.Dispatch<AppActions> = useDispatch();
  const user: UserContext = useSelector((state: AppState) => state.user);

  function signIn(id: number, u: User) {
    dispatch(setUser(id, u));
    dispatch(signInUser());
  };

  function signOut() {
    dispatch(signOutUser());
    signOutSession();
  };

  return {
    id: user.id,
    info: user.info,
    status: user.status,
    session: session ? session.user?.name === user.info.name ? true : false : false,
    loading: loading ? true : false,
    signIn,
    signOut
  };
};
