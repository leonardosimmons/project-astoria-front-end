
import React from 'react';

import styles from './Details.module.scss';

import Container from '../../../components/container';
import ContentBox from '../../../components/box';
import BaseHeading from '../../../components/heading';


type Props = {
  style: string;
  desc: string;
  details: Array<string>;
};


const Details: React.FunctionComponent<Props> = ({ style, desc, details }): JSX.Element => {
  return (
    <Container wrapper styles={styles}>
      <Container styles={styles}>
        <ContentBox styles={styles}>
          <BaseHeading classes={styles.heading}>
            <h2>
              <span>{'PRODUCT DETAILS'}</span>
              <span>{`Style: ${style}`}</span>
            </h2>
            <p>{desc}</p>
          </BaseHeading>
          <ul>
          {
            details.map((detail: string, index: number) => (
              <li key={index}>{detail}</li>
            ))
          }
          </ul>
        </ContentBox>
      </Container>
    </Container>
  );
};

export default Details;
