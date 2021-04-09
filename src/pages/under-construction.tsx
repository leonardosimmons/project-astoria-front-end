
import React from 'react';
import axios from 'axios';
import { page } from '../utils/keys';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import style from '../styles/sass/pages/UnderConstruction.module.scss';

import Layout from '../containers/layout';
import Button from '../components/button';
import ContentBox from '../components/box';
import TextContent from '../components/text';
import Container from '../components/container';


function UnderConstructionPage({ navConfig, data }: InferGetStaticPropsType<typeof getStaticProps>) {

  const prevPage = React.useCallback(() => {
    window.history.back();
  }, []);

  return (
    <Layout
      styles={ style } 
      parent={ page.UNDER_CONSTRUCTION } 
      title={'Under Construction...'}
      desktop={ navConfig.desktop }
      mobile={ navConfig.mobile }
    >
      <Container main styles={ style } parent={ page.UNDER_CONSTRUCTION } >
        <ContentBox
          styles={ style }
          parent={`${ page.UNDER_CONSTRUCTION }__content`}
          classes={`noselect`} >
          <TextContent
            styles={ style }
            parent={ page.UNDER_CONSTRUCTION }
            mainHeading={ data.text.heading }
            textOne={ data.text.lineOne }
            textTwo={ data.text.lineTwo } />
          <div className={`relative`}>
            <Button 
              styles={ style }
              text={ data.btn.text }
              parent={ page.UNDER_CONSTRUCTION }
              clicked={ prevPage }
              classes={`btn-hoverConfig btn-activeFocus`} />
          </div>
        </ContentBox>
      </Container>
    </Layout>
  );
};

export default UnderConstructionPage;

export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.UNDER_CONSTRUCTION_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop, mobile, staticData) => { 
    if(desktop.status === 200 && mobile.status === 200)
    {
      const dataToken = {
        desktop: desktop.data,
        mobile: mobile.data,
        data: staticData.data
      };

      return dataToken;
    }
  }))
  .catch(err => { throw new Error(`Error: ${ err.message }`) });

  return {
    props: {
      navConfig: {
        desktop: data?.desktop,
        mobile: data?.mobile,
        data: data?.data
      },
      data: data?.data
    },
    revalidate: 86400 // once a day
  };
};
