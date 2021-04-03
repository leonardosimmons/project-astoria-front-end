
import React from 'react';
import { Dot } from '../../../../utils/types/types';

import styles from './Dots.module.scss';

type Props = {
  slides: any[];
  activeIndex: number;
};

const CarouselDot: React.FunctionComponent<Dot> = ({ active, index }): JSX.Element => {
  return (
    <span style={{
      background: `${ active ? index === 1 ? 'var(--primary-700)' : 'var(--grey-700)'  : 'white' }`
      }} 
    />
  );
};

const CarouselDots: React.FunctionComponent<Props> = ({ slides, activeIndex }): JSX.Element => {
  return(
    <div className={ styles.dots }>
      {
        slides.map((slide, index) => (
          <CarouselDot 
            key={ slide }
            index={ activeIndex }
            active={ activeIndex === index } 
          />
        ))
      }
    </div>
  );
};

export default CarouselDots;