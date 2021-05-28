
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { page } from '../utils/keys';
import { MainProductPageData } from '../utils/types';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';

import styles from '../containers/pages/handbags/Handbags.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import MainHeader from '../containers/pages/handbags/header';
import ProductGrid from '../components/grid';
import PromoBanner from '../components/promo/banner';


export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.HANDBAG_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } })
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
  .catch(err => { throw new Error(`Error: ${ err.message }`)});

  return {
    props: {
      config: data as MainProductPageData 
    }
  };
};


function Handbags({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  /* -----------------  USER SCROLL POSITION  ----------------- */
  useNavScrollConfig();

  return (
    <Layout
      parent={ page.HANDBAGS }
      title={'ASTORIA | Handbags'}
      desktop={ config.nav.desktop }
      mobile={ config.nav.mobile }
      classes={'relative'}
      styles={ styles }
      header={
        <MainHeader config={ config.page.header } />
      }
    >
      <Container main styles={ styles } classes={`relative`}>
        <section id={'promo-grid'}>
          <ProductGrid even grid={ styles.even }>
            <div className={ styles.block }/>
            <div className={ styles.block }/>
          </ProductGrid>
          <ProductGrid even grid={ styles.even }>
            <div className={ styles.block }/>
            <div className={ styles.block }/>
          </ProductGrid>
        </section>
        <section id={'promo-banner'} className={'relative'}>
          <PromoBanner 
            config={ config.page.promoBanner }
            styles={ styles.wrapper }/>
        </section>
        <section id={'promo-grid-2'}>          
          <ProductGrid 
            oneXtwo
            grid={ styles.oneXtwo }
            styles={ styles }/>
          <ProductGrid even grid={ styles.even }>
            <div className={ styles.block }/>
            <div className={ styles.block }/>
          </ProductGrid>
        </section>
      </Container>
    </Layout>
  );
};

export default Handbags;
