
import styles from './OrderPreview.module.scss';

import ContentBox from '../../../../components/box';
import Container from '../../../../components/container';
import TextBox from '../../../../components/text';
import ProductOrderCard from '../../../../components/product/order';
import { ProductCartToken } from '../../../../utils/types/types';
import { useAppSelector } from '../../../../helpers/hooks/redux';

type Props = {
  
};

const tempAmountInCart: number = 0;

const OrderPreview: React.FunctionComponent<Props> = (): JSX.Element => {
  const context = useAppSelector((state) => state.cart);

  return (
    <Container wrapper styles={ styles } classes={'relative center-col'}>
      <ContentBox styles={ styles } classes={'relative center-col-start'}>
        <TextBox mainHeading={'YOUR SELECTIONS'} mainHeadingClasses={ styles.desktopHeading }/>
        <TextBox mainHeading={`Shopping Bag (${ tempAmountInCart })`} mainHeadingClasses={ styles.mobileHeading }/>
        <Container styles={ styles } classes={'relative'}>
          {
           context.items.length === 0 ? 
            <p>{'No items currently in cart'}</p>
            :
            <>
            { context.items.map((prod: ProductCartToken) => (
                <ProductOrderCard token={prod} />
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
