
import React from 'react';
import Image from 'next/image';
import styles from './SectionOne.module.scss';

import Container from '../../../components/container';
import ContentBox from '../../../components/box';
import TextBox from '../../../components/text';
import Button from '../../../components/button';
import Tag from '../../../components/tag';


type Props = {
  
};

const SectionOne: React.FunctionComponent<Props> = (): JSX.Element => {
  /* --------------------  RENDER  -------------------- */ 
  return (
    <div className={`${ styles.wrapper} noselect`}>
      <Container main styles={ styles }>
        <ContentBox styles={ styles }>
          <Image 
            src={'/images/products/handbags/Handbag01.jpg'}
            alt={'handbag'}
            width={ 850 }
            height={ 850 }
          />
          <TextBox
            headingTwo={'EPILOGUE'} 
            subHeadOne={'Astoria OR 1958 Mediam Tote'}
            styles={ styles }/>
          <Button 
            text={'SHOP TOTES'}
            link={'/under-construction'}
            classes={'relative btn-hoverConfig btn-activeFocus'}
            styles={ styles }/>
        </ContentBox>
        <Tag />
      </Container>
    </div>
  )
};

export default SectionOne;
