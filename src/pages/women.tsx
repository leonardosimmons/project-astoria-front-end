
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { page } from '../utils/keys';
import { MainProductPageData } from '../utils/types';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';

import styles from '../containers/pages/women/WomensPage.module.scss';
import promoStyles from '../containers/pages/women/WomensPromoCard.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import MainHeader from '../containers/pages/men/header';
import ContentBox from '../components/box';
import ProductGrid from '../components/grid';
import PromoCard from '../components/promo/card';
import PromoBanner from '../components/promo/banner';


function WomensPage({ config }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  /* -----------------  USER SCROLL POSITION  ----------------- */
  useNavScrollConfig();

  return (
    <Layout
      parent={ page.MENS }
      title={'ASTORIA | Women\'s Fashion'}
      desktop={ config.nav.desktop }
      mobile={ config.nav.mobile }
      classes={'relative'}
      styles={ styles }
      header={
        <MainHeader config={ config.page.header } />
      }
    >
      <Container main styles={ styles } classes={'relative'}>
        <section id={'promo-grid'}>
          <ContentBox styles={ styles } classes={'relative'}>
            <ProductGrid 
              oneXtwo
              grid={ styles.productSectionOne }
              blockOne={ <PromoCard fill config={ config.page.promoCard[0] } styles={ promoStyles }/> }
              blockTwo={ <PromoCard fill config={ config.page.promoCard[1] } styles={ promoStyles }/> }
              blockThree={ <PromoCard fill config={ config.page.promoCard[2] } styles={ promoStyles }/> }
              styles={ styles } />
            <ProductGrid even grid={ styles.productSectionTwo }>
              <PromoCard fill config={ config.page.promoCard[3] } styles={ promoStyles }/>
              <PromoCard fill config={ config.page.promoCard[5] } styles={ promoStyles }/>
            </ProductGrid>
            <ProductGrid even grid={ styles.productSectionThree }>
              <PromoCard fill config={ config.page.promoCard[4] } styles={ promoStyles }/>
              <PromoCard fill config={ config.page.promoCard[7] } styles={ promoStyles }/>
              <PromoCard fill config={ config.page.promoCard[6] } styles={ promoStyles }/>
            </ProductGrid>
          </ContentBox>
        </section>
        <section id={'promo-banner'}>
          <PromoBanner 
            config={ config.page.promoBanner } 
            styles={ styles.wrapper }
          />
        </section>
      </Container>
    </Layout>
  );
};

export default WomensPage;


export const getServerSideProps: GetServerSideProps = async () => {
  const data = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.WOMENS_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } })
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
  .catch(err => {
    throw new Error(`Error: ${ err.message }`)
  });

  return {
    props: {
      config: data as MainProductPageData
    }
  }
};
