
import React from 'react';
import Image from 'next/image';

import styles from './Intro.module.scss';

import Button from '../../../../components/button';
import Container from '../../../../components/container';
import ContentBox from '../../../../components/box/ContentBox';


type Props = {
  btnClickHandler: () => void;
};

const Intro: React.FunctionComponent<Props> = ({ btnClickHandler }): JSX.Element => (
  <Container main styles={ styles }>
    <ContentBox styles={ styles }>
      <Image
        priority
        className={ styles.logo } 
        src={'/images/MainHeadLogo.JPG'}
        width={ 2160 } 
        height={ 2160 }
        quality={ 100 } 
      />
      <Button
        styles={ styles }
        classes={'btn-activeFocus relative'} 
        text={'ENTER'}
        clicked={ btnClickHandler }/>
    </ContentBox>
  </Container>
);

export default Intro;