
import React from 'react';
import Image from 'next/image';
import { ProductCartToken } from '../../../../utils/types';

import styles from './ProductCheckoutCard.module.scss';
import { useWatchUserSignIn } from '../../../../helpers/hooks/useWatchUserSignIn';

import Container from '../../../../components/container';
import ContentBox from '../../../../components/box';
import BaseGrid from '../../../../components/grid';
import BaseHeading from '../../../../components/heading';


type Props = {
  product: ProductCartToken;
};


const ProductCheckoutCard: React.FunctionComponent<Props> = ({ product }): JSX.Element => {
  useWatchUserSignIn();

  return (
    <Container wrapper styles={styles} classes={'noselect'}>
      <ContentBox styles={styles}>
        <BaseGrid even grid={styles.grid}>
          <div className={`${styles.imgBox} relative`}>
            <Image 
              src={product.product.preview.image.src}
              alt={'product'}
              layout={'fill'}
              objectFit={'contain'}
            />
          </div>
          <div className={styles.detailsBox}>
            <BaseHeading classes={styles.detailsHeading}>
              <h2>{product.product.details.name}</h2>
              <p>{`Style# ${product.product.details.style}`}</p>
              <p>{`Size: ${product.order.size}`}</p>
            </BaseHeading>
            <BaseGrid even grid={styles.optionsGrid}>
            <div className={styles.optionsBox}>
              <p>{`QTY: ${product.order.quantity}`}</p>
            </div>
            <div className={styles.optionsBox}>
              <div className={styles.priceBox}>
                <span>{'$' + product.product.details.price.toLocaleString()}</span>
              </div>
            </div>
          </BaseGrid>
          </div>
        </BaseGrid>
      </ContentBox>
    </Container>
  );
};

export default ProductCheckoutCard;