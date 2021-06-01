
import React from 'react';
import { preventDefault } from '../../../helpers/functions';

import styles from './Summary.module.scss';

import Container from '../../../components/container';
import Heading from '../../../components/heading';


type Props = {};


const ProductSummary: React.FunctionComponent<Props> = ({}):JSX.Element => {
  //! place in product-preview
  const handleFormSubmit = React.useCallback(preventDefault((e: React.FormEvent) => {
    // add new item to user cart within the database
    // re-route user to /cart 
  }), []);

  return (
    <Container wrapper styles={styles}>
      <Heading classes={styles.heading}>
        <h1>{'PRODUCT NAME GOES HERE'}</h1>
        <p>{'$0.00'}</p>
      </Heading>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <select required id={'product ID here'} name={'size'} className={styles.sizeBox}>
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
