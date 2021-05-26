
import styles from './OrderPreview.module.scss';

import ContentBox from '../../../../components/box';
import Container from '../../../../components/container';
import TextBox from '../../../../components/text';

type Props = {

};


const OrderPreview: React.FunctionComponent<Props> = ({}): JSX.Element => {
  const tempAmountInCart: number = 0;
  const tempCartItems = [];

  return (
    <Container wrapper styles={ styles } classes={'relative center-col'}>
      <ContentBox styles={ styles } classes={'relative center-col-start'}>
        <TextBox mainHeading={'YOUR SELECTIONS'} mainHeadingClasses={ styles.desktopHeading }/>
        <TextBox mainHeading={`Shopping Bag (${ tempAmountInCart })`} mainHeadingClasses={ styles.mobileHeading }/>
        <Container styles={ styles } classes={'relative'}>
          {
            tempCartItems.length === 0 ? 
            <p>{'No items currently in cart'}</p>
            : 
            ''
          }
        </Container>
      </ContentBox>
    </Container>
  );
};

export default OrderPreview;
