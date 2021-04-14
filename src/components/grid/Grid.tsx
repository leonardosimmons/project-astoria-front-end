
import React from 'react';
import { Grid } from '../../utils/types';

import baseStyles from './Grid.module.scss';


const BaseGrid: React.FunctionComponent<Grid> = (
  {
    even,
    oneXtwo,
    blockOne,
    blockTwo,
    blockThree,
    styles,
    grid,
    children
  }
): JSX.Element => {
  return (
    <React.Fragment>
    {
      oneXtwo ? 
      <div className={`${ baseStyles.oneXtwoCol }  ${ grid }`}>          
      <div className={`${ styles ? styles.block ? styles.block : styles.blockOne : '' }`}>{ blockOne }</div>
        <div>
          <div className={`${ styles ? styles.block ? styles.block : styles.blockTwo : '' }`}>{ blockTwo }</div>
          <div className={`${ styles ? styles.block ? styles.block : styles.blockThree : '' }`}>{ blockThree }</div>
        </div>
      </div>
      :
      even ?
      <div className={`${ baseStyles.evenCol } ${ grid }`}>          
        { children }
      </div>
      : 
      null
    }
    </React.Fragment>
  )
};

export default BaseGrid;
