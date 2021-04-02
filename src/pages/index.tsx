
import React from 'react';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useScrollPosition } from '../helpers/hooks/useScrollPosition';
import { css, page } from '../utils/keys';
 
import styles from '../styles/sass/pages/index/Index.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import IndexHeader from '../containers/header/index';
import Intro from '../components/intro/Intro';


function Index({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
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
      desktopData={ data.desktop }
      mobileData={ data.mobile }
      header={
        <React.Fragment>
          { introModal && <Intro btnClickHandler={ introBtnClickHandler }/> }
          <IndexHeader autoplayLength={ 3 } />
        </React.Fragment>
      }
    >
      <Container main parent={ page.HOME } classes={'relative'}>
        <p className="text-3xl noselect">Home Page</p>
        <p> oranges</p>
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
  ])
  .then(axios.spread((desktop, mobile) => { 
    if(desktop.status === 200 && mobile.status === 200)
    {
      const dataToken = {
        desktop: desktop.data,
        mobile: mobile.data
      };

      return dataToken;
    }
  }))
  .catch(err => { throw new Error(`Error: ${ err.message }`) });

  return {
    props: {
      data: {
        desktop: data?.desktop,
        mobile: data?.mobile
      }
    },
    revalidate: 86400 // once a day
  };
};
