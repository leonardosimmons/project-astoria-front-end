
import React from 'react';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useScrollPosition } from '../helpers/hooks/useScrollPosition';
import { css, page } from '../utils/keys';
 
import styles from '../styles/sass/pages/index/Index.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import Intro from '../components/intro';
import IndexHeader from '../containers/index/header';
import SectionOne from '../containers/index/sections/one';
import SectionTwo from '../containers/index/sections/two';
import SectionThree from '../containers/index/sections/three';


function Index({ navConfig, data }: InferGetStaticPropsType<typeof getStaticProps>) {
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
      desktop={ navConfig.desktop }
      mobile={ navConfig.mobile }
      header={
        <React.Fragment>
          { introModal && <Intro btnClickHandler={ introBtnClickHandler }/> }
          { !introModal && <IndexHeader /> }
        </React.Fragment>
      }
    >
      <Container main parent={ page.HOME } classes={'relative'}>
        <SectionOne config={ data.section.one } />
        <SectionTwo />
        <SectionThree />
      </Container>
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
      const dataToken = {
        desktop: desktop.data,
        mobile: mobile.data,
        data: data.data
      };

      return dataToken;
    }
  }))
  .catch(err => { throw new Error(`Error: ${ err.message }`) });

  return {
    props: {
      navConfig: {
        desktop: data?.desktop,
        mobile: data?.mobile,
        data: data?.data
      },
      data: data?.data
    },
    revalidate: 86400 // once a day
  };
};
