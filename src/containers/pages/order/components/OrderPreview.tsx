
import React from 'react';
import ContentBox from '../../../../components/box';
import Container from '../../../../components/container';

import styles from './OrderPreview.module.scss';


type Props = {};


const OrderPreview: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Container wrapper styles={styles}>
      <ContentBox styles={styles}>
        <div className={styles.shippingBox}>
          <h2>{'SHIPPING'}</h2>
          <p>{'Address: 1337 Main St. Portland, OR 97225, USA'}</p>
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