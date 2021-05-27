
import React from 'react';
import axios from 'axios';
import { page } from '../utils/keys/keys';
import { NavbarData } from '../utils/types';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import styles from '../containers/pages/shipping/Shipping.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import Copyright from '../components/copyright';
import Input from '../components/input';


export const getStaticProps: GetStaticProps = async () => {
  const data: NavbarData | undefined = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
  ])
  .then(axios.spread((desktop, mobile) => {
    if(desktop.status === 200 && mobile.status === 200) {
      const dataToken: NavbarData = {
        desktop: desktop.data,
        mobile: mobile.data
      };

      return dataToken
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


function ShippingPage({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <Layout
      parent={page.SHIPPING}
      title={'ASTORIA | Shipping'}
      styles={styles}
      desktop={data.desktop.data}
      mobile={data.mobile.data}
      footer={<Copyright />}
    >
      <Container wrapper styles={styles} classes={'noselect'}>
        <h1>{'SHIPPING'}</h1>
        <form className={styles.form}>
          <Input col labelFront={'Address'} placeholder={'Enter address'} styles={styles}/>
          <Input col labelFront={'City'} placeholder={'Enter city'} styles={styles}/>
          <Input col labelFront={'Postal Code'} placeholder={'Enter postal code'} styles={styles}/>
          <Input col labelFront={'Country'} placeholder={'Enter country'} styles={styles}/>
          <div className={styles.btnBox}>
            <Input type={'reset'} value={'RESET'} classes={styles.btn}/>
            <Input type={'submit'} value={'SUBMIT'} classes={styles.btn}/>
          </div>
        </form>
      </Container>
    </Layout>
  );
};

export default ShippingPage;
