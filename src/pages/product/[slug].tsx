
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { NextRouter, useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Data, NavbarDesktopData, NavbarMobileData, Product, ProductCartToken, ProductPageData, StaticPath } from '../../utils/types';
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
    const data: Data<Array<Product>> = await res.data;
    const paths: Array<StaticPath> = data.payload.map((product: Product) => ({ params: {slug: product.meta.slug} }));

    return {
      paths,
      fallback: false
    };
  }
  catch(err) {
    throw new Error(err.message);
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug: string = context.params!.slug as string;

  const data: ProductPageData | undefined = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get((process.env.GET_PRODUCT_API + `/?loc=slug&val=${slug}`) as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop: AxiosResponse<any>, mobile: AxiosResponse<any>, products: AxiosResponse<any>) => { 
    if(desktop.status === 200 && mobile.status === 200 && products.status === 200)
    {
      let buffer: Product | undefined;

      products.data.payload.map((product: Product) => { buffer = product; });

      const dataToken: ProductPageData = {
        nav: {
          desktop: desktop.data as NavbarDesktopData,
          mobile: mobile.data as NavbarMobileData,
        },
        product: buffer as Product
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
  const router: NextRouter = useRouter();
  const chosenSizeRef: React.MutableRefObject<string | undefined> = React.useRef<string>();

  function handleChosenSize(e: React.ChangeEvent<HTMLSelectElement>): void {
    chosenSizeRef.current = e.target.value;
    // add chosen size to redux 
  };

  function addToCart(e: React.FormEvent) {
    e.preventDefault();

    // add new item to user cart within the database/ redux
    const cartToken: ProductCartToken = {
      user: 'guest',
      product: {
        id: data.product.id,
        size: chosenSizeRef.current as string,
        amount: 1
      }
    };

    router.push('/cart');
  };

  return (
    <Layout
      solid
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
              src={data.product.preview.image.src}
              alt={'product'}
              layout={'fill'}
              objectFit={'contain'}
              objectPosition={'center'}
            />
          </div>
          <ProductSummary 
            id={data.product.id}
            fit={data.product.details.fit}
            name={data.product.details.name}
            price={data.product.details.price.toLocaleString()}
            chosenSize={handleChosenSize}
            addToCart={addToCart}
          />
        </Grid>
        <ProductDetails
          style={data.product.details.style}
          desc={data.product.details.desc}
          details={data.product.details.list}
        />
      </Container>
    </Layout>
  );
};

export default ProductPreview;
