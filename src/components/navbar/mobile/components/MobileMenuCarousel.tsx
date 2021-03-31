
import React from 'react';
import { cpnt } from '../../../../utils/keys/keys';

import Text from '../../../text/Text';
import Button from '../../../button/Button';
import Carousel from '../../../../features/carousel/Carousel';
import { BaseOptions } from '../../../../utils/types/types';

type Props = {
  parent: string;
  scrollText: string[];
} & BaseOptions;

const NavigationMenuCarousel: React.FunctionComponent<Props> = ({ parent, scrollText, styles }): JSX.Element => {
  return (
    <div className={ styles && styles.carousel }>
    <Carousel 
      styles={ styles && styles }
      autoPlay={ 3 }>
      {
        scrollText.map((text: string, index: number) => {
          const key = index + 1;
          return (
            <div className={ styles && styles.textBox } key={ key }>
              <Text
                key={ key } 
                styles={ styles && styles }
                headingOne={ text }
              />
            </div>
          )
        })
      }
    </Carousel>
    <Button
      text={`CREATE MY ASTORIA ACCOUNT`}
      link={'/under-construction'}
      styles={ styles && styles }
    />
  </div>
  )
};

export default NavigationMenuCarousel;