import { page, link } from '../utils/keys';
import Button from '../components/button';
import ContentBox from '../components/content';
import TextContent from '../components/text';
import MainContainer from '../containers/main';

const ConstructionPage = () => {
  return (
    <div className={ page.UNDER_CONSTRUCTION } >
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
          <Button 
            link={ link.HOME }
            text="Back Home"
            parent={ page.UNDER_CONSTRUCTION }
            classes={`btn-hoverConfig btn-activeFocus`} />
        </ContentBox>
      </MainContainer>
    </div>
  );
};

export default ConstructionPage;