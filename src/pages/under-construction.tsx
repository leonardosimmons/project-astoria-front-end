
import React from 'react';
import axios from 'axios';
import { page, link } from '../utils/keys';

import Layout from '../containers/layout';
import Button from '../components/button';
import ContentBox from '../components/box';
import TextContent from '../components/text';
import Container from '../components/container';
import style from '../styles/sass/pages/UnderConstruction.module.scss';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

function UnderConstructionPage({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      styles={ style } 
      parent={ page.UNDER_CONSTRUCTION } 
      title={'Under Construction...'}
      desktopData={ data.desktop }
      mobileData={ data.mobile }
    >
      <Container main styles={ style } parent={ page.UNDER_CONSTRUCTION } >
        <ContentBox
          styles={ style }
          parent={`${ page.UNDER_CONSTRUCTION }__content`}
          classes={`noselect`} >
          <TextContent
            styles={ style }
            parent={ page.UNDER_CONSTRUCTION }
            mainHeading={`This Page Is Under Construction...`}
            textOne={`We are currently working on a host of new features`}
            textTwo={`This page along with many others will be available soon`} />
          <div className={`relative`}>
            <Button 
              styles={ style }
              link={ link.HOME }
              text="Back Home"
              parent={ page.UNDER_CONSTRUCTION }
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
  ])
  .then(axios.spread((desktop, mobile) => { 
    if(desktop.status === 200 && mobile.status === 200)
    {
      const dataToken = {
        desktop: desktop.data,
        mobile: mobile.data
      };

      return dataToken;
    }
  }))
  .catch(err => { throw new Error(`Error: ${ err.message }`) });

  return {
    props: {
      data: {
        desktop: data?.desktop,
        mobile: data?.mobile
      }
    }
  };
};
