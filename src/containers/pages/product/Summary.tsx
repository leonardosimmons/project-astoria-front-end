
import React from 'react';

import styles from './Summary.module.scss';

import Container from '../../../components/container';
import Heading from '../../../components/heading';
import { Combinable } from '../../../utils/types';


type Props = {
  id: Combinable;
  name: string;
  price: string;
  addToCart: (e: React.FormEvent) => void;
};


const ProductSummary: React.FunctionComponent<Props> = ({ id, name, price, addToCart }):JSX.Element => {
  return (
    <Container wrapper styles={styles} classes={'relative noselect'}>
      <Heading classes={styles.heading}>
        <h1>{name}</h1>
        <p>{`$${price}`}</p>
      </Heading>
      <form onSubmit={addToCart} className={styles.form}>
        <select required id={id as string} name={'size'} className={styles.sizeBox}>
          <option value={'select'}>{'SELECT SIZE '}</option>
          <option value={'XS'}>{'X-SMALL'}</option>
          <option value={'S'}>{'SMALL'}</option>
          <option value={'M'}>{'MEDIUM'}</option>
          <option value={'L'}>{'LARGE'}</option>
          <option value={'XL'}>{'X-LARGE'}</option>
          <option value={'2XL'}>{'XX-LARGE'}</option>
          <option value={'3XL'}>{'XXX-LARGE'}</option>
        </select>
        <input 
          type={'submit'} 
          value={'ADD TO SHOPPING CART'} 
          className={`btn-hoverConfig btn-activeFocus ${styles.btn}`}
        />
      </form>
    </Container>
  ); 
};

export default ProductSummary
