
import React from 'react';
import Image from 'next/image';
import Backdrop from '../backdrop';
import bgStyle from '../backdrop/Backdrop.module.scss';
import Modal from '../modal';
import Container from '../container';

import modalStyles from './Intro.module.scss';
import ContentBox from '../box/ContentBox';
import LoadSpinner from '../loader/spinner/LoadSpinner';


const Intro: React.FunctionComponent = (): JSX.Element => (
  <Container main styles={ modalStyles }>
    <ContentBox styles={ modalStyles }>
      <Image
        priority
        className={ modalStyles.logo } 
        src={'/images/MainHeadLogo.JPG'}
        width={ 900} 
        height={ 900 }
        quality={ 100 } 
      />
      <LoadSpinner />
    </ContentBox>
  </Container>
);

export default Intro;