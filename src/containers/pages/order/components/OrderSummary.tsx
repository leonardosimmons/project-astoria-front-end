
import React from 'react';

import styles from './OrderSummary.module.scss';

import Container from '../../../../components/container';
import ContentBox from '../../../../components/box/ContentBox';
import Button from '../../../../components/button/Button';

type Props = {};


const OrderSummary: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Container wrapper styles={styles}>
      <ContentBox styles={styles}>
        <div>
          <h2>{'ORDER SUMMARY'}</h2>
        </div>
        <div>
          <p>{'Items'}</p>
          <p>{`$189.97`}</p>
        </div>
        <div>
          <p>{'Shipping'}</p>
          <p>{`$3.00`}</p>
        </div>
        <div>
          <p>{'Tax'}</p>
          <p>{`$9.97`}</p>
        </div>
        <div>
          <p>{'Total'}</p>
          <p>{`$189.97`}</p>
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
