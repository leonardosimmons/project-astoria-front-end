
import { page } from '../utils/keys';
import Layout from '../containers/layout';
import Container from '../components/container';


const Index = () => {
  return (
    <Layout 
      parent={ page.HOME } 
      title={`Astoria | Home`}
    >
      <Container main parent={ page.HOME }>
        <p className="text-6xl noselect">Home Page</p>
      </Container>
    </Layout>
  );
};

export default Index;