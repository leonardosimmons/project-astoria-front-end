
import axios from 'axios';
import Link from 'next/link';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { page } from '../utils/keys';
import { NavbarData } from '../utils/types';

import styles from '../containers/pages/sign-in/Sign-In.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import ContentBox from '../components/box/ContentBox';
import Input from '../components/input';
import TextBox from '../components/text';


function signInPage({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <Layout
      solid
      parent={ page.SIGN_IN }
      title={'ASTORIA | Sign-in'}
      classes={'relative'}
      desktop={ config.desktop }
      mobile={ config.mobile }
      styles={ styles }
    >
      <Container wrapper styles={ styles } classes={'relative center'}>
        <ContentBox styles={ styles } classes={'center-col-start'}>
          <TextBox mainHeading={'SIGN IN'} styles={ styles }/>
          <form>
            <Input col labelFront={'Email Address'} styles={ styles }/>
            <Input col type={'password'} labelFront={'Password'} styles={ styles }/>
            <div className={`${ styles.btnContainer } relative center`}>
              <Input type={'submit'} value={'SUBMIT'} classes={ styles.btn }/>
              <Input type={'reset'} value={'RESET'} classes={ styles.btn }/>
            </div>
          </form>
          <Container styles={ styles } classes={'relative center'}>
            <TextBox textOne={'New Customer?'}/> 
            <Link href={'/under-construction'}>
              <a>Register</a>
            </Link>
          </Container>
        </ContentBox>
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
