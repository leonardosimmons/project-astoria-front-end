
import React from 'react';
import { key } from '../../../../utils/keys/keys';
import { Arrow } from '../../../../utils/types/types';

import styles from './Arrow.module.scss';

type Props = {
  direction: string;
  clicked: () => void;
  index?: number;
  bgColor?: string;
};

const initArrow: Arrow = {
  container: {
    right: '',
    left: ''
  },
  arrow: {
    transform: ''
  }
};


const CarouselArrow: React.FunctionComponent<Props> = ({ direction, clicked, bgColor, index }): JSX.Element => {
  const [ arrow, setArrow ] = React.useState<Arrow>(initArrow);

    
  /* --------------------  STYLES  -------------------- */
  React.useEffect(() => 
  {
    const arrowStyles = {
      container: {
        backgroundColor: `${ bgColor || 'transparent' }`,
        right: `${ direction === key.RIGHT ? '25px' : '' }`,
        left: `${ direction === key.LEFT ? '25px' : '' }`
      },
      arrow: {
        transform: `translateX(${direction === key.LEFT ? '-2' : '2'}px)`
      }
    };
    setArrow(arrowStyles);

    return () => { setArrow(initArrow); }
  }, []);


  /* --------------------  RENDER  -------------------- */
  return (
    <div className={ styles.arrow } 
      style={ arrow.container } 
      onClick={ clicked }>
      {
        direction === key.RIGHT ? 
        <span className={`${ styles.right} noselect`} style={ arrow.arrow }>&#62;</span>
        :
        <span className={`${ styles.left } noselect`} style={ arrow.arrow }>&#60;</span>
      }
    </div>
  );
};

export default CarouselArrow;