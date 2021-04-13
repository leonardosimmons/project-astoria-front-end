
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
  priority?: boolean;
};


const NewInPromo: React.FunctionComponent<Props> = (
  { 
    promoCards,
    priority,
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
            promoCards.map((card: PromoCardType, index: number ) => (
              <div className={ styles.promoCard } key={ index }>
                <PromoCard priority={ priority } config={ card } />
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
