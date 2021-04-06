
import React from 'react';
import styles from './Header.module.scss';

import Text from '../../../../../components/text';
import ContentBox from '../../../../../components/box/ContentBox'
import Container from '../../../../../components/container'
import Button from '../../../../../components/button';


type Props = {

};

const HeaderThree: React.FunctionComponent<Props> = ():JSX.Element => {
  return (
    <div id="index-main-header-three" className={ styles.wrapper }>
      <Container main styles={ styles }>
        <ContentBox styles={ styles }>
          <Text
            mainHeadingClasses={ styles.mainHeading } 
            mainHeading={
              <React.Fragment>
                <span>Project</span>
                <span>ASTORIA</span>
              </React.Fragment>
            }/>
          <Button
            link={'/under-construction'}
            styles={ styles }
            classes={`relative btn-activeFocus btn-hoverConfig`} 
            text={'FIND OUT MORE'}/>
        </ContentBox>
      </Container>
    </div>
  )
};

export default HeaderThree;