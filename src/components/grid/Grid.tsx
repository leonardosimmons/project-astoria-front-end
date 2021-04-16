
import React from 'react';
import { Grid } from '../../utils/types';

import baseStyles from './Grid.module.scss';


const BaseGrid: React.FunctionComponent<Grid> = (
  {
    even,
    oneXtwo,
    twoXone,
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
      <div className={`${ baseStyles.oneXtwoCol } ${ grid } relative`}>          
        <div className={`${ styles ? styles.block ? styles.block : styles.blockOne : '' } relative`}>{ blockOne }</div>
        <div>
          <div className={`${ styles ? styles.block ? styles.block : styles.blockTwo : '' } relative`}>{ blockTwo }</div>
          <div className={`${ styles ? styles.block ? styles.block : styles.blockThree : '' } relative`}>{ blockThree }</div>
        </div>
      </div>
      :
      twoXone ?
      <div className={`${ baseStyles.twoXoneCol } ${ grid } relative`}>          
        <div className={ baseStyles.twoXoneColAlt }>
          <div className={`${ styles ? styles.block ? styles.block : styles.blockOne : '' } relative bg-red-900`}>{ blockOne }</div>
          <div className={`${ styles ? styles.block ? styles.block : styles.blockTwo : '' } relative bg-blue-900`}>{ blockTwo }</div>
        </div>
        <div className={`${ styles ? styles.block ? styles.block : styles.blockThree : '' } relative bg-green-900`}>{ blockThree }</div>
      </div>
      :
      even ?
      <div className={`${ baseStyles.evenCol } ${ grid } relative`}>          
        { children }
      </div>
      : 
      null
    }
    </React.Fragment>
  )
};

export default BaseGrid;
