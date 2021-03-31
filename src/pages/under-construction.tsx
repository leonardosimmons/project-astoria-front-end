
import React from 'react';
import { page, link } from '../utils/keys';

import Layout from '../containers/layout';
import Button from '../components/button';
import ContentBox from '../components/box';
import TextContent from '../components/text';
import Container from '../components/container';
import style from '../styles/sass/pages/UnderConstruction.module.scss';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps  = async () => {
  const styles = style;

  return {
    props: { styles }
  }
};

function UnderConstructionPage({ styles }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      styles={ style } 
      parent={ page.UNDER_CONSTRUCTION } 
      title={'Under Construction...'}
      desktopData={ null }
      mobileData={ null }
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