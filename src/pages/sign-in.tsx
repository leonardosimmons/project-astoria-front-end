
import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';
import { useAppDispatch, useAppSelector } from '../helpers/hooks/redux';
import { setEmail, setPassword, verifyUserSignIn } from '../redux-store/sign-in/actions';
import { SignInToken } from '../utils/types/types';
import { page } from '../utils/keys';

import styles from '../containers/pages/sign-in/SignIn.module.scss';
import { useWatchUserSignIn } from '../helpers/hooks/useWatchUserSignIn';
import { handleInputRef, preventDefault } from '../helpers/functions/functions';
import { ValidationController } from '../helpers/ValidationController';
import { useUser } from '../helpers/hooks/useUser';

import Layout from '../containers/layout';
import Container from '../components/container';
import ContentBox from '../components/box';
import TextBox from '../components/text';
import Copyright from '../components/copyright';
import SignInForm from '../containers/pages/sign-in/form/SignInForm';


function signInPage(): JSX.Element {
  const user = useUser();
  const [ session ] = useSession();
  const dispatch = useAppDispatch();
  const router: NextRouter = useRouter();
  const token: SignInToken = useAppSelector((state) => state.sign_in);
  const validate: ValidationController = new ValidationController();
  const [ completed, setCompleted ] = React.useState<boolean>(false);

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

  const emailRef = React.useRef<string>('');
  const passwordRef = React.useRef<string>('');

  const handleEmail = React.useCallback(handleInputRef(emailRef), []);
  const handlePassword = React.useCallback(handleInputRef(passwordRef), []);
  const handleSubmit = React.useCallback(preventDefault(() => {
    validate.signInForm(emailRef.current, passwordRef.current);

    if (!validate.isValidated) {
      alert(validate.error);
      return;
    }
    
    dispatch(setEmail(emailRef.current));
    dispatch(setPassword(passwordRef.current));
    setCompleted(true);
  }), []);

  // dispatches thunk to verify entered creditials server side
  React.useEffect(() => {
    if (completed) {
      dispatch(verifyUserSignIn({
        email: emailRef.current,
        password: passwordRef.current,
        isVerified: false
      }));
    }
  }, [completed]);

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
            <TextBox mainHeading={'WELCOME'} headingOne={'Sign In'} styles={ styles }/>
            <SignInForm 
              email={handleEmail}
              password={handlePassword}
              submit={handleSubmit}
            />
            {/* <button className={'btn-activeFocus'} onClick={() => userSignIn('github', '/')}>
              {'Sign in with GitHub'}
            </button> */}
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
