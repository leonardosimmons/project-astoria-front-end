
import React from 'react';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { page } from '../utils/keys';
import { MensPageData } from '../utils/types';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';

import styles from '../containers/pages/men/MensPage.module.scss';

import Layout from '../containers/layout/layout';
import Container from '../components/container/Container';
import MainHeader from '../containers/pages/men/header';


function MensPage({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  /* -----------------  USER SCROLL POSITION  ----------------- */
  useNavScrollConfig();


  return (
    <Layout
      parent={ page.MENS }
      title={'ASTORIA | Men\'s Fashion'}
      desktop={ config.nav.desktop }
      mobile={ config.nav.mobile }
      classes={'relative'}
      styles={ styles }
      header={
        <MainHeader config={ config.data.header } />
      }
    >
      <Container main parent={ page.MENS } classes={'relative'}>
        <p>Test Test Test</p>
      </Container>
    </Layout>
  );
};

export default MensPage;


export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.MENS_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop, mobile, data) => {
    if(desktop.status === 200 && mobile.status === 200) {
      const dataToken: MensPageData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data
        },
        data: data.data
      }

      return dataToken;
    }
  }))
  .catch(err => {
    throw new Error(`Error: ${ err.message }`)
  });

  return {
    props: {
      config: data as MensPageData
    }
  }
};
