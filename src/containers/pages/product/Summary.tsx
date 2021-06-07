
import React from 'react';

import styles from './Summary.module.scss';

import Container from '../../../components/container';
import Heading from '../../../components/heading';
import { Combinable } from '../../../utils/types';


type Props = {
  id: Combinable;
  type: string;
  name: string;
  price: string;
  addToCart: (e: React.FormEvent) => void;
};


const ProductSummary: React.FunctionComponent<Props> = ({ id, type, name, price, addToCart }):JSX.Element => {
  return (
    <Container wrapper styles={styles} classes={'relative noselect'}>
      <Heading classes={styles.heading}>
        <h1>{name}</h1>
        <p>{`$${price}`}</p>
      </Heading>
      <form onSubmit={addToCart} className={styles.form}>
        {
          type !== 'other' &&
          <select required id={id as string} name={'size'} className={styles.sizeBox}>
            {
              type === 'clothes' ?
              <>
              <option value={'select'}>{'SELECT SIZE '}</option>
              <option value={'XS'}>{'X-SMALL'}</option>
              <option value={'S'}>{'SMALL'}</option>
              <option value={'M'}>{'MEDIUM'}</option>
              <option value={'L'}>{'LARGE'}</option>
              <option value={'XL'}>{'X-LARGE'}</option>
              <option value={'2XL'}>{'XX-LARGE'}</option>
              <option value={'3XL'}>{'XXX-LARGE'}</option>
              </>
              :
              <>
              <option value={'select'}>{'SELECT SIZE '}</option>
              <option value={5}>{5}</option>
              <option value={5.5}>{5.5}</option>
              <option value={6}>{6}</option>
              <option value={6.5}>{6.5}</option>
              <option value={7}>{7}</option>
              <option value={7.5}>{7.5}</option>
              <option value={8}>{8}</option>
              <option value={9}>{9}</option>
              <option value={9.5}>{9.5}</option>
              <option value={10}>{10}</option>
              <option value={10.5}>{10.5}</option>
              <option value={11}>{11}</option>
              <option value={11.5}>{11.5}</option>
              <option value={12}>{12}</option>
              <option value={12.5}>{12.5}</option>
              <option value={13}>{13}</option>
              <option value={13.5}>{13.5}</option>
              </>
            }
          </select>
        }
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
