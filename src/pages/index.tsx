
import axios from 'axios';
import { css, page } from '../utils/keys';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useScrollPosition } from '../helpers/hooks/useScrollPosition';
import styles from '../styles/sass/pages/Index.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';


function Index({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  useScrollPosition(css.TOP_PAGE_PIXEL_ANCHOR, css.DESKTOP_NAVBAR, -1, styles.navNotAtTop ); // controls navbar fade onScroll

console.log(data)

  return (
    <Layout 
      parent={ page.HOME } 
      title={`Astoria | Home`}
      classes={`relative`}
      styles={ styles }
      desktopData={ data.desktop }
      mobileData={ data.mobile }
    >
      <Container main parent={ page.HOME }>
        <p className="text-6xl noselect">Home Page</p>
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
    }
  };
};
