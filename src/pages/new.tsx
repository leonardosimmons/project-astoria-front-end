
import React from 'react';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { WhatsNewPageData } from '../utils/types';
import { page } from '../utils/keys';

import styles from '../styles/sass/pages/WhatsNew.module.scss';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';

import Layout from '../containers/layout';
import Container from '../components/container';


function WhatsNewPage({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  /* -----------------  USER SCROLL POSITION  ----------------- */
  useNavScrollConfig();

  return (
    <Layout
      parent={ page.WHATS_NEW }
      title={'Astoria | What\'s New'}
      desktop={ config.nav.desktop }
      mobile={ config.nav.mobile }
      classes={'relative'}
      styles={ styles }>
      <Container main parent={ page.WHATS_NEW } classes={'relative'}>
        { <h1>Apples and Oranges</h1> }
      </Container>
    </Layout>
  );
};

export default WhatsNewPage;


export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
  ])
  .then(axios.spread((desktop, mobile) => {
    if(desktop.status === 200 && mobile.status === 200)
    {
      const dataToken: WhatsNewPageData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data
        }
      };

      return dataToken;
    }
  }))
  .catch(err => {
    throw new Error(`Error: ${ err.message }`); 
  })

  return {
    props: {
      config: data as WhatsNewPageData
    }
  };
};
