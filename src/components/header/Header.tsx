
import React from 'react';

import baseStyles from './BaseHeader.module.scss';

import Heading from '../../components/heading';
import Container from '../../components/container';
import { Header } from '../../utils/types';


type Props = {
  config: Header;
  styles: any;
  type?: 'main' | 'sub';
};

const BaseHeader: React.FunctionComponent<Props> = ({ config, styles, type }): JSX.Element => {
  return (
    <div id={ config.id } className={`${ baseStyles.wrapper } ${ styles.wrapper && styles.wrapper }`} style={{ backgroundImage: `${ config.bgImage ? 'url(' + config.bgImage + ')' : '' }`}}>
      <Container main styles={ styles } video={ config.video && config.video } classes={ baseStyles.mainContainer }>
        <Heading
          main={ type === 'main' ? true : false  }
          sub={ type === 'sub' ? true : false }
          heading={ 
            config.spanOne ? 
              <React.Fragment>
                <span>{ config.spanOne }</span>
                <span>{ config.spanTwo }</span>
              </React.Fragment> 
            :
            config.textAbove ? 
              <React.Fragment>
                <span>{ config.textAbove }</span>
                <span>{ config.heading }</span>
              </React.Fragment>
            :
            config.textBelow ?
              <React.Fragment>
                <span>{ config.heading }</span>
                <span>{ config.textBelow }</span>
              </React.Fragment>
            :
            config.textAbove && config.textBelow ? 
              <React.Fragment>
                <span>{ config.textAbove }</span>
                <span>{ config.heading }</span>
                <span>{ config.textBelow }</span>
              </React.Fragment>
            :  
            config.heading
          }
          btn={ config.btn }
          styles={ styles }
          classes={ baseStyles.contentBox }
        />
      </Container>
    </div>
  )
};

export default BaseHeader;
