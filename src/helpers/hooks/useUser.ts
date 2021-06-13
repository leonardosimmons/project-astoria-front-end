
import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { signOut as signOutSession } from 'next-auth/client';
import { UserInfo, UserContext, UserData } from '../../utils/types';
import { setUser, signInUser, signOutUser } from '../../redux-store/user/actions';
import { AppActions } from '../../redux-store/action-types';
import { AppState } from '../../redux-store/reducers';


export function useUser() {
  const dispatch: React.Dispatch<AppActions> = useDispatch();
  const user: UserContext = useSelector((state: AppState) => state.user);

  async function register(u: UserInfo): Promise<void> {
    axios({
      method: 'post',
      url: process.env.NEXT_PUBLIC_ADD_USER_API,
      data: {
        name: u.name,
        email: u.email,
        image: u.image
      }
    })
    .then((res) => res.status === 201 && res.data)
    .then(data => signIn(data.payload.id, data.payload.info))
    .catch(err => { throw new Error(err) })
  };

  function signIn(id: number, u: UserInfo): void {
    dispatch(setUser(id, u));
    dispatch(signInUser());
  };

  function signOut(): void {
    dispatch(signOutUser());
    signOutSession();
  };

  async function verify(u: UserInfo): Promise<any> {
    const res = await axios.get(process.env.NEXT_PUBLIC_GET_ALL_USERS_API as string);
    const data = await res.data;

    const userCheck: boolean = data.payload.some((uD: UserData) => u.name === uD.info.name);

    return {
      isTaken: userCheck,
      users: data.payload.map((uD: UserData) => uD)
    }
  };

  return {
    id: user.id,
    info: user.info,
    status: user.status,
    register,
    signIn,
    signOut,
    verify
  };
};
