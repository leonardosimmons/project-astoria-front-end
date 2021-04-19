
import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { page } from '../utils/keys';
import { NavbarData } from '../utils/types';
import { preventDefault, handleInputRef } from '../helpers/functions';

import styles from '../containers/pages/sign-in/SignIn.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import ContentBox from '../components/box/ContentBox';
import TextBox from '../components/text';
import Copyright from '../components/copyright';
import SignInForm from '../containers/pages/sign-in/form';


function signInPage({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const router: NextRouter = useRouter();
  
  /* -------------------------  FORM  ------------------------- */
  const emailRef = React.useRef<string>();
  const passwordRef = React.useRef<string>();
  const [ email, setEmail ] = React.useState<string>();
  const [ password, setPassword ] = React.useState<string>();

  const handleEmail = handleInputRef(emailRef);
  const handlePassword = handleInputRef(passwordRef);
  const handleSignIn = preventDefault(() => { 
    setEmail(emailRef.current);
    setPassword(passwordRef.current);
  });

  return (
    <Layout
      solid
      parent={ page.SIGN_IN }
      title={'ASTORIA | Sign-in'}
      classes={'relative'}
      desktop={ config.desktop }
      mobile={ config.mobile }
      styles={ styles }
      footer={ <Copyright /> }
    >
      <Container wrapper styles={ styles } classes={'relative center-start noselect'}>
        <Container main styles={ styles } classes={'relative center-col'}>
          <ContentBox styles={ styles } classes={'center-col-start'}>
            <TextBox mainHeading={'SIGN IN'} styles={ styles }/>
            <SignInForm 
              email={ handleEmail }
              password={ handlePassword }
              submit={ handleSignIn }
              styles={ styles }/>
            <Container styles={ styles } classes={'relative center-col'}>
              <TextBox textOne={'New Customer?'}/> 
              <Link href={'/under-construction'}>
                <a>Register</a>
              </Link>
            </Container>
          </ContentBox>
        </Container>
      </Container>
    </Layout>
  );
};

export default signInPage;

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
