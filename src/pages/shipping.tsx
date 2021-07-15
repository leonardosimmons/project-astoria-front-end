
import React from 'react';
import { useRouter } from 'next/router';
import { page } from '../utils/keys';
import { OrderShippingInfo } from '../utils/types';
import { handleInputRef, preventDefault } from '../helpers/functions';

import styles from '../containers/pages/shipping/Shipping.module.scss';
import { useOrder } from '../helpers/hooks/useOrder';
import { useCart } from '../helpers/hooks/useCart';

import Layout from '../containers/layout';
import Container from '../components/container';
import Copyright from '../components/copyright';
import Input from '../components/input';


function ShippingPage(): JSX.Element {
  const cart = useCart();
  const order = useOrder();
  const router = useRouter();
  
  // init process or redirect if not a user
  React.useEffect(() => {
    if (!cart.user.status.isSignedIn || cart.items.length === 0) {
      router.push('/sign-in');
    } 

    order.pendingStatus(true);
  },[]);

  // FORM
  const addressRef = React.useRef<string>('');
  const cityRef = React.useRef<string>('');
  const postalRef = React.useRef<number>(0);
  const stateRef = React.useRef<string>('');

  const handleAddress = React.useCallback(handleInputRef(addressRef), []);
  const handleCity = React.useCallback(handleInputRef(cityRef), []);
  const handlePostal = React.useCallback(handleInputRef(postalRef), []);
  const handleState = React.useCallback(handleInputRef(stateRef), []);

  const handleFormSubmit = React.useCallback(preventDefault(() => {
   const token: OrderShippingInfo = {
      address: addressRef.current as string,
      city: cityRef.current as string,
      postal: postalRef.current as number,
      state: stateRef.current as string
    };

    order.resetShippingStatus();
    order.validate.shippingForm(token.address, token.city, token.postal, token.state);

    if (order.validate.isValidated) {
      order.verifyShipping(true);
      order.shippingStatus(true);
      order.setShippingInfo(token);

      router.push('/place-order');
    } else if (order.validate.error) {      
        order.shippingError(true);
        order.errorStatus(true);
        alert(order.validate.error);
    }
  }), []);

  return (
    <Layout
      solid
      parent={page.SHIPPING}
      title={'ASTORIA | Shipping'}
      styles={styles}
      footer={<Copyright />}
    >
      <Container wrapper styles={styles} classes={'noselect'}>
        <h1>{'SHIPPING'}</h1>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <Input col labelFront={'Address'} placeholder={'Enter address'} styles={styles} changed={handleAddress}/>
          <Input col labelFront={'City'} placeholder={'Enter city'} styles={styles} changed={handleCity}/>
          <Input col labelFront={'Postal Code'} placeholder={'Enter postal code'} styles={styles} changed={handlePostal}/>
          <Input col labelFront={'State'} placeholder={'Enter state'} styles={styles} changed={handleState}/>
          <div className={styles.btnBox}>
            <Input type={'reset'} value={'RESET'} classes={styles.btn}/>
            <Input type={'submit'} value={'SUBMIT'} classes={styles.btn}/>
          </div>
        </form>
      </Container>
    </Layout>
  );
};

export default ShippingPage;
