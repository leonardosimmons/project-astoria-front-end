
import React from 'react';
import styles from './Header.module.scss';
import Heading from '../../../../../../components/heading';
import Container from '../../../../../../components/container/Container';



type Props = {

};

const HeaderThree: React.FunctionComponent<Props> = ():JSX.Element => {
  return (
    <div id={'index-main-header-three'} className={ styles.wrapper }>
      <Container main styles={ styles }>
        <Heading
          main
          heading={
            <React.Fragment>
              <span>Project</span>
              <span>ASTORIA</span>
            </React.Fragment>
          }
          btnText={'FIND OUT MORE'}
          btnLink={'/under-construction'}
          styles={ styles }
        />
      </Container>      
    </div>
  )
};

export default HeaderThree;
