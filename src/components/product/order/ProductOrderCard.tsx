
import React from 'react';

import styles from './ProductOrderCard.module.scss';

import Container from '../../container';
import ContentBox from '../../box/ContentBox';
import BaseGrid from '../../grid/Grid';
import Image from 'next/image';
import BaseHeading from '../../heading/Heading';
import { ProductCartToken } from '../../../utils/types';


type Props = {
  token: ProductCartToken;
  remove: (p: ProductCartToken) => void;
  chosenQuantity: (p: ProductCartToken) => (e: React.ChangeEvent<HTMLSelectElement>) => void;
};


const ProductOrderCard: React.FunctionComponent<Props> = ({ token, remove, chosenQuantity }): JSX.Element => {
  return (
    <Container wrapper styles={styles}>
      <ContentBox styles={styles}>
        <BaseGrid even grid={styles.grid}>
          <div className={`${styles.imgBox} relative`}>
            <Image 
              src={token.product.preview.image.src}
              alt={'product'}
              layout={'fill'}
              objectFit={'contain'}
            />
          </div>
          <div className={styles.detailsBox}>
            <BaseGrid even grid={styles.detailsGrid}>
              <BaseHeading classes={styles.detailsHeading}>
                <h2>{token.product.details.name}</h2>
                <p>{`Style# ${token.product.details.style}`}</p>
                {token.order.size !== 'other' &&
                   <p>{`Size: ${token.order.size}`}</p>
                }
              </BaseHeading>
              <div className={styles.detailsAvail}>
                <p>{'AVAILABLE'}</p>
                <p>{'Your selection is available for immediate purchase online.'}</p>
              </div>
              <button onClick={() => remove(token)}>{'REMOVE'}</button>
            </BaseGrid>
          </div>
          <BaseGrid even grid={styles.optionsGrid}>
            <div className={styles.optionsBox}>
              <form className={styles.qtyForm}>
                <select onChange={chosenQuantity(token)}>
                  <option value={1}>{`QTY: ${token.order.quantity}`}</option>
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
                </select>
              </form>
            </div>
            <div className={styles.optionsBox}>
              <div className={styles.priceBox}>
                <span>{'$' + token.product.details.price.toLocaleString()}</span>
              </div>
            </div>
          </BaseGrid>
        </BaseGrid>
      </ContentBox>
    </Container>
  );
};

export default ProductOrderCard;
