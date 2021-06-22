
import React from 'react';
import styles from './OrderPreview.module.scss';

import ContentBox from '../../../../components/box';
import Container from '../../../../components/container';
import TextBox from '../../../../components/text';
import ProductOrderCard from '../../../../components/product/order';
import { CartContext, ProductCartToken } from '../../../../utils/types';


type Props = {
  cart: CartContext;
  remove: (p: ProductCartToken) => void;
};

const tempAmountInCart: number = 0;

const OrderPreview: React.FunctionComponent<Props> = ({ cart, remove }): JSX.Element => {
  return (
    <Container wrapper styles={ styles } classes={'relative center-col'}>
      <ContentBox styles={ styles } classes={'relative center-col-start'}>
        <TextBox mainHeading={'YOUR SELECTIONS'} mainHeadingClasses={ styles.desktopHeading }/>
        <TextBox mainHeading={`Shopping Bag (${ tempAmountInCart })`} mainHeadingClasses={ styles.mobileHeading }/>
        <Container styles={ styles } classes={'relative'}>
          {
           cart.items.length === 0 ? 
            <p>{'No items currently in cart'}</p>
            :
            <>
            { cart.items.map((prod: ProductCartToken) => (
                <ProductOrderCard token={prod} remove={remove}/>
              ))
            }
            </> 
          }
        </Container>
      </ContentBox>
    </Container>
  );
};

export default OrderPreview;
