
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NavbarData, ProductCartToken } from '../utils/types';
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
  const cart = useCart();
  const context = useAppSelector((state) => state.cart);

  useWatchUserSignIn();

  // loads current users cart
  React.useEffect(() => {
    cart.get();
  }, []);
  
  const removeProduct = React.useCallback((p: ProductCartToken) => {
    cart.remove(p.order.id);
    cart.get();
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
        <OrderPreview cart={context} remove={removeProduct}/>
        <OrderSummary />
      </Container>
    </Layout>
  );
};

export default UserCart;
