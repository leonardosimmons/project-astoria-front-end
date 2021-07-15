
import React from 'react';
import axios from 'axios';
import { page } from '../utils/keys';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import style from '../containers/pages/construction/UnderConstruction.module.scss';

import Layout from '../containers/layout';
import Button from '../components/button';
import ContentBox from '../components/box';
import TextContent from '../components/text';
import Container from '../components/container';


const {
  UNDER_CONSTRUCTION_PAGE_DATA_API
} = process.env;


export const getServerSideProps: GetServerSideProps = async () => {
  const data = await axios.all([
    axios.get(UNDER_CONSTRUCTION_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((staticData) => { 
    if(staticData.status === 200)
    {
      const dataToken = {
        data: staticData.data
      };

      return dataToken;
    }
  }))
  .catch(err => { throw new Error(`Error: ${ err.message }`) });

  return {
    props: {
      data: data?.data
    }
  };
};


function UnderConstructionPage({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const prevPage = React.useCallback(() => {
    window.history.back();
  }, []);

  return (
    <Layout
      styles={ style } 
      parent={ page.UNDER_CONSTRUCTION } 
      title={'Under Construction...'}
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
