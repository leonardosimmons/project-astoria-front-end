
import React from 'react';

import styles from './Fallback.module.scss';

import Container from '../../../components/container';
import LoadSpinner from '../../../components/loader/spinner';

const FallbackPage: React.FunctionComponent = (): JSX.Element => {
  return (
    <Container wrapper styles={styles}>
      <LoadSpinner />
      <p>{'PAGE DOES NOT EXIST'}</p>
    </Container>
  );
};


export default FallbackPage;
