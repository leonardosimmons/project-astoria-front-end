
import React from 'react';
import axios from 'axios';
import { NextRouter, useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NavbarData } from '../utils/types';
import { page } from '../utils/keys';

import styles from '../containers/pages/sign-in/SignIn.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import ContentBox from '../components/box';
import TextBox from '../components/text';
import Copyright from '../components/copyright';
import { useUser } from '../helpers/hooks/useUser';


export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop, mobile) => {
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
      config: data as NavbarData
    }
  }
};


function signInPage({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const user = useUser();
  const router: NextRouter = useRouter();
  const [ session, loading ] = useSession();

  // redirects if user is already logged in
  if(session) {
    router.push('/');
  }

  function guestSignIn() {
    user.guestSignIn();
    router.push('/');
  };

  return (
    <Layout
      solid
      parent={ page.SIGN_IN }
      title={'ASTORIA | Sign-in'}
      classes={'relative'}
      desktop={config.desktop}
      mobile={config.mobile}
      styles={ styles }
      footer={ <Copyright /> }
    >
      <Container wrapper styles={ styles } classes={'relative center-start noselect'}>
        <Container main styles={ styles } classes={'relative center-col'}>
          <ContentBox styles={ styles } classes={'center-col-start'}>
            <TextBox mainHeading={'WELCOME'} styles={ styles }/>
            <button className={'btn-activeFocus'} onClick={() => signIn('github', {callbackUrl: '/'})}>
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
