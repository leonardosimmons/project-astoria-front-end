
import React from 'react';

import styles from '../containers/pages/order/PlaceOrder.module.scss';
import { useOrder } from '../helpers/hooks/useOrder';

import Layout from '../containers/layout';
import Container from '../components/container';
import Copyright from '../components/copyright';
import Grid from '../components/grid';
import OrderSummary from '../containers/pages/order/components/OrderSummary';
import OrderPreview from '../containers/pages/order/components/OrderPreview';

function PlaceOrder(): JSX.Element
{
  const order = useOrder();

  return (
    <Layout
      parent={'place-order'}
      title={'ASTORIA | Place Order'}
      styles={styles}
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
