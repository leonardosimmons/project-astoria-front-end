
import React from 'react';
import styles from './Header.module.scss';
import Heading from '../../../../../../components/heading';
import Container from '../../../../../../components/container/Container';
import { Header } from '../../../../../../utils/types/types';


type Props = {
  config: Header;
};

const HeaderThree: React.FunctionComponent<Props> = ({ config }):JSX.Element => {
  return (
    <div id={ config.id } className={ styles.wrapper }>
      <Container main styles={ styles }>
        <Heading
          main
          heading={
            <React.Fragment>
              <span>{ config.textAbove }</span>
              <span>{ config.heading }</span>
            </React.Fragment>
          }
          btn={ config.btn }
          styles={ styles }
        />
      </Container>      
    </div>
  )
};

export default HeaderThree;
