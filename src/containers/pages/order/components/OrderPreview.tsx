
import React from 'react';
import { Order, ProductCartToken } from '../../../../utils/types';

import styles from './OrderPreview.module.scss';

import ContentBox from '../../../../components/box';
import Container from '../../../../components/container';
import ProductCheckoutCard from './ProductCheckoutCard';


type Props = {
  order: Order;
};


const OrderPreview: React.FunctionComponent<Props> = ({ order }): JSX.Element => {
  const state: string = 'random';

  return (
    <Container wrapper styles={styles}>
      <ContentBox styles={styles}>
        <div className={styles.itemsBox}>
          <h2>{'ORDER ITEMS'}</h2>
          <div className={styles.items}>
          {order.items.map((item: ProductCartToken, index: number) => (
            <ProductCheckoutCard key={index} product={item}/>
          ))}
          </div>
        </div>
        <div className={styles.shippingBox}>
          <h2>{'SHIPPING'}</h2>
          <p>{`Address: ${order.shipping.info.address} ${order.shipping.info.city}, ${order.shipping.info.state} ${order.shipping.info.postal}`}</p>
        </div>
        {/* <div className={styles.paymentBox}>
          <h2>{'PAYMENT METHOD'}</h2>
          <p>{`Method: PayPal`}</p>
        </div> */}
      </ContentBox>
    </Container>
  );
};

export default OrderPreview;
