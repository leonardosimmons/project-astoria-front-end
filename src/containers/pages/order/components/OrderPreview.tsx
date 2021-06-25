
import React from 'react';
import { Order } from '../../../../utils/types';

import styles from './OrderPreview.module.scss';

import ContentBox from '../../../../components/box';
import Container from '../../../../components/container';


type Props = {
  order: Order
};


const OrderPreview: React.FunctionComponent<Props> = ({ order }): JSX.Element => {
  const state: string = 'random';

  return (
    <Container wrapper styles={styles}>
      <ContentBox styles={styles}>
        <div className={styles.shippingBox}>
          <h2>{'SHIPPING'}</h2>
          <p>{`Address: ${order.shipping.info.address} ${order.shipping.info.city}, ${state} ${order.shipping.info.postal}, USA`}</p>
        </div>
        <div className={styles.paymentBox}>
          <h2>{'PAYMENT METHOD'}</h2>
          <p>{`Method: PayPal`}</p>
        </div>
        <div className={styles.itemsBox}>
          <h2>{'ORDER ITEMS'}</h2>
          <div className={styles.items}>
            <span>{'TEST ITEM ONE'}</span>
            <span>{'TEST ITEM TWO'}</span>
          </div>
        </div>
      </ContentBox>
    </Container>
  );
};

export default OrderPreview;