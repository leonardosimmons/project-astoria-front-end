
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { useSession } from 'next-auth/client';
import { NextRouter, useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { 
  Data, 
  NavbarDesktopData, 
  NavbarMobileData, 
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
import { useFetch } from '../../helpers/hooks/useFetch';


const {
  NAVBAR_DESKTOP_API,
  NAVBAR_MOBILE_API,
  STATIC_PRODUCT_API,
  NEXT_PUBLIC_ADD_TO_CART
} = process.env;

const g_Id: number = 123456789;


export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const data: Data<Array<Product>> = await axios.get(STATIC_PRODUCT_API as string + '/data', { headers: { 'Content-Type': 'application/json' } }).then(res => res.data);
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
    axios.get(NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get((STATIC_PRODUCT_API + `/?loc=slug&val=${slug}`) as string, { headers: { 'Content-Type': 'application/json' } })
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
  /* ----------------  BASE CONTROLLERS  ---------------- */
  const user = useUser();
  const cart = useCart();
  const fetch = useFetch();
  const [ session ] = useSession();
  const router: NextRouter = useRouter();
  const chosenSizeRef = React.useRef<string>();

  /* --------------------  FUNCTIONS  --------------------- */
  function handleChosenSize(e: React.ChangeEvent<HTMLSelectElement>): void {
    chosenSizeRef.current = e.target.value;
  };

  async function addToCart(e: React.FormEvent) {
    e.preventDefault();

    const p: ProductCartToken = {
      user: { 
        id: session ? user.id : g_Id,
        
      },
      product: data.product,
      order: {
        size: chosenSizeRef.current as string,
        quantity: 1
      }
    };

    if (user.id === cart.user.id) {
      //! add to thunk
      //! create signIn check custom hook (random)
      const isAdded = await fetch.post(NEXT_PUBLIC_ADD_TO_CART as string, p); // database
      
      if(!isAdded) {
        cart.add(p); // redux
      }
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
