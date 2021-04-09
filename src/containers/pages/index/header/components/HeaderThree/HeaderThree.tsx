
import React from 'react';
import styles from './Header.module.scss';
import Heading from '../../../../../../components/heading';

type Props = {

};

const HeaderThree: React.FunctionComponent<Props> = ():JSX.Element => {
  return (
    <Heading
      main 
      id={'index-main-header-three'}
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
  )
};

export default HeaderThree;
