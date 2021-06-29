
import axios, { AxiosResponse } from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { page } from '../utils/keys';
import { MainProductPageData, Product, ProductCard } from '../utils/types';

import styles from '../containers/pages/women/WomensPage.module.scss';
import promoStyles from '../containers/pages/women/WomensPromoCard.module.scss';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';
import { useWatchUserSignIn } from '../helpers/hooks/useWatchUserSignIn';

import Layout from '../containers/layout';
import Container from '../components/container';
import MainHeader from '../containers/pages/men/header';
import ContentBox from '../components/box';
import ProductGrid from '../components/grid';
import PromoCard from '../components/promo/card';
import PromoBanner from '../components/promo/banner';


const {
  NAVBAR_DESKTOP_API,
  NAVBAR_MOBILE_API,
  WOMENS_PAGE_DATA_API,
  STATIC_PRODUCT_API,
  WOMENS_PRODUCTS
} = process.env;


export const getStaticProps: GetStaticProps = async () => {
  const data: MainProductPageData | undefined = await axios.all([
    axios.get(NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(WOMENS_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(STATIC_PRODUCT_API as string + WOMENS_PRODUCTS as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop: AxiosResponse<any>, mobile: AxiosResponse<any>, page: AxiosResponse<any>, products: AxiosResponse<any>) => {
    if(desktop.status === 200 && mobile.status === 200 && page.status === 200 && products.status === 200) {
      const cards: Array<ProductCard> = products.data.payload.map((p: Product): ProductCard => ({
        img: {
          src: p.preview.image.src,
          alt: p.preview.image.alt,
          objectFit: 'contain'
        },
        text: p.details.name.toUpperCase(),
        btn: {
          text: 'DISCOVER MORE',
          link: p.preview.link,
          classes: 'btn-activeFocus'
        }
      }));

      const dataToken: MainProductPageData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data
        },
        page: page.data,
        card: cards
      }

      return dataToken;
    }
  }))
  .catch(err => {
    throw new Error(`Error: ${ err.message }`)
  });

  return {
    props: {
      data: data as MainProductPageData
    }
  }
};


function WomensPage({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  // watches users scroll position for navbar
  useNavScrollConfig();

  // checks for existsing session/ guest login
  useWatchUserSignIn();

  return (
    <Layout
      parent={ page.MENS }
      title={'ASTORIA | Women\'s Fashion'}
      desktop={data.nav.desktop}
      mobile={data.nav.mobile}
      classes={'relative'}
      styles={ styles }
      header={
        <MainHeader config={ data.page.header } />
      }
    >
      <Container main styles={ styles } classes={'relative'}>
        <section id={'promo-grid'}>
          <ContentBox styles={ styles } classes={'relative'}>
            <ProductGrid 
              oneXtwo
              grid={ styles.productSectionOne }
              blockOne={ <PromoCard fill priority={true} config={ data.cards[0] } styles={ promoStyles }/> }
              blockTwo={ <PromoCard fill priority={true} config={ data.cards[1] } styles={ promoStyles }/> }
              blockThree={ <PromoCard fill priority={true} config={ data.cards[2] } styles={ promoStyles }/> }
              styles={ styles } />
            <ProductGrid even grid={ styles.productSectionTwo }>
              <PromoCard fill config={ data.cards[3] } styles={ promoStyles }/>
              <PromoCard fill config={ data.cards[5] } styles={ promoStyles }/>
            </ProductGrid>
            <ProductGrid even grid={ styles.productSectionThree }>
              <PromoCard fill config={ data.cards[4] } styles={ promoStyles }/>
              <PromoCard fill config={ data.cards[7] } styles={ promoStyles }/>
              <PromoCard fill config={ data.cards[6] } styles={ promoStyles }/>
            </ProductGrid>
          </ContentBox>
        </section>
        <section id={'promo-banner'}>
          <PromoBanner 
            config={ data.page.promoBanner } 
            styles={ styles.wrapper }
          />
        </section>
      </Container>
    </Layout>
  );
};

export default WomensPage;
