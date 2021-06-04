
import React from 'react';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NavbarData, ProductPreviewData } from '../utils/types';
import { preventDefault } from '../helpers/functions';
import Image from 'next/image';

import styles from '../containers/pages/product/Preview.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import Grid from '../components/grid';
import Copyright from '../components/copyright';
import ProductSummary from '../containers/pages/product/Summary';
import ProductDetails from '../containers/pages/product/Details';


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


const tempData: ProductPreviewData = {
  id: '1',
  name: 'Prada Bottoms',
  price: '1,250', 
  style: ' ‎660285 XKBVB 4594', 
  desc: 'Part of the House’s codes first presented during the ‘30s, the distinctive GG motif has been the inspiration for new explorations of expression for almost a century. In a new interpretation, the GG is presented as a jacquard on this cotton V-neck sweater.',
  img: '/images/products/men/pants/DenimPants01.jpg',
  list: ['Placeholder One', 'Placeholder Two', 'Placeholder Three', 'Placeholder Four', 'Placeholder Five', 'Placeholder Six', 'Placeholder Seven', 'Placeholder Eight', 'Placeholder Nine', ]
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
      title={`ASTORIA | ${tempData.name}`}
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
              src={tempData.img}
              alt={'product'}
              layout={'fill'}
              objectFit={'contain'}
              objectPosition={'center'}
            />
          </div>
          <ProductSummary 
            id={tempData.id}
            name={tempData.name}
            price={tempData.price}
            addToCart={addToCart}
          />
        </Grid>
        <ProductDetails
          style={tempData.style}
          desc={tempData.desc}
          details={tempData.list}
        />
      </Container>
    </Layout>
  );
};

export default ProductPreview;
