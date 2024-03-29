
import React from 'react';
import { Heading } from '../../../../../utils/types';

import styles from './SectionTwo.module.scss';

import Section from '../../../../../components/section';
import Container from '../../../../../components/container';
import HeadingBox from '../../../../../components/heading';
import Tag from '../../../../../components/product/tag';

type Props = {
  config: Heading;
};


const SectionTwo: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <Section styles={ styles }>
      <Container styles={ styles } />
      <HeadingBox
        heading={
          <React.Fragment>
            <span>{ config.subHeadOne }</span>
            <span>{ config.headingOne }</span>
          </React.Fragment>
        }
        btn={ config.btn }
        styles={ styles }/>
    </Section>
  );
};

export default SectionTwo;
