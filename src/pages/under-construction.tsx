import React from 'react';
import { page, link } from '../utils/keys';
import Layout from '../containers/layout';
import Button from '../components/button';
import ContentBox from '../components/box';
import TextContent from '../components/text';
import Container from '../components/container';

import style from '../styles/css/pages/UnderConstruct.module.css';

const UnderConstructionPage = (): JSX.Element => {

  console.log(style['under-construction'])

  return (
    <Layout 
      parent={ page.UNDER_CONSTRUCTION } 
      title={'Under Construction...'}
    >
      <Container main parent={ page.UNDER_CONSTRUCTION } >
        <ContentBox
          parent={`${ page.UNDER_CONSTRUCTION }__content`}
          classes={`noselect`} >
          <TextContent
            parent={ page.UNDER_CONSTRUCTION }
            mainHeading={`This Page Is Under Construction...`}
            textOne={`We are currently working on a host of new features`}
            textTwo={`This page along with many others will be available soon`} />
          <div className={`relative`}>
            <Button 
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