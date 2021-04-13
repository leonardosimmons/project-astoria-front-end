
import React from 'react';
import { PromoCard as PromoCardType } from '../../../../../utils/types';

import styles from './NewIn.module.scss';

import Section from '../../../../../components/section/Section';
import Container from '../../../../../components/container/Container';
import ContentBox from '../../../../../components/box/ContentBox';
import TextBox from '../../../../../components/text/Text';
import PromoCard from '../../../../../components/promo/card';


type Props = {
  promoCards: PromoCardType[];
  heading?: string;
};


const NewInPromo: React.FunctionComponent<Props> = (
  { 
    promoCards,
    heading, 
  }
): JSX.Element => {
  return (
    <Section styles={ styles }>
      <Container main styles={ styles }>
        <ContentBox styles={ styles }>
          <TextBox 
            headingOne={'New in'} 
            styles={ styles }
          />
          <Container styles={ styles } classes={'relative'}>
          {
            promoCards.map((card, index ) => (
              <div className={ styles.promoCard } key={ index }>
                <PromoCard config={ card } />
                <div className={ styles.promoCardSpacer } />
              </div>
            ))
          }
          </Container>
        </ContentBox>
      </Container>
    </Section>
  );
};

export default NewInPromo;
