
import { page } from '../utils/keys';
import Layout from '../containers/layout';
import MainContainer from "../components/container";
import MainNavigationBar from '../components/navbar/main';
import MobileNavigationBar from '../components/navbar/mobile';

const Index = () => {
  return (
    <Layout 
      parent={ page.HOME } 
      title={`Astoria | Home`}
      mainNav={ <MainNavigationBar /> }
      mobileNav={ <MobileNavigationBar /> }
    >
      <MainContainer parent={ page.HOME }>
        <p className="text-6xl noselect">Home Page</p>
      </MainContainer>
    </Layout>
  );
};

export default Index;