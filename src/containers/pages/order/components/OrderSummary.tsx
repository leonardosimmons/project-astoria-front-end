
import React from 'react';

import styles from './OrderSummary.module.scss';

import Container from '../../../../components/container';
import ContentBox from '../../../../components/box';
import Button from '../../../../components/button';

type Props = {
  total: number
};


const OrderSummary: React.FunctionComponent<Props> = ({ total }): JSX.Element => {
  return (
    <Container wrapper styles={styles}>
      <ContentBox styles={styles}>
        <div>
          <h2>{'ORDER SUMMARY'}</h2>
        </div>
        <div>
          <p>{'Items'}</p>
          <p>{`$${total.toLocaleString()}`}</p>
        </div>
        <div>
          <p>{'Shipping'}</p>
          <p>{`FREE`}</p>
        </div>
        <div>
          <p>{'Tax'}</p>
          <p>{`$87.53`}</p>
        </div>
        <div>
          <p>{'Total'}</p>
          <p>{`$${(total + 87.53).toLocaleString()}`}</p>
        </div>
        <div>
          <Button 
            text={'Place Order'}
            styles={styles}
          />
        </div>
      </ContentBox>
    </Container>
  );
};

export default OrderSummary;
