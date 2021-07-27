
import React from 'react';

import styles from './OrderSummary.module.scss';

import Container from '../../../../components/container';
import ContentBox from '../../../../components/box';
import PaymentForm from '../../../../features/stripe/components/PaymentForm';
import Button from '../../../../components/button';
import { formatAmount } from '../../../../helpers/functions/functions';

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
          <p>{`${formatAmount({
            amount: total,
            quantity: 1,
            currency: 'usd'
          })}`}</p>
        </div>
        <div>
          <p>{'Shipping'}</p>
          <p>{`FREE`}</p>
        </div>
        <div>
          <p>{'Tax'}</p>
          <p>{`${formatAmount({
            amount: total * .075,
            quantity: 1,
            currency: 'usd'
          })}`}</p>
        </div>
        <div>
          <p>{'Total'}</p>
          <p>{`${formatAmount({
            amount: total + (total * .075),
            quantity: 1,
            currency: 'usd'
          })}`}</p>
        </div>
        <div>
          <PaymentForm />
        </div>
      </ContentBox>
    </Container>
  );
};

export default OrderSummary;
