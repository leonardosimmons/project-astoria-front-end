
import { page } from '../utils/keys';
import MainContainer from "../components/container";
import Layout from '../containers/layout';

const Index = () => {
  return (
    <Layout 
      parent={ page.HOME } 
      title={`Astoria | Home`}
    >
      <MainContainer parent={ page.HOME }>
        <p className="text-6xl noselect">Home Page</p>
      </MainContainer>
    </Layout>
  );
};

export default Index;