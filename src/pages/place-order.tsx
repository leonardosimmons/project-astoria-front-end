
import React from 'react';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { NavbarData } from '../utils/types';

import styles from '../containers/pages/order/PlaceOrder.module.scss';
import { useOrder } from '../helpers/hooks/useOrder';

import Layout from '../containers/layout';
import Container from '../components/container';
import Copyright from '../components/copyright';
import Grid from '../components/grid';
import OrderSummary from '../containers/pages/order/components/OrderSummary';
import OrderPreview from '../containers/pages/order/components/OrderPreview';


const {
  NAVBAR_DESKTOP_API,
  NAVBAR_MOBILE_API
} = process.env;


export const getServerSideProps: GetServerSideProps = async () => {
  const data: NavbarData | undefined = await axios.all([
    axios.get(NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
  ])
  .then(axios.spread((desktop, mobile) => {
    if(desktop.status === 200, mobile.status === 200) {
      const data: NavbarData = {
        desktop: desktop.data,
        mobile: mobile.data
      }

      return data;
    }
  }))
  .catch(err => {
    throw new Error(err.message);
  });

  return {
    props: {
      data: data as NavbarData
    }
  };
};


function PlaceOrder({ data }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element
{
  const order = useOrder();

  return (
    <Layout
      parent={'place-order'}
      title={'ASTORIA | Place Order'}
      styles={styles}
      desktop={data.desktop}
      mobile={data.mobile}
      footer={<Copyright styles={styles}/>}
    >
      <Container wrapper styles={styles}>
        <Grid even grid={styles.grid}>
          <OrderPreview order={order} />
          <OrderSummary total={order.summary.total} />
        </Grid>
      </Container>
    </Layout>
  );
}

export default PlaceOrder;
