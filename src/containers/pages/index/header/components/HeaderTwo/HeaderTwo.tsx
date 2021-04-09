
import React from 'react';

import styles from './Header.module.scss';
import Heading from '../../../../../../components/heading';
import Container from '../../../../../../components/container';
import Video from '../../../../../../components/video';


type Props = {

};

const HeaderTwo: React.FunctionComponent<Props> = (): JSX.Element => {

  return (
    <div id={'idnex-main-header-two'} className={ styles.wrapper }>
      <Container main styles={ styles }>
        <Video src={'/videos/general/GolfModels01.mp4'}/>
        <Heading
          main 
          heading={'SPRING 2021'}
          btnText={'WHAT\'S NEW'}
          btnLink={'/under-construction'}
          styles={ styles }
        />
      </Container>      
    </div>
  )
};

export default HeaderTwo;
