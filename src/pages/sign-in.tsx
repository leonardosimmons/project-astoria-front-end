
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { NextRouter, useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { NavbarData } from '../utils/types';
import { page } from '../utils/keys';

import styles from '../containers/pages/sign-in/SignIn.module.scss';
import { useUser } from '../helpers/hooks/useUser';

import Layout from '../containers/layout';
import Container from '../components/container';
import ContentBox from '../components/box';
import TextBox from '../components/text';
import Copyright from '../components/copyright';
import { useWatchUserSignIn } from '../helpers/hooks/useWatchUserSignIn';


const {
  NAVBAR_DESKTOP_API,
  NAVBAR_MOBILE_API
} = process.env;


export const getServerSideProps: GetServerSideProps = async () => {
  const data = await axios.all([
    axios.get(NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop: AxiosResponse<any>, mobile: AxiosResponse<any>) => {
    if(desktop.status === 200 && mobile.status === 200) {
      const dataToken: NavbarData = {
        desktop: desktop.data,
        mobile: mobile.data
      }

      return dataToken;
    }
  }))
  .catch(err => { throw new Error(`Error: ${ err.message }`)});

  return {
    props: {
      data: data as NavbarData
    }
  }
};


function signInPage({ data }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const [ session ] = useSession();
  const router: NextRouter = useRouter();
  const user = useUser();

  // redirects if user is already logged in
  if(session) {
    router.push('/');
  }

  // checks for existsing session/ guest login
  useWatchUserSignIn();

  function guestSignIn() {
    user.guestSignIn();
    router.back();
  };

  function userSignIn(provider: string, url: string) {
    signIn(provider, {callbackUrl: url});
  };

  return (
    <Layout
      solid
      parent={ page.SIGN_IN }
      title={'ASTORIA | Sign-in'}
      classes={'relative'}
      desktop={data.desktop}
      mobile={data.mobile}
      styles={ styles }
      footer={ <Copyright /> }
    >
      <Container wrapper styles={ styles } classes={'relative center-start noselect'}>
        <Container main styles={ styles } classes={'relative center-col'}>
          <ContentBox styles={ styles } classes={'center-col-start'}>
            <TextBox mainHeading={'WELCOME'} styles={ styles }/>
            <button className={'btn-activeFocus'} onClick={() => userSignIn('github', '/')}>
              {'Sign in with GitHub'}
            </button>
            <button onClick={() => guestSignIn()}>
              {'Continue as Guest'}
            </button>
            <Container styles={ styles } classes={'relative center-col'}>
            </Container>
          </ContentBox>
        </Container>
      </Container>
    </Layout>
  );
};

export default signInPage;
