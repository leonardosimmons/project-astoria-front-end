
import React from 'react';
import Container from '../../../../components/container';
import Heading from '../../../../components/heading';
import { CartContext } from '../../../../utils/types';

import styles from './CartSummary.module.scss';


type Props = {
  cart: CartContext
};


const CartSummary: React.FunctionComponent<Props> = ({ cart }): JSX.Element => {
  return (
    <Container wrapper styles={styles}>
      <Heading
        classes={styles.heading}
        styles={styles} 
        btn={{ text: 'Proceeed to Checkout', link: '/under-construction' }}
      >
        <h3>{`SUBTOTAL (${cart.summary.count}) ITEMS`}</h3>
        <p>{`$${cart.summary.total.toLocaleString()}`}</p>
      </Heading>
    </Container>
  );
};

export default CartSummary;
