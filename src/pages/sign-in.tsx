
import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';
import { page } from '../utils/keys';

import styles from '../containers/pages/sign-in/SignIn.module.scss';
import { useWatchUserSignIn } from '../helpers/hooks/useWatchUserSignIn';
import { useUser } from '../helpers/hooks/useUser';

import Layout from '../containers/layout';
import Container from '../components/container';
import ContentBox from '../components/box';
import TextBox from '../components/text';
import Copyright from '../components/copyright';


function signInPage(): JSX.Element {
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
            <button onClick={() => router.push('/register')}>
              {'Register as New User'}
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
