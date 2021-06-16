
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NavbarData } from '../utils/types';
import { page } from '../utils/keys';

import styles from '../containers/pages/cart/Cart.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import Copyright from '../components/copyright';
import CartPreview from '../containers/pages/cart/preview';
import CartSummary from '../containers/pages/cart/summary';


const {
  NAVBAR_DESKTOP_API,
  NAVBAR_MOBILE_API
} = process.env;


export const getStaticProps: GetStaticProps = async () => {
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
      config: data as NavbarData
    }
  };
};

function UserCart({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <Layout
      solid
      parent={ page.SIGN_IN }
      title={'ASTORIA | Cart'}
      classes={'relative'}
      desktop={ config.desktop }
      mobile={ config.mobile }
      styles={ styles }
      footer={ <Copyright /> }
    >
      <Container wrapper styles={ styles } classes={'relative center noselect'}>
        <CartPreview />
        <CartSummary />
      </Container>
    </Layout>
  );
};

export default UserCart;
