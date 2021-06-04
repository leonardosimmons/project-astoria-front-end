
import React from 'react';
import axios from 'axios';
import { NextRouter, useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { NavbarData, ProductPreviewData } from '../../utils/types';
import { preventDefault } from '../../helpers/functions';
import Image from 'next/image';

import styles from '../../containers/pages/product/Preview.module.scss';

import Layout from '../../containers/layout';
import Container from '../../components/container';
import Grid from '../../components/grid';
import Copyright from '../../components/copyright';
import ProductSummary from '../../containers/pages/product/Summary';
import ProductDetails from '../../containers/pages/product/Details';
import FallbackPage from '../../containers/pages/fallback/FallbackPage';


export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(process.env.GET_ALL_PRODUCTS_API as string, { headers: { 'Content-Type': 'application/json' } });
  const data = await res.data;

  const paths = data.payload.map((product: ProductPreviewData) => {
    return {
      params: { id: product.id.toString() }
    }
  });

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id: string = context.params?.id as string;
  const data: NavbarData | undefined = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get((process.env.GET_PRODUCT_BY_ID_API + id), { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop, mobile, product) => { 
    if(desktop.status === 200 && mobile.status === 200 && product.status === 200)
    {
      const dataToken = {
        desktop: desktop.data,
        mobile: mobile.data,
        product: product.data.data
      };

      return dataToken;
    }
  }))
  .catch(err => { 
    throw new Error(err.message); 
  });

  return {
    props: {
      data: data
    }
  };
};


const tempList: Array<string> = ['Placeholder One', 'Placeholder Two', 'Placeholder Three', 'Placeholder Four', 'Placeholder Five', 'Placeholder Six', 'Placeholder Seven', 'Placeholder Eight', 'Placeholder Nine', ];


function ProductPreview({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  // const router: NextRouter = useRouter();

  // if (router.isFallback) {
  //   <FallbackPage />
  // }

  console.log(data.product)

  const addToCart = React.useCallback(preventDefault((e: React.FormEvent) => {
    // add new item to user cart within the database
    // re-route user to /cart 
  }), []);

  return (
    <Layout
      parent={''}
      styles={styles}
      title={`ASTORIA | ${data.product[0].name}`}
      classes={'relative'}
      desktop={data.desktop}
      mobile={data.mobile}
      footer={<Copyright styles={styles}/>}
    >
      <Container wrapper styles={styles}>
        <Grid even grid={styles.grid}>
          <div className={styles.imgBox}>
            <Image
              priority 
              src={data.product[0].img}
              alt={'product'}
              layout={'fill'}
              objectFit={'contain'}
              objectPosition={'center'}
            />
          </div>
          <ProductSummary 
            id={data.product[0].id}
            name={data.product[0].name}
            price={data.product[0].price}
            addToCart={addToCart}
          />
        </Grid>
        <ProductDetails
          style={data.product[0].style}
          desc={data.product[0].desc}
          details={tempList}
        />
      </Container>
    </Layout>
  );
};

export default ProductPreview;
