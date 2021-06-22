
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
  quantity: (p: ProductCartToken) => (e: React.ChangeEvent<HTMLSelectElement>) => void;
};


const OrderPreview: React.FunctionComponent<Props> = ({ cart, remove, quantity }): JSX.Element => {
  return (
    <Container wrapper styles={ styles } classes={'relative center-col'}>
      <ContentBox styles={ styles } classes={'relative center-col-start'}>
        <TextBox mainHeading={'YOUR SELECTIONS'} mainHeadingClasses={ styles.desktopHeading }/>
        <TextBox mainHeading={`Shopping Bag (${ cart.summary.count })`} mainHeadingClasses={ styles.mobileHeading }/>
        <Container styles={ styles } classes={'relative'}>
          {
           cart.items.length === 0 ? 
            <p>{'No items currently in cart'}</p>
            :
            <>
            { cart.items.map((prod: ProductCartToken, index: number) => (
                <ProductOrderCard
                  key={index} 
                  token={prod} 
                  remove={remove}
                  chosenQuantity={quantity}
                />
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
