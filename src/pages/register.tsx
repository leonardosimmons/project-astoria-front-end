
import React from 'react';
import axios from 'axios';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { handleInputRef, preventDefault } from '../helpers/functions';
import { NavbarData } from '../utils/types/types';
import { page } from '../utils/keys';

import styles from '../containers/pages/register/Register.module.scss';

import Layout from '../containers/layout';
import Copyright from '../components/copyright';
import Container from '../components/container';
import ContentBox from '../components/box/ContentBox';
import TextBox from '../components/text';
import RegistrationForm from '../containers/pages/register/form';


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
      };

      return dataToken;
    }
  }))
  .catch(err => { throw new Error(`Error: ${ err.message }`)});

  return {
    props: {
      config: data as NavbarData
    }
  };
};


function registerPage({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const firstNameRef = React.useRef<string>();
  const lastNameRef = React.useRef<string>();
  const ageRef = React.useRef<number>();
  const emailRef = React.useRef<string>();
  const passwordRef = React.useRef<string>();
  const pwCheckRef = React.useRef<string>();

  //! add to redux
  const [ firstName, setFirstName ] = React.useState<string>();
  const [ lastName, setLastName ] = React.useState<string>();
  const [ age, setAge ] = React.useState<number>();
  const [ email, setEmail ] = React.useState<string>();
  const [ password, setPassword ] = React.useState<string>();
  const [ pwCheck, setPwCheck ] = React.useState<string>();

  const handleFirstName = React.useCallback(handleInputRef(firstNameRef), []);
  const handleLastName = React.useCallback(handleInputRef(lastNameRef), []);
  const handleAge = React.useCallback(handleInputRef(ageRef), []);
  const handleEmail = React.useCallback(handleInputRef(emailRef), []);
  const handlePassword = React.useCallback(handleInputRef(passwordRef), []);
  const handlePwCheck = React.useCallback(handleInputRef(pwCheckRef), []);
  const handleFormSubmit = React.useCallback(preventDefault(() => {
    setFirstName(firstNameRef.current);
    setLastName(lastNameRef.current);
    setAge(ageRef.current);
    setEmail(emailRef.current);
    setPassword(passwordRef.current);
    setPwCheck(pwCheckRef.current);
  }), []);

  console.log(`FirstName: ${ firstName }\nLastName: ${ lastName }\nAge: ${ age }\nEmail: ${ email }\nPassword: ${ password }\nPwCheck: ${ pwCheck }`);

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
          <ContentBox styles={ styles } classes={'relative center-col-start'}>
            <TextBox mainHeading={'New Account'} styles={ styles } />
            <RegistrationForm 
              firstName={ handleFirstName }
              lastName={ handleLastName }
              age={ handleAge }
              email={ handleEmail }
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

