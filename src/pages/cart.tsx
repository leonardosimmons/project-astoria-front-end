
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { NextRouter, useRouter } from 'next/router';
import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';
import { CartContext, NavbarData, ProductCartToken } from '../utils/types';
import { page } from '../utils/keys';

import styles from '../containers/pages/cart/Cart.module.scss';
import { useWatchUserSignIn } from '../helpers/hooks/useWatchUserSignIn';
import { useAppSelector } from '../helpers/hooks/redux';
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


export const getServerSideProps: GetServerSideProps = async () => {
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

function UserCart({ config }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const cart = useCart();
  const qRef = React.useRef<string>('');
  const router: NextRouter = useRouter();
  const context: CartContext = useAppSelector((state) => state.cart);

  // Checks for existsing session/ guest login
  useWatchUserSignIn();

  const removeProduct = React.useCallback((p: ProductCartToken) => {
    cart.remove(p.order.id);
    cart.get();
  }, []);

  const handleQuantity = React.useCallback((p: ProductCartToken) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    qRef.current = e.target.value;
    cart.updateQuantity(p.order.id, parseInt(qRef.current));
    router.reload();
  }, []);

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
        <OrderPreview cart={context} remove={removeProduct} quantity={handleQuantity}/>
        <OrderSummary cart={context}/>
      </Container>
    </Layout>
  );
};

export default UserCart;
