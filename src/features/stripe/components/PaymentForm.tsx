
import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { AmountToken, CartContext, ProductCartToken } from '../../../utils/types';

import styles from '../styles/PaymentForm.module.scss';

import { useStripeController } from '../hooks/useStripeController';
import { formatAmount } from '../../../helpers/functions';
import { useAppSelector } from '../../../helpers/hooks/redux';


const testToken: AmountToken = {
  amount: 450.45,
  quantity: 1,
  currency: 'usd'
};

const StripeCheckout: React.FunctionComponent = (): JSX.Element => { 
  const cart: CartContext = useAppSelector((state) => state.cart) 
  const { errorCheck, form, status, submit } = useStripeController();

  function formatTotal() {
    let total: number = cart.summary.total + (cart.summary.total * .075);
    return formatAmount({
      amount: total,
      quantity: 1,
      currency: 'usd'
    });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form 
          id="payment-form" 
          className={styles.form} 
          onSubmit={submit}
          ref={form.styles.wrapper}
        >
          <div className={styles.inputRow}>
            <div id="card-element" className={`${styles.input} ${styles.cardElement}`}>
              <CardElement onChange={errorCheck}/>
            </div>
          </div>
          <div 
            id="card-errors" 
            className={styles.error} 
            role="alert"
            ref={form.styles.error}>
          { status.error 
            ? status.error
            : null  
          }    
          </div>
          <button 
            id="submit" 
            ref={form.styles.button}
            className={styles.button}
            disabled={status.disabled || status.processing || status.succeeded}>
            <div 
              id="spinner" 
              className={`${styles.spinner} hidden`}
              ref={form.styles.spinner}/>
            {
              !status.succeeded && !status.processing
              ? <>  
                  <span 
                  id="button-text" 
                  ref={form.styles.text}>{'Pay'}</span>
                  <span id="order-amount">{` ${formatTotal()}`}</span>
                </>
              : status.processing
                ? <span id="button-text" ref={form.styles.text}></span>
                : <span id="button-text" ref={form.styles.text}></span>
            }
          </button>
        </form>
        <div className={`${styles.result} hidden`} ref={form.styles.result}>
          <p style={{textAlign: 'center', fontWeight: 'bold'}}>{'Payment completed'}<br /></p>
          <pre ref={form.styles.pre}>
            <iframe src="https://giphy.com/embed/l41lS0IgRIFkAuA5G" width="280" height="280" frameBorder="0" className="giphy-embed" style={{margin: '0 auto'}} allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dancing-friday-weekend-l41lS0IgRIFkAuA5G"></a></p>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default StripeCheckout;