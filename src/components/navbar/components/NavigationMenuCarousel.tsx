
import React from 'react';
import { cpnt } from '../../../utils/keys';

import Text from '../../text';
import Button from '../../button';
import Carousel from '../../../features/carousel';

type Props = {
  parent: string;
}

const NavigationMenuCarousel: React.FunctionComponent<Props> = ({ parent }): JSX.Element => {

  const testCreateAccountText = ['Save your favorite items', 'Browse a personailized list created just for you', 'View your recent orders, track shipping and manage returns'];

  return (
    <div className={`${ parent }__menu--carousel`}>
    <Carousel autoPlay={3}>
      {
        testCreateAccountText.map((text: string, index: number) => {
          const key = index + 1;
          return (
            <div className={`${ parent }__menu--carousel--text-box`} key={key}>
              <Text
                key={ key } 
                parent={`${ cpnt.MOBILE_NAVIGATION }__menu--carousel`}
                headingOne={ text }
              />
            </div>
          )
        })
      }
    </Carousel>
    <Button
      parent={`${ parent }__menu--carousel`}
      text={`CREATE MY ASTORIA ACCOUNT`}
      link={'/under-construction'}
    />
  </div>
  )
};

export default NavigationMenuCarousel;