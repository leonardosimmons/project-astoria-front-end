
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Header, MainProductPageData, Product, ProductCard } from '../utils/types';
import { page } from '../utils/keys';

import styles from '../containers/pages/new/WhatsNew.module.scss';
import headerStyles from '../containers/pages/new/header/Header.module.scss';

import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';
import { useWatchUserSignIn } from '../helpers/hooks/useWatchUserSignIn';

import Layout from '../containers/layout';
import Container from '../components/container';
import NewInPromo from '../containers/pages/new/sections/new-in';
import MainHeader from '../containers/pages/new/header';
import PromoBanner from '../components/promo/banner';


const {
  WHATS_NEW_PAGE_DATA_API,
  STATIC_PRODUCT_API,
  NEW_PRODUCTS
} = process.env;


export const getServerSideProps: GetServerSideProps = async () => {
  const data: MainProductPageData | undefined = await axios.all([
    axios.get(WHATS_NEW_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(STATIC_PRODUCT_API as string + NEW_PRODUCTS as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((page: AxiosResponse<any>, products: AxiosResponse<any>) => {
    if(page.status === 200 && products.status === 200)
    {
      const cards: Array<ProductCard> = products.data.payload.map((p: Product, index: number): ProductCard => ({
        img: {
          src: p.preview.image.src,
          alt: p.preview.image.alt,
          width: 480,
          height: 400
        },
        text: p.details.name.toUpperCase(),
        btn: {
          text: index === 0 ? 'SHOP WOMEN' : 'SHOP MEN',
          link: p.preview.link,
          classes: 'btn-activeFocus'
        }
      }));

      const dataToken: MainProductPageData = {
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


function WhatsNewPage({ data }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  // Watches users scroll position/ controlls navbar fade
  useNavScrollConfig();

  // Checks for existsing session/ guest login
  useWatchUserSignIn();

  return (
    <Layout
      parent={ page.WHATS_NEW }
      title={'Astoria | What\'s New'}
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
