
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { useSession } from 'next-auth/client';
import { NextRouter, useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NavbarData, ProductCartToken } from '../utils/types';
import { link, page } from '../utils/keys';

import styles from '../containers/pages/cart/Cart.module.scss';
import { useWatchUserSignIn } from '../helpers/hooks/useWatchUserSignIn';
import { useUser } from './../helpers/hooks/useUser';
import { useCart } from '../helpers/hooks/useCart';

import Layout from '../containers/layout';
import Container from '../components/container';
import Copyright from '../components/copyright';
import OrderPreview from '../containers/pages/cart/preview';
import OrderSummary from '../containers/pages/cart/summary';


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
};``

function UserCart({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const user = useUser();
  const cart = useCart();
  const [ session ] = useSession();
  const router: NextRouter = useRouter();
  const [ current, setCurrent ] = React.useState<Array<ProductCartToken>>();

  useWatchUserSignIn();

  // redirects user if not signed in
  React.useEffect(() => {
    if (!session && user.id === 0) {
      router.push(link.SIGN_IN);
    }
  }, []);


  // loads current users cart
  React.useEffect(() => {
    if (user.id !== 0) {
      cart.get();
    }
  }, [user.id]);

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
        <OrderPreview />
        <OrderSummary />
      </Container>
    </Layout>
  );
};

export default UserCart;
