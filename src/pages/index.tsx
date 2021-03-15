
import { page } from '../utils/keys';
import Layout from '../containers/layout';
import MainContainer from '../components/container';


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