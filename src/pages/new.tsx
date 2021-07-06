
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { page } from '../utils/keys';
import { Header, MainProductPageData, Product, ProductCard } from '../utils/types';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';

import styles from '../containers/pages/new/WhatsNew.module.scss';
import headerStyles from '../containers/pages/new/header/Header.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import NewInPromo from '../containers/pages/new/sections/new-in';
import MainHeader from '../containers/pages/new/header';
import PromoBanner from '../components/promo/banner';
import { rand } from '../helpers/functions/functions';
import { useWatchUserSignIn } from '../helpers/hooks/useWatchUserSignIn';


const {
  NAVBAR_DESKTOP_API,
  NAVBAR_MOBILE_API,
  WHATS_NEW_PAGE_DATA_API,
  STATIC_PRODUCT_API,
  NEW_PRODUCTS
} = process.env;


export const getStaticProps: GetStaticProps = async () => {
  const data: MainProductPageData | undefined = await axios.all([
    axios.get(NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(WHATS_NEW_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(STATIC_PRODUCT_API as string + NEW_PRODUCTS as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop: AxiosResponse<any>, mobile: AxiosResponse<any>, page: AxiosResponse<any>, products: AxiosResponse<any>) => {
    if(desktop.status === 200 && mobile.status === 200 && page.status === 200 && products.status === 200)
    {
      const cards: Array<ProductCard> = products.data.payload.map((p: Product): ProductCard => ({
        img: {
          src: p.preview.image.src,
          alt: p.preview.image.alt,
          width: 480,
          height: 400
        },
        text: p.details.name.toUpperCase(),
        btn: {
          text: 'DISCOVER MORE',
          link: p.preview.link,
          classes: 'btn-activeFocus'
        }
      }));

      const dataToken: MainProductPageData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data
        },
        page: page.data,
        card: cards
      };

      return dataToken;
    }
  }))
  .catch(err => {
    throw new Error(`Error: ${ err.message }`); 
  })

  return {
    props: {
      data: data as MainProductPageData
    }
  };
};


function WhatsNewPage({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  // Watches users scroll position/ controlls navbar fade
  useNavScrollConfig();

  // Checks for existsing session/ guest login
  useWatchUserSignIn();

  return (
    <Layout
      parent={ page.WHATS_NEW }
      title={'Astoria | What\'s New'}
      desktop={ data.nav.desktop }
      mobile={ data.nav.mobile }
      classes={'relative'}
      styles={ styles }
      header={
        <MainHeader
          config={ data.page.header }
          styles={ headerStyles }/>
      }>
      <Container main parent={ page.WHATS_NEW } classes={'relative'}>
        <NewInPromo priority={true} cards={ data.card }/>
        {
          data.page.promoBanner.map((banner: Header, index: number) => (
            <div className={`relative ${styles.banner}`} key={ index }>
              <PromoBanner config={ banner } />
            </div>
          ))
        }
      </Container>
    </Layout>
  );
};

export default WhatsNewPage;
