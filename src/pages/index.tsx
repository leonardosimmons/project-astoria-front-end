
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useScrollPosition } from '../helpers/hooks/useScrollPosition';
import { css, page } from '../utils/keys';
 
import styles from '../styles/sass/pages/index/Index.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import Carousel from '../features/carousel';
import HeaderOne from '../containers/header/index/components/HeaderOne';
import HeaderTwo from '../containers/header/index/components/HeaderTwo';
import LoadSpinner from '../components/loader/spinner/LoadSpinner';


function Index({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  useScrollPosition(css.TOP_PAGE_PIXEL_ANCHOR, css.DESKTOP_NAVBAR, -1, styles.navNotAtTop ); // controls navbar fade on scroll
  useScrollPosition(css.TOP_PAGE_PIXEL_ANCHOR, css.DESKTOP_LOGO, -1, styles.hide); // hides nav logo on scroll

  return (
    <Layout 
      parent={ page.HOME } 
      title={`Astoria | Home`}
      classes={`relative`}
      styles={ styles }
      desktopData={ data.desktop }
      mobileData={ data.mobile }
      header={
        <Carousel
          arrows
          dots
          autoPlay={ 12.5 }>
          <HeaderOne />
          <HeaderTwo />
        </Carousel>
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
    revalidate: 60
  };
};
 