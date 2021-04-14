
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { page } from '../utils/keys';
import { MensPageData } from '../utils/types';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';

import styles from '../containers/pages/men/MensPage.module.scss';
import promoStyles from '../containers/pages/men/MensPromoCardLrg.module.scss';

import Layout from '../containers/layout/layout';
import Container from '../components/container/Container';
import MainHeader from '../containers/pages/men/header';
import ContentBox from '../components/box/ContentBox';
import ProductGrid from '../components/grid';
import PromoCard from '../components/promo/card';
import PromoBanner from '../components/promo/banner/PromoBanner';


function MensPage({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  /* -----------------  USER SCROLL POSITION  ----------------- */
  useNavScrollConfig();


  return (
    <Layout
      parent={ page.MENS }
      title={'ASTORIA | Men\'s Fashion'}
      desktop={ config.nav.desktop }
      mobile={ config.nav.mobile }
      classes={'relative'}
      styles={ styles }
      header={
        <MainHeader config={ config.data.header } />
      }
    >
      <Container main styles={ styles } classes={'relative'}>
        <ContentBox styles={ styles } classes={'relative'}>
          <ProductGrid 
            oneXtwo
            grid={ styles.productSectionOne }
            blockOne={ <PromoCard fill config={ config.data.promoBlock[0] } styles={ promoStyles }/> }
            blockTwo={ <PromoCard fill config={ config.data.promoBlock[1] } styles={ promoStyles } /> }
            blockThree={ <PromoCard fill config={ config.data.promoBlock[2] } styles={ promoStyles }/> }
            styles={ styles }
          />
          <ProductGrid even grid={ styles.productSectionTwo }>
            <PromoCard fill config={ config.data.promoBlock[3] } styles={ promoStyles }/>
            <PromoCard fill config={ config.data.promoBlock[1] } styles={ promoStyles }/>
          </ProductGrid>
          <ProductGrid even grid={ styles.productSectionThree }>
            <PromoCard fill config={ config.data.promoBlock[1] } styles={ promoStyles }/>
            <PromoCard fill config={ config.data.promoBlock[2] } styles={ promoStyles }/>
            <PromoCard fill config={ config.data.promoBlock[3] } styles={ promoStyles }/>
          </ProductGrid>
        </ContentBox>
        <PromoBanner config={ config.data.promoBanner } styles={ styles.wrapper }/>
      </Container>
    </Layout>
  );
};

export default MensPage;


export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.MENS_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop, mobile, data) => {
    if(desktop.status === 200 && mobile.status === 200 && data.status === 200) {
      const dataToken: MensPageData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data
        },
        data: data.data
      }

      return dataToken;
    }
  }))
  .catch(err => {
    throw new Error(`Error: ${ err.message }`)
  });

  return {
    props: {
      config: data as MensPageData
    }
  }
};
