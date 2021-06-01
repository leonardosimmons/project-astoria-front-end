
import React from 'react';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NavbarData } from '../utils/types/types';
import Image from 'next/image';

import styles from '../containers/pages/product/Preview.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import Grid from '../components/grid';
import Copyright from '../components/copyright';
import ProductSummary from '../containers/pages/product/Summary';


export const getStaticProps: GetStaticProps = async () => {
  const data: NavbarData | undefined = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
  ])
  .then(axios.spread((desktop, mobile) => { 
    if(desktop.status === 200 && mobile.status === 200)
    {
      const dataToken: NavbarData = {
        desktop: desktop.data,
        mobile: mobile.data,
      };

      return dataToken;
    }
  }))
  .catch(err => { 
    throw new Error(err.message); 
  });

  return {
    props: {
      data: data as NavbarData
    }
  };
};

function ProductPreview({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <Layout
      parent={''}
      styles={styles}
      title={'ASTORIA | Product Preview'}
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
              src={'/images/products/men/pants/DenimPants01.jpg'}
              alt={'product'}
              layout={'fill'}
              objectFit={'contain'}
              objectPosition={'center'}
            />
          </div>
          <ProductSummary />
        </Grid>
        <div className={styles.detailsBox}></div>
      </Container>
    </Layout>
  );
};

export default ProductPreview;
