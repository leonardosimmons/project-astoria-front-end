
import React from 'react';
import { Header, IndexHeaderData } from '../../../../utils/types/types';

import headerOneStyles from './components/HeaderOne/Header.module.scss';
import headerTwoStyles from './components/HeaderTwo/Header.module.scss';
import headerThreeStyles from './components/HeaderThree/Header.module.scss';

import Carousel from '../../../../features/carousel';
import HeaderBox from '../../../../components/header';

type Props = {
  classes: string;
  headerConfig: IndexHeaderData;
  autoplayLength?: number;
  arrows?: boolean;
  dots?: boolean;
};

const styles = [
  { ...headerOneStyles },
  { ...headerTwoStyles },
  { ...headerThreeStyles }
];

const IndexHeader: React.FunctionComponent<Props> = (
  { classes, 
    headerConfig, 
    arrows = true , 
    dots = true, 
    autoplayLength = 11.5 
  }
): JSX.Element => {
  return (
    <Carousel
      classes={ classes }
      arrows={ arrows }
      dots={ dots }
      autoPlay={ autoplayLength }
    >
    {
      headerConfig.map((header: Header, index: number) => (
        <HeaderBox 
          key={ index }
          type={'main'}
          config={ header }
          styles={ styles[ index ] }
        />
      ))
    }
  </Carousel>
  );
};

export default IndexHeader;
