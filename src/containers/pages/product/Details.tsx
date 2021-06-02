
import React from 'react';

import styles from './Details.module.scss';

import Container from '../../../components/container';
import ContentBox from '../../../components/box';
import Heading from '../../../components/heading';


type Props = {};


const tempList: string[] = ['Placeholder One', 'Placeholder Two', 'Placeholder Three', 'Placeholder Four', 'Placeholder Five', 'Placeholder Six', 'Placeholder Seven', 'Placeholder Eight', 'Placeholder Nine', ];

const Details: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Container wrapper styles={styles}>
      <Container styles={styles}>
        <ContentBox styles={styles}>
          <Heading classes={styles.heading}>
            <h2>
              <span>{'PRODUCT DETAILS'}</span>
              <span>{'Style ‎660285 XKBVB 4594'}</span>
            </h2>
            <p>
              {'Part of the House’s codes first presented during the ‘30s, the distinctive GG motif has been the inspiration for new explorations of expression for almost a century. In a new interpretation, the GG is presented as a jacquard on this cotton V-neck sweater.'}
            </p>
          </Heading>
          <ul>
            {
              tempList.map((text: string, index: number) => (
                <li key={index}>{text}</li>
              ))
            }
          </ul>
        </ContentBox>
      </Container>
    </Container>
  );
};

export default Details;