
import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { AppActions } from '../redux-store/action-types';
import { AppState } from '../redux-store/reducers';
import { IndexPageData } from '../utils/types';
import { page } from '../utils/keys';

import styles from '../containers/pages/index/Index.module.scss';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';

import { firstLoad, toggleIntroModal } from '../containers/pages/index/state/actions';

import Layout from '../containers/layout';
import Container from '../components/container';
import IntroModal from '../containers/pages/index/intro';
import IndexHeader from '../containers/pages/index/header';
import SectionOne from '../containers/pages/index/sections/one';
import SectionTwo from '../containers/pages/index/sections/two';
import SectionThree from '../containers/pages/index/sections/three';
import SectionFour from '../containers/pages/index/sections/four';
import AppointmentSection from '../containers/pages/index/sections/appointment';


export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.INDEX_HEADER_DATA_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.INDEX_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } }),
  ])
  .then(axios.spread((desktop, mobile, header, data) => { 
    if(desktop.status === 200 && mobile.status === 200 && header.status === 200 && data.status === 200)
    {
      const dataToken: IndexPageData = {
          nav: {
            desktop: desktop.data,
            mobile: mobile.data,
          },
          header: header.data,
          section: data.data
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


function Index({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  /* ----------------  BASE CONTROLLERS  ---------------- */
  const dispatch: React.Dispatch<AppActions> = useDispatch();
  const context = useSelector((state: AppState) => state.indexPage);


  /* --------------  USER SCROLL POSITION  -------------- */
  useNavScrollConfig();


  /* --------------------  HANDLERS  --------------------- */
  const introModalToggle = React.useCallback((): void => {
    dispatch(firstLoad());
    dispatch(toggleIntroModal());
  }, []);


  /* ---------------------  RENDER  --------------------- */
  return (
    <Layout 
      parent={ page.HOME } 
      title={`Astoria | Home`}
      classes={`relative`}
      styles={ styles }
      desktop={ config.nav.desktop.data }
      mobile={ config.nav.mobile.data }
      header={
        <React.Fragment>
          { context.introModal && <IntroModal btnClickHandler={ introModalToggle }/> }
          <IndexHeader headerConfig={ config.header.data.headers } classes={ context.introModal ? 'none' : '' }/>
        </React.Fragment>
      }
    >
      <Container main parent={ page.HOME } classes={`relative ${ context.introModal ? 'none' : '' }`}>
        <SectionOne config={ config.section.one }/>
        <SectionTwo config={ config.section.two }/>
        <SectionThree config={ config.section.three }/>
        <SectionFour config={ config.section.four }/>
        <AppointmentSection config={ config.section.appt } />
      </Container>
    </Layout>
  );
};

export default Index;
