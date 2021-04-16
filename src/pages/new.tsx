
import React from 'react';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { page } from '../utils/keys';
import { Header, MainProductPageData } from '../utils/types';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';

import styles from '../containers/pages/new/WhatsNew.module.scss';
import headerStyles from '../containers/pages/new/header/Header.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import NewInPromo from '../containers/pages/new/sections/new-in';
import MainHeader from '../containers/pages/new/header';
import PromoBanner from '../components/promo/banner';


function WhatsNewPage({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  /* ----------------------  TEMP DATA  ----------------------- */

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
        <MainHeader
          config={ config.page.header }
          styles={ headerStyles }/>
      }>
      <Container main parent={ page.WHATS_NEW } classes={'relative'}>
        <NewInPromo priority promoCards={ config.page.promoCard }/>
        {
          config.page.promoBanner.map((banner: Header, index: number) => (
            <div className={'relative'} key={ index }>
              <PromoBanner config={ banner } />
            </div>
          ))
        }
      </Container>
    </Layout>
  );
};

export default WhatsNewPage;


export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.WHATS_NEW_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop, mobile, page) => {
    if(desktop.status === 200 && mobile.status === 200 && page.status === 200)
    {
      const dataToken: MainProductPageData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data
        },
        page: page.data
      };

      return dataToken;
    }
  }))
  .catch(err => {
    throw new Error(`Error: ${ err.message }`); 
  })

  return {
    props: {
      config: data as MainProductPageData
    }
  };
};
