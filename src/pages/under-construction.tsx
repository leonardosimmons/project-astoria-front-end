import { page, link } from '../utils/keys';
import Button from '../components/button';
import ContentBox from '../components/box/content';
import TextBox from '../components/box/text';

const ConstructionPage = () => {
  return (
    <div className={`${ page.UNDER_CONSTRUCTION }`}>
      <div className={`${ page.UNDER_CONSTRUCTION }__container`}>
        <ContentBox
          parent={`${ page.UNDER_CONSTRUCTION }`}
          classes={`noselect`}
        >
          <TextBox
            parent={`${ page.UNDER_CONSTRUCTION }`}
            mainHeading={`This Page Is Under Construction...`}
            textTwo={`We are currently working on a host of new features`}
            textThree={`This page along with many others will be available soon`}
          />
          <div>
            <Button 
              link={ link.HOME }
              text="Back Home"
              parent={`${ page.UNDER_CONSTRUCTION }`}
              classes={`btn-hoverConfig btn-activeFocus`}
            />
          </div>
        </ContentBox>
      </div>
    </div>
  )
};

export default ConstructionPage;