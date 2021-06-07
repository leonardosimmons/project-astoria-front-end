
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Data, NavbarDesktopData, NavbarMobileData, ProductData, ProductPageData, StaticPath } from '../../utils/types';
import { preventDefault } from '../../helpers/functions';
import Image from 'next/image';

import styles from '../../containers/pages/product/Preview.module.scss';

import Layout from '../../containers/layout';
import Container from '../../components/container';
import Grid from '../../components/grid';
import Copyright from '../../components/copyright';
import ProductSummary from '../../containers/pages/product/Summary';
import ProductDetails from '../../containers/pages/product/Details';


export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res: AxiosResponse<any> = await axios.get(process.env.GET_ALL_PRODUCTS_API as string, { headers: { 'Content-Type': 'application/json' } });
    const data: Data<Array<ProductData>> = await res.data;
    const paths: Array<StaticPath> = data.payload.map((product: ProductData) => ({ params: {slug: product.slug} }));

    return {
      paths,
      fallback: false
    }
  }
  catch(err) {
    throw new Error(err.message)
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug: string = context.params?.slug as string;

  const data: ProductPageData | undefined = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.GET_ALL_PRODUCTS_API as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop: AxiosResponse<any>, mobile: AxiosResponse<any>, products: AxiosResponse<any>) => { 
    if(desktop.status === 200 && mobile.status === 200 && products.status === 200)
    {
      let buffer: ProductData | undefined;

      products.data.payload.map((product: ProductData) => {
        if(product.slug === slug) 
          buffer = product;
      });

      const dataToken: ProductPageData = {
        nav: {
          desktop: desktop.data as NavbarDesktopData,
          mobile: mobile.data as NavbarMobileData,
        },
        product: buffer as ProductData
      };

      return dataToken;
    }
  }))
  .catch(err => { 
    throw new Error(err.message); 
  });

  return {
    props: {
      data: data as ProductPageData
    }
  };
};


function ProductPreview({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {

  const addToCart = React.useCallback(preventDefault((e: React.FormEvent) => {
    // add new item to user cart within the database
    // re-route user to /cart 
  }), []);

  return (
    <Layout
      parent={''}
      styles={styles}
      title={`ASTORIA | ${data.product.details.name}`}
      classes={'relative'}
      desktop={data.nav.desktop}
      mobile={data.nav.mobile}
      footer={<Copyright styles={styles}/>}
    >
      <Container wrapper styles={styles}>
        <Grid even grid={styles.grid}>
          <div className={styles.imgBox}>
            <Image
              priority 
              src={data.product.details.img}
              alt={'product'}
              layout={'fill'}
              objectFit={'contain'}
              objectPosition={'center'}
            />
          </div>
          <ProductSummary 
            id={data.product.id}
            type={data.product.details.type}
            name={data.product.details.name}
            price={data.product.details.price.toLocaleString()}
            addToCart={addToCart}
          />
        </Grid>
        <ProductDetails
          style={data.product.style}
          desc={data.product.details.desc}
          details={data.product.details.list}
        />
      </Container>
    </Layout>
  );
};

export default ProductPreview;
