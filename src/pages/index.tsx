

import { css, page } from '../utils/keys';
import { useScrollPosition } from '../helpers/hooks/useScrollPosition';

import Layout from '../containers/layout';
import Container from '../components/container';


const Index = () => {
  useScrollPosition(css.TOP_PAGE_PIXEL_ANCHOR, css.DESKTOP_NAVIGATION, -1, 'nav-not-at-top'); // controls navbar fade onScroll

  return (
    <Layout 
      parent={ page.HOME } 
      title={`Astoria | Home`}
      classes={`relative`}
    >
      <Container main parent={ page.HOME }>
        <p className="text-6xl noselect">Home Page</p>
      </Container>
    </Layout>
  );
};

export default Index;