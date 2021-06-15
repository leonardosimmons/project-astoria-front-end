
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { page } from '../utils/keys';
import { MainProductPageData } from '../utils/types';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';

import styles from '../containers/pages/gifts/Gifts.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import MainHeader from '../containers/pages/handbags/header';
import ProductGrid from '../components/grid';
import PromoBanner from '../components/promo/banner';

const {
  NAVBAR_DESKTOP_API,
  NAVBAR_MOBILE_API,
  GIFTS_PAGE_DATA_API
} = process.env;


export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.all([
    axios.get(NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(GIFTS_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } }),
  ])
  .then(axios.spread((desktop, mobile, page) => {
    if(desktop.status === 200 && mobile.status === 200 && page.status === 200) {
      const dataToken: MainProductPageData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data
        },
        page: page.data
      }

      return dataToken;
    }
  }))
  .catch(err => { throw new Error(`Error: ${ err.message }`)});

  return {
    props: {
      config: data as MainProductPageData
    }
  }
};


function giftsPage({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  /* -----------------  USER SCROLL POSITION  ----------------- */
  useNavScrollConfig();

  return (
    <Layout
      parent={ page.GIFTS }
      title={'ASTORIA | Gifts'}
      classes={'relative'}
      desktop={ config.nav.desktop }
      mobile={ config.nav.mobile }
      styles={ styles }
      header={
        <MainHeader config={ config.page.header } />
      }
    >
      <Container main styles={ styles } classes={'relative'}>
        <section id={'promo-grid'}>
          <ProductGrid even grid={ styles.even }>
            <div className={ styles.block}/>
            <div className={ styles.block}/>
          </ProductGrid>
          <ProductGrid even grid={ styles.even }>
            <div className={ styles.block}/>
            <div className={ styles.block}/>
          </ProductGrid>
        </section>
        <section id={'promo-banner'}>
          <PromoBanner 
            config={ config.page.promoBanner }
            styles={ styles.wrapper }/>
        </section>
        <section id={'promo-grid-2'}>
          <ProductGrid even grid={ styles.even }>
            <div className={ styles.block}/>
            <div className={ styles.block}/>
          </ProductGrid>
          <ProductGrid even grid={ styles.even }>
            <div className={ styles.block}/>
            <div className={ styles.block}/>
            <div className={ styles.block}/>
          </ProductGrid>
        </section>
      </Container>
    </Layout>
  )
};

export default giftsPage;
