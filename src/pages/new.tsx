
import React from 'react';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Header, WhatsNewPageData } from '../utils/types';
import { page } from '../utils/keys';

import styles from '../containers/pages/new/WhatsNew.module.scss';
import headerStyles from '../containers/pages/new/header/Header.module.scss';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';

import Layout from '../containers/layout';
import Container from '../components/container';
import HeaderBox from '../components/header';


function WhatsNewPage({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  /* ----------------------  TEMP DATA  ----------------------- */
  const tempHeaderData: Header = {
    spanOne: 'WHAT\'S NEW',
    spanTwo: 'A lineup of ready-to-wear',
    bgImage: '/images/other/ClothesOnRack01.jpg'
  };

  /* -----------------  USER SCROLL POSITION  ----------------- */
  useNavScrollConfig();

  return (
    <Layout
      parent={ page.WHATS_NEW }
      title={'Astoria | What\'s New'}
      desktop={ config.nav.desktop }
      mobile={ config.nav.mobile }
      classes={'relative'}
      styles={ styles }
      header={
        <HeaderBox
          type={'main'} 
          config={ tempHeaderData }
          styles={ headerStyles }
        />
      }>
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
