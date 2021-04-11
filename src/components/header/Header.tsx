
import React from 'react';

import Heading from '../../components/heading';
import Container from '../../components/container';
import Video from '../../components/video';
import { Header } from '../../utils/types';


type Props = {
  config: Header;
  styles: any;
  type?: 'main' | 'sub';
};

const BaseHeader: React.FunctionComponent<Props> = ({ config, styles, type }): JSX.Element => {
  return (
    <div id={ config.id } className={ styles.wrapper } style={{ backgroundImage: `${ config.bgImage ? 'url(' + config.bgImage + ')' : '' }`}}>
      <Container main styles={ styles } video={ config.video }>
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
        />
      </Container>
    </div>
  )
};

export default BaseHeader;
