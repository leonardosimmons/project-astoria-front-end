
import React from 'react';

import styles from './styles/Header.module.scss';

import Video from '../../../../../components/video';
import Text from '../../../../../components/text/Text';
import ContentBox from '../../../../../components/box/ContentBox';
import Container from '../../../../../components/container/Container';
import Button from '../../../../../components/button/Button';

type Props = {

};

const HeaderOne: React.FunctionComponent<Props> = (): JSX.Element => {

  return (
    <div id="index-main-header-one" className={ styles.wrapper }>
      <Container main styles={ styles }>
        <Video src={'/videos/women/WomenWithGun01.mp4'} />
        <ContentBox styles={ styles }>
          <Text
            styles={ styles } 
            mainHeading={'EPILOGUE'}/>
          <Button
            styles={ styles }
            classes={`btn-hoverConfig btn-activeFocus relative`} 
            text={'SHOP NOW'}
            link={'/under-construction'}/>
        </ContentBox>
      </Container>
    </div>
  )
};

export default HeaderOne;
