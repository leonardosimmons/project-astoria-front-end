
import axios, { AxiosResponse } from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { page } from '../utils/keys';
import { MainProductPageData, Product, ProductCard } from '../utils/types';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';

import styles from '../containers/pages/men/MensPage.module.scss';
import promoStyles from '../containers/pages/men/MensPromoCardLrg.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import ContentBox from '../components/box';
import MainHeader from '../containers/pages/men/header';
import ProductGrid from '../components/grid';
import PreviewCard from '../components/promo/card';
import PromoBanner from '../components/promo/banner';


export const getStaticProps: GetStaticProps = async () => {
  const data: MainProductPageData | undefined = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.MENS_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.GET_PRODUCT_API as string + process.env.MENS_PRODUCTS as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop: AxiosResponse<any>, mobile: AxiosResponse<any>, staticData: AxiosResponse<any>, products: AxiosResponse<any>) => {
    if(desktop.status === 200 && mobile.status === 200 && staticData.status === 200 && products.status === 200) 
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
        page: staticData.data,
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


function MensPage({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  /* -----------------  USER SCROLL POSITION  ----------------- */
  useNavScrollConfig();

  return (
    <Layout
      parent={ page.MENS }
      title={'ASTORIA | Men\'s Fashion'}
      desktop={ data.nav.desktop }
      mobile={ data.nav.mobile }
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
              blockOne={ <PreviewCard fill priority={true} config={ data.card[0] } styles={ promoStyles }/> }
              blockTwo={ <PreviewCard fill priority={true} config={ data.card[1] } styles={ promoStyles }/> }
              blockThree={ <PreviewCard fill priority={true} config={ data.card[2] } styles={ promoStyles }/> }
              styles={ styles } />
            <ProductGrid even grid={ styles.productSectionTwo }>
              <PreviewCard fill config={ data.card[3] } styles={ promoStyles }/>
              <PreviewCard fill config={ data.card[1] } styles={ promoStyles }/>
            </ProductGrid>
            <ProductGrid even grid={ styles.productSectionThree }>
              <PreviewCard fill config={ data.card[1] } styles={ promoStyles }/>
              <PreviewCard fill config={ data.card[2] } styles={ promoStyles }/>
              <PreviewCard fill config={ data.card[3] } styles={ promoStyles }/>
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

export default MensPage;
