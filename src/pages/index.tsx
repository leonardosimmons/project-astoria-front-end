
import { css, page } from '../utils/keys';
import { useScrollPosition } from '../helpers/hooks/useScrollPosition';
import styles from '../styles/sass/pages/Index.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';


function Index() {
  useScrollPosition(css.TOP_PAGE_PIXEL_ANCHOR, css.DESKTOP_NAVBAR, -1, styles.navNotAtTop ); // controls navbar fade onScroll

  return (
    <Layout 
      parent={ page.HOME } 
      title={`Astoria | Home`}
      classes={`relative`}
      styles={ styles }
    >
      <Container main parent={ page.HOME }>
        <p className="text-6xl noselect">Home Page</p>
      </Container>
    </Layout>
  );
};

export default Index;