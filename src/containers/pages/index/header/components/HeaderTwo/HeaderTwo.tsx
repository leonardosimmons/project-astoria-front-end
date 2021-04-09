
import React from 'react';

import styles from './Header.module.scss';
import Heading from '../../../../../../components/heading';


type Props = {

};

const HeaderTwo: React.FunctionComponent<Props> = (): JSX.Element => {

  return (
    <Heading
      main 
      id={'index-main-header-two'}
      heading={'SPRING 2021'}
      btnText={'WHAT\'S NEW'}
      btnLink={'/under-construction'}
      videoURL={'/videos/general/GolfModels01.mp4'}
      styles={ styles }
    />
  )
};

export default HeaderTwo;
