
import React from 'react';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { IndexPageData } from '../utils/types';
import { page } from '../utils/keys';

import styles from '../containers/pages/index/Index.module.scss';

import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';;

import Layout from '../containers/layout';
import Container from '../components/container';
import IntroModal from '../containers/pages/index/intro';
import IndexHeader from '../containers/pages/index/header';
import SectionOne from '../containers/pages/index/sections/one';
import SectionTwo from '../containers/pages/index/sections/two';
import SectionThree from '../containers/pages/index/sections/three';
import SectionFour from '../containers/pages/index/sections/four';
import AppointmentSection from '../containers/pages/index/sections/appointment';
import { useWatchUserSignIn } from '../helpers/hooks/useWatchUserSignIn';


const {
  NAVBAR_DESKTOP_API,
  NAVBAR_MOBILE_API,
  INDEX_HEADER_DATA_API,
  INDEX_PAGE_DATA_API,
  STATIC_PRODUCT_API, 
  FEATURED_PRODUCTS
} = process.env;


export const getServerSideProps: GetServerSideProps = async () => {
  const data: IndexPageData | undefined = await axios.all([
    axios.get(NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(INDEX_HEADER_DATA_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(INDEX_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(STATIC_PRODUCT_API as string + FEATURED_PRODUCTS as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop, mobile, header, info, featured) => { 
    if(desktop.status === 200 && mobile.status === 200 && header.status === 200 && info.status === 200 && featured.status === 200)
    {
      const dataToken: IndexPageData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data,
        },
        header: header.data,
        section: info.data,
        featured: featured.data.payload
      };

      return dataToken;
    }
  }))
  .catch(err => {
    throw new Error(err.message); 
  });

  return {
    props: {
      config: data as IndexPageData
    }
  };
};


function Index({ config }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  // Watches user scroll
  useNavScrollConfig();
  
  // Watches user/guest sign in status
  useWatchUserSignIn();

  return (
    <Layout 
      parent={page.HOME} 
      title={`Astoria | Home`}
      classes={`relative`}
      styles={styles}
      desktop={config.nav.desktop}
      mobile={config.nav.mobile}
      header={
        <React.Fragment>
          {/* context.introModal && <IntroModal btnClickHandler={ introModalToggle }/> NOTE: change classes check(below) to 'none' @ true*/}
          <IndexHeader headerConfig={ config.header } classes={''}/>
        </React.Fragment>
      }
    >
      <Container main parent={page.HOME} classes={`relative`}>
        <SectionOne config={config.featured[1]}/>
        <SectionTwo config={config.section.two}/>
        <SectionThree config={config.featured[0]}/>
        <SectionFour config={config.section.four}/>
        <AppointmentSection config={config.section.appt} />
      </Container>
    </Layout>
  );
};

export default Index;
