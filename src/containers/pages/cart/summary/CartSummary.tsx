
import React from 'react';
import Container from '../../../../components/container/Container';
import Heading from '../../../../components/heading/Heading';

import styles from './CartSummary.module.scss';


type Props = {

};


const CartSummary: React.FunctionComponent<Props> = (): JSX.Element => {
  const tempTotal: number = 3;
  const tempCost: number = 0.00;
  const tempBtn = { text: 'Proceeed to Checkout', link: '/under-construction'};

  return (
    <div className={styles.summaryBox}>
      <Heading
        classes={styles.heading}
        styles={styles} 
        btn={tempBtn}
      >
        <h3>{`SUBTOTAL (${tempTotal}) ITEMS`}</h3>
        <p>{`$${tempCost}`}</p>
      </Heading>
    </div>
  );
};

export default CartSummary;