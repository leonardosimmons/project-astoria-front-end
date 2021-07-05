
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { page } from '../utils/keys';
import { MainProductPageData, Product, ProductCard } from '../utils/types';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';

import styles from '../containers/pages/gifts/Gifts.module.scss';
import promoStyles from '../containers/pages/gifts/PromoCard.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import MainHeader from '../containers/pages/handbags/header';
import ProductGrid from '../components/grid';
import PromoBanner from '../components/promo/banner';
import PreviewCard from '../components/promo/card';


const {
  NAVBAR_DESKTOP_API,
  NAVBAR_MOBILE_API,
  GIFTS_PAGE_DATA_API,
  GIFT_PRODUCTS,
  STATIC_PRODUCT_API
} = process.env;


export const getStaticProps: GetStaticProps = async () => {
  const data: MainProductPageData | undefined = await axios.all([
    axios.get(NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(GIFTS_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(STATIC_PRODUCT_API as string + GIFT_PRODUCTS as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop, mobile, page, products) => {
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
  .catch(err => { throw new Error(`Error: ${ err.message }`)});

  return {
    props: {
      data: data as MainProductPageData
    }
  }
};


function giftsPage({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  /* -----------------  USER SCROLL POSITION  ----------------- */
  useNavScrollConfig();

  return (
    <Layout
      parent={ page.GIFTS }
      title={'ASTORIA | Gifts'}
      classes={'relative'}
      desktop={ data.nav.desktop }
      mobile={ data.nav.mobile }
      styles={ styles }
      header={
        <MainHeader config={ data.page.header } />
      }
    >
      <Container main styles={ styles } classes={'relative'}>
        <section id={'promo-grid'}>
          <ProductGrid even grid={ styles.even }>
            <PreviewCard priority fill config={data.card[5]} styles={promoStyles} />
            <PreviewCard priority fill config={data.card[3]} styles={promoStyles} />
          </ProductGrid>
          <ProductGrid even grid={ styles.even }>
            <PreviewCard priority fill config={data.card[2]} styles={promoStyles} />
            <PreviewCard priority fill config={data.card[4]} styles={promoStyles} />
          </ProductGrid>
        </section>
        <section id={'promo-banner'}>
          <PromoBanner 
            config={ data.page.promoBanner }
            styles={ styles.wrapper }/>
        </section>
        <section id={'promo-grid-2'}>
          <ProductGrid even grid={ styles.even }>
            <PreviewCard fill config={data.card[0]} styles={promoStyles} />
            <PreviewCard fill config={data.card[1]} styles={promoStyles} />
          </ProductGrid>
        </section>
      </Container>
    </Layout>
  )
};

export default giftsPage;
