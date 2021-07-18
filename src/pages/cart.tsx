
import React from 'react';
import { CartContext, ProductCartToken } from '../utils/types';
import { page } from '../utils/keys';

import styles from '../containers/pages/cart/Cart.module.scss';

import { useWatchUserSignIn } from '../helpers/hooks/useWatchUserSignIn';
import { useAppSelector } from '../helpers/hooks/redux';
import { useCart } from '../helpers/hooks/useCart';

import Layout from '../containers/layout';
import Container from '../components/container';
import Copyright from '../components/copyright';
import OrderPreview from '../containers/pages/cart/preview';
import OrderSummary from '../containers/pages/cart/summary';


function UserCart(): JSX.Element {
  const cart = useCart();
  const qRef = React.useRef<string>('');
  const context: CartContext = useAppSelector((state) => state.cart);

  // Checks for existsing session/ guest login
  useWatchUserSignIn();

  const removeProduct = React.useCallback((p: ProductCartToken) => {
    cart.remove(p.order.id);
    cart.get();
  }, []);

  const handleQuantity = React.useCallback((p: ProductCartToken) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    qRef.current = e.target.value;
    cart.updateQuantity(p.order.id, parseInt(qRef.current));
  }, []);

  return (
    <Layout
      solid
      parent={ page.SIGN_IN }
      title={'ASTORIA | Cart'}
      classes={'relative'}
      styles={ styles }
      footer={ <Copyright /> }
    >
      <div className={styles.topSpacer} />
      <Container wrapper styles={ styles } classes={'relative center noselect'}>
        <OrderPreview cart={context} remove={removeProduct} quantity={handleQuantity}/>
        <OrderSummary cart={context}/>
      </Container>
    </Layout>
  );
};

export default UserCart;
