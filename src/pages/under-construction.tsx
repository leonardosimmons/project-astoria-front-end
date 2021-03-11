import { page, link } from '../utils/keys';
import Layout from '../containers/layout';
import Button from '../components/button';
import ContentBox from '../components/content';
import TextContent from '../components/text';
import MainContainer from '../components/container';

const UnderConstructionPage = (): JSX.Element => {
  return (
    <Layout 
      parent={ page.UNDER_CONSTRUCTION } 
      title={'Under Construction...'} 
    >
      <MainContainer 
        parent={ page.UNDER_CONSTRUCTION } >
        <ContentBox
          parent={ page.UNDER_CONSTRUCTION }
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
      </MainContainer>
    </Layout>
  );
};

export default UnderConstructionPage;