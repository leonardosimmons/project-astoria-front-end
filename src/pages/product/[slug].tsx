
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { NextRouter, useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { 
  Data, 
  Product, 
  ProductCartToken, 
  ProductPageData, 
  StaticPath 
} from '../../utils/types';

import styles from '../../containers/pages/product/Preview.module.scss';

import { useUser } from '../../helpers/hooks/useUser';
import { useCart } from '../../helpers/hooks/useCart';

import Image from 'next/image';
import Layout from '../../containers/layout';
import Container from '../../components/container';
import Grid from '../../components/grid';
import Copyright from '../../components/copyright';
import ProductSummary from '../../containers/pages/product/Summary';
import ProductDetails from '../../containers/pages/product/Details';


const {
  STATIC_PRODUCT_API,
} = process.env;


export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const paths: Array<StaticPath> = [];
    const data: Data<Array<Product>> = await axios.get(STATIC_PRODUCT_API as string + '/data', { headers: { 'Content-Type': 'application/json' } }).then(res => res.data);
    const buffer: Array<StaticPath> = data.payload.map((product: Product) => ({ params: {slug: product.meta.slug} }));

    buffer.map((prod: StaticPath) => {
      if(prod.params.slug !== '') {
        paths.push(prod);
      }
    })

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

  const data = await axios.all([
    axios.get((STATIC_PRODUCT_API + `/?loc=slug&val=${slug}`) as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((products: AxiosResponse<any>) => { 
    if(products.status === 200)
    {
      let buffer: Product | undefined;

      products.data.payload.map((product: Product) => { buffer = product; });

      const dataToken = {
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
      data: data
    }
  };
};


function ProductPreview({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  /* ----------------  BASE CONTROLLERS  ---------------- */
  const user = useUser();
  const cart = useCart();
  const router: NextRouter = useRouter();
  const chosenSizeRef = React.useRef<string>();

  /* --------------------  FUNCTIONS  --------------------- */
  function handleChosenSize(e: React.ChangeEvent<HTMLSelectElement>): void {
    chosenSizeRef.current = e.target.value;
  };

  async function addToCart(e: React.FormEvent) {
    e.preventDefault();

    if (!user.status.isSignedIn) {
      router.push('/sign-in');
      return;
    }

    const p: ProductCartToken = {
      user: { 
        id: user.id,
      },
      product: data.product,
      order: {
        id: 0,
        size: chosenSizeRef.current ? chosenSizeRef.current as string : 'other',
        quantity: 1
      }
    };

    if (user.id === cart.user.id) {
      cart.add(p);
      cart.get();
    }

    router.push('/cart');
  };

  return (
    <Layout
      solid
      parent={''}
      styles={styles}
      title={`ASTORIA | ${data.product.details.name}`}
      classes={'relative'}
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
