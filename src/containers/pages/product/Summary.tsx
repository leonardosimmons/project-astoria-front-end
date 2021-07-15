
import React from 'react';

import styles from './Summary.module.scss';

import Container from '../../../components/container';
import Heading from '../../../components/heading';
import { Combinable } from '../../../utils/types';


type Props = {
  id: Combinable;
  fit: string;
  name: string;
  price: string;
  chosenSize: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  addToCart: (e: React.FormEvent) => void;
};


const ProductSummary: React.FunctionComponent<Props> = ({ id, fit, name, price, chosenSize, addToCart }):JSX.Element => {
  return (
    <Container wrapper styles={styles} classes={'relative noselect'}>
      <Heading classes={styles.heading}>
        <h1>{name}</h1>
        <p>{`$${price}`}</p>
      </Heading>
      <form onSubmit={addToCart} className={styles.form}>
        {
          fit !== 'other' &&
          <select 
            required
            className={styles.sizeBox}
            onChange={chosenSize}>
            {
              fit === 'standard' ?
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
              fit === 'women' ?
              <>
              <option value={'select'}>{'SELECT SIZE '}</option>
              <option value={0o0}>{0o0}</option>
              <option value={0}>{0}</option>
              <option value={1}>{1}</option>
              <option value={2}>{2}</option>
              <option value={3}>{3}</option>
              <option value={4}>{4}</option>
              <option value={5}>{5}</option>
              <option value={6}>{6}</option>
              <option value={7}>{7}</option>
              <option value={8}>{8}</option>
              <option value={9}>{9}</option>
              <option value={10}>{10}</option>
              <option value={11}>{11}</option>
              <option value={12}>{12}</option>
              <option value={13}>{13}</option>
              <option value={14}>{14}</option>
              <option value={15}>{15}</option>
              <option value={16}>{16}</option>
              <option value={17}>{17}</option>
              <option value={18}>{18}</option>
              <option value={19}>{19}</option>
              <option value={20}>{20}</option>
              <option value={21}>{21}</option>
              <option value={22}>{22}</option>
              <option value={23}>{23}</option>
              <option value={24}>{24}</option>
              </>
              :
              fit === 'shoes' ? 
              <>
              <option value={'select'}>{'SELECT SIZE '}</option>
              <option value={5}>{5}</option>
              <option value={5.5}>{5.5}</option>
              <option value={6}>{6}</option>
              <option value={6.5}>{6.5}</option>
              <option value={7}>{7}</option>
              <option value={7.5}>{7.5}</option>
              <option value={8}>{8}</option>
              <option value={8.5}>{8.5}</option>
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
              : 
              fit === 'men_pant' ?
              <>
                <option value={'select'}>{'SELECT SIZE '}</option>
                <option value={28}>{28}</option>
                <option value={29}>{29}</option>
                <option value={30}>{30}</option>
                <option value={31}>{31}</option>
                <option value={32}>{32}</option>
                <option value={33}>{33}</option>
                <option value={34}>{34}</option>
                <option value={35}>{35}</option>
                <option value={36}>{36}</option>
                <option value={37}>{37}</option>
                <option value={38}>{38}</option>
                <option value={40}>{40}</option>
                <option value={41}>{41}</option>
                <option value={42}>{42}</option>
                <option value={43}>{43}</option>
                <option value={44}>{44}</option>
                <option value={45}>{45}</option>
                <option value={46}>{46}</option>
                <option value={47}>{47}</option>
                <option value={48}>{48}</option>
                <option value={49}>{49}</option>
                <option value={50}>{50}</option>
              </>
              : ''
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
