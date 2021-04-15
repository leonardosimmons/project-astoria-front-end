
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { page } from '../utils/keys';
import { HandbagPageData } from '../utils/types';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';

import baseStyles from '../containers/pages/handbags/Handbags.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import MainHeader from '../containers/pages/handbags/header';
import ContentBox from '../components/box';
import ProductGrid from '../components/grid';
import PromoBanner from '../components/promo/banner';


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
      styles={ baseStyles }
    >
      <Container main styles={ baseStyles } classes={`relative`}>
        <section id={'promo-grid'}></section>
        <section id={'promo-banner'}></section>
        <section id={'promo-grid-2'}></section>
        <section id={'promo-banner-2'}></section>
      </Container>
    </Layout>
  );
};

export default Handbags;


export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.HANDBAG_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop, mobile, data) => {
    if(desktop.status === 200 && mobile.status === 200 && data.status === 200)
    {
      const dataToken: HandbagPageData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data
        },
        data: data.data
      };
      
      return dataToken;
    }
  }))
  .catch(err => { throw new Error(`Error: ${ err.message }`)});

  return {
    props: {
      config: data as HandbagPageData
    }
  };
};
