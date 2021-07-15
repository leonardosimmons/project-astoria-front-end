
import React from 'react';
import { useDispatch} from 'react-redux';
import { page } from '../utils/keys';

import styles from '../containers/pages/register/Register.module.scss';
import { handleInputRef, preventDefault } from '../helpers/functions';

import 
{ 
  setAge, 
  setEmail, 
  setUsername, 
  setPassword, 
  setPwCheck
} from '../containers/pages/register/state/actions';
import { ValidationController } from '../helpers/ValidationController';

import Layout from '../containers/layout';
import Copyright from '../components/copyright';
import Container from '../components/container';
import ContentBox from '../components/box/ContentBox';
import TextBox from '../components/text';
import RegistrationForm from '../containers/pages/register/form';
import { RegistrationFormActions } from '../containers/pages/register/state/action-types';


function registerPage(): JSX.Element {
  const dispatch: React.Dispatch<RegistrationFormActions> = useDispatch();
  const validate: ValidationController = new ValidationController();

  const usernameRef = React.useRef<string>();
  const ageRef = React.useRef<number>();
  const emailRef = React.useRef<string>();
  const passwordRef = React.useRef<string>();
  const pwCheckRef = React.useRef<string>();

  const handleUsername = React.useCallback(handleInputRef(usernameRef), []);
  const handleAge = React.useCallback(handleInputRef(ageRef), []);
  const handleEmail = React.useCallback(handleInputRef(emailRef), []);
  const handlePassword = React.useCallback(handleInputRef(passwordRef), []);
  const handlePwCheck = React.useCallback(handleInputRef(pwCheckRef), []);

  const handleFormSubmit = React.useCallback(preventDefault(() => {
    validate.registrationForm(usernameRef.current as string, emailRef.current as string, ageRef.current as number, passwordRef.current as string, pwCheckRef.current as string);

    if (validate.isValidated) {
      dispatch(setUsername(usernameRef.current as string));
      dispatch(setAge(ageRef.current as number));
      dispatch(setEmail(emailRef.current as string));
      dispatch(setPassword(passwordRef.current as string));
      dispatch(setPwCheck(pwCheckRef.current as string));
    } else {
        alert(validate.error);
    }
  }), []);

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
          <ContentBox styles={ styles } classes={'relative center-col-start'}>
            <TextBox mainHeading={'New Account'} styles={ styles } />
            <RegistrationForm 
              username={ handleUsername }
              email={ handleEmail }
              age={ handleAge }
              password={ handlePassword }
              pwCheck={ handlePwCheck }
              submit={ handleFormSubmit }
              styles={ styles }
            />
          </ContentBox>
        </Container>
      </Container>
    </Layout>
  );
};

export default registerPage;
