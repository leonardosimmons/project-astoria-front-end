
import React from 'react';

import styles from './Header.module.scss';

import Video from '../../../../../components/video';
import Text from '../../../../../components/text/Text';
import ContentBox from '../../../../../components/box/ContentBox';
import Container from '../../../../../components/container/Container';
import Button from '../../../../../components/button/Button';

type Props = {

};

const HeaderTwo: React.FunctionComponent<Props> = (): JSX.Element => {

  return (
    <div id="index-main-header-two" className={ styles.wrapper }>
      <Container main styles={ styles }>
        <Video src={'/videos/general/GolfModels01.mp4'} />
        <ContentBox styles={ styles }>
          <Text
            styles={ styles } 
            mainHeading={'SPRING 2021'}/>
          <Button
            styles={ styles }
            classes={`btn-hoverConfig btn-activeFocus relative`}  
            text={'WHAT\'S NEW'}
            link={'/under-construction'}/>
        </ContentBox>
      </Container>
    </div>
  )
};

export default HeaderTwo;
