
import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { NavbarData } from '../utils/types';
import { page } from '../utils/keys';
import { preventDefault, handleInputRef } from '../helpers/functions/functions';

import styles from '../containers/pages/cart/Cart.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import Copyright from '../components/copyright';
import CartPreview from '../containers/pages/cart/preview';
import CartSummary from '../containers/pages/cart/summary';


export const getServerSideProps: GetServerSideProps = async () => {
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
  };
};

function UserCart({ config }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
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
      <Container wrapper styles={ styles } classes={'relative center noselect'}>
        <CartPreview />
        <CartSummary />
      </Container>
    </Layout>
  );
};

export default UserCart;
