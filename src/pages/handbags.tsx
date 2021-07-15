
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { MainProductPageData, Product, ProductCard } from '../utils/types';
import { page } from '../utils/keys';

import styles from '../containers/pages/handbags/Handbags.module.scss';
import promoStyles from '../containers/pages/handbags/PromoCard.module.scss';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';

import Layout from '../containers/layout';
import Container from '../components/container';
import MainHeader from '../containers/pages/handbags/header';
import ProductGrid from '../components/grid';
import PromoBanner from '../components/promo/banner';
import PreviewCard from '../components/promo/card';
import Copyright from '../components/copyright';


const {
  NAVBAR_DESKTOP_API,
  NAVBAR_MOBILE_API,
  HANDBAG_PAGE_DATA_API,
  HANDBAG_PRODUCTS,
  STATIC_PRODUCT_API,
} = process.env;


export const getServerSideProps: GetServerSideProps = async () => {
  const data = await axios.all([
    axios.get(NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(HANDBAG_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(STATIC_PRODUCT_API as string + HANDBAG_PRODUCTS as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop, mobile, page, products) => {
    if(desktop.status === 200 && mobile.status === 200 && page.status === 200 && products.status === 200)
    {
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
      };
      
      return dataToken;
    }
  }))
  .catch(err => { throw new Error(`Error: ${ err.message }`)});

  return {
    props: {
      data: data as MainProductPageData 
    }
  };
};


function Handbags({ data }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  /* -----------------  USER SCROLL POSITION  ----------------- */
  useNavScrollConfig();

  return (
    <Layout
      parent={ page.HANDBAGS }
      title={'ASTORIA | Handbags'}
      desktop={ data.nav.desktop }
      mobile={ data.nav.mobile }
      classes={'relative'}
      styles={ styles }
      header={
        <MainHeader config={ data.page.header } />
      }
      footer={<Copyright />}
    >
      <Container main styles={ styles } classes={`relative`}>
        <section id={'promo-grid'}>
          <ProductGrid even grid={ styles.even }>
            <PreviewCard priority fill config={data.card[2]} styles={promoStyles} />
            <PreviewCard priority fill config={data.card[4]} styles={promoStyles} />
          </ProductGrid>
          <ProductGrid even grid={ styles.even }>
          <PreviewCard priority fill config={data.card[0]} styles={promoStyles} />
            <PreviewCard priority fill config={data.card[6]} styles={promoStyles} />
          </ProductGrid>
        </section>
        <section id={'promo-banner'} className={'relative'}>
          <PromoBanner 
            config={ data.page.promoBanner }
            styles={ styles.wrapper }/>
        </section>
        <section id={'promo-grid-2'}>          
          <ProductGrid 
            oneXtwo
            grid={ styles.oneXtwo }
            styles={ styles }
            blockOne={<PreviewCard fill config={data.card[5]} styles={promoStyles} />}
            blockTwo={<PreviewCard fill config={data.card[1]} styles={promoStyles} />}
            blockThree={<PreviewCard fill config={data.card[3]} styles={promoStyles} />}
          />
        </section>
      </Container>
    </Layout>
  );
};

export default Handbags;
