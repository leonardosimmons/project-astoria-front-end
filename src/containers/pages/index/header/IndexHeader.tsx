
import React from 'react';

import headerOneStyles from './components/HeaderOne/Header.module.scss';
import headerTwoStyles from './components/HeaderTwo/Header.module.scss';
import headerThreeStyles from './components/HeaderThree/Header.module.scss';

import Carousel from '../../../../features/carousel';
import Header from '../../../../components/header';
import { IndexHeaderData } from '../../../../utils/types/types';

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
  { ...headerThreeStyles}
];

const IndexHeader: React.FunctionComponent<Props> = ({ classes, headerConfig, arrows = true , dots = true, autoplayLength = 11.5 }): JSX.Element => {
  return (
    <Carousel
      classes={ classes }
      arrows={ arrows }
      dots={ dots }
      autoPlay={ autoplayLength }
    >
    {
      headerConfig.map((header, index) => (
        <Header 
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
