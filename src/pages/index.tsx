
import React from 'react';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useScrollPosition } from '../helpers/hooks/useScrollPosition';
import { IndexPageData } from '../utils/types';
import { css, page } from '../utils/keys';
 
import styles from '../styles/sass/pages/index/Index.module.scss';

import Layout from '../containers/layout';
import Intro from '../components/intro';
import Container from '../components/container';
import IndexHeader from '../containers/index/header';
import SectionOne from '../containers/index/sections/one';
import SectionTwo from '../containers/index/sections/two';
import SectionThree from '../containers/index/sections/three';
import SectionFour from '../containers/index/sections/four';
import AppointmentSection from '../containers/index/sections/Appointment';

function Index({ config }: InferGetStaticPropsType<typeof getStaticProps>) {
  /* -----------------  SCROLL POSITION  ----------------- */
  useScrollPosition(css.TOP_PAGE_PIXEL_ANCHOR, css.DESKTOP_NAVBAR, -1, styles.navNotAtTop ); // controls navbar fade on scroll
  useScrollPosition(css.TOP_PAGE_PIXEL_ANCHOR, css.DESKTOP_LOGO, -1, styles.hide); // hides nav logo on scroll


  /* -------------------  INTRO BOX  -------------------- */
  const [ introModal, setIntroModal ] = React.useState<boolean>(true);
  const firstLoadRef = React.useRef<boolean>(false); //! add to redux [ initLoad ]


  /* --------------------  HANDLERS  --------------------- */
  const introBtnClickHandler = React.useCallback((): void => {
    firstLoadRef.current = true;
    setIntroModal(false);
  }, []);


  /* ---------------------  RENDER  --------------------- */
  return (
    <Layout 
      parent={ page.HOME } 
      title={`Astoria | Home`}
      classes={`relative`}
      styles={ styles }
      desktop={ config.nav.desktop }
      mobile={ config.nav.mobile }
      header={
        <React.Fragment>
          { introModal && <Intro btnClickHandler={ introBtnClickHandler }/> }
          { !introModal && <IndexHeader /> }
        </React.Fragment>
      }
    >
    {
      !introModal && 
      <Container main parent={ page.HOME } classes={'relative'}>
        <SectionOne config={ config.section.one }/>
        <SectionTwo config={ config.section.two }/>
        <SectionThree config={ config.section.three }/>
        <SectionFour config={ config.section.four }/>
        <AppointmentSection config={ config.section.appt } />
      </Container>
    }
    </Layout>
  );
};

export default Index;


/* -----------------  STATIC GENERATION  ----------------- */
export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.INDEX_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } }),
  ])
  .then(axios.spread((desktop, mobile, data) => { 
    if(desktop.status === 200 && mobile.status === 200 && data.status === 200)
    {
      const dataToken: IndexPageData = {
          nav: {
            desktop: desktop.data,
            mobile: mobile.data,
          },
          section: data.data
      };

      return dataToken;
    }
  }))
  .catch(err => { 
    throw new Error(`Error: ${ err.message }`) 
  });

  return {
    props: {
      config: data
    },
    revalidate: 86400 // once a day
  };
};
