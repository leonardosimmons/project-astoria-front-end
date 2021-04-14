
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { page } from '../utils/keys';
import { MensPageData } from '../utils/types';
import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';

import styles from '../containers/pages/men/MensPage.module.scss';
import testStyles from '../styles/sass/utils/Test.module.scss';

import Layout from '../containers/layout/layout';
import Container from '../components/container/Container';
import MainHeader from '../containers/pages/men/header';
import ContentBox from '../components/box/ContentBox';


function MensPage({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  /* -----------------  USER SCROLL POSITION  ----------------- */
  useNavScrollConfig();


  return (
    <Layout
      parent={ page.MENS }
      title={'ASTORIA | Men\'s Fashion'}
      desktop={ config.nav.desktop }
      mobile={ config.nav.mobile }
      classes={'relative'}
      styles={ styles }
      header={
        <MainHeader config={ config.data.header } />
      }
    >
      <Container main parent={ page.MENS } styles={ styles } classes={'relative'}>
        <ContentBox styles={ styles } classes={'relative'}>
          <div className={`${ styles.productBoxOne } one-x-two-col`}>          
            <div className={ testStyles.test01 }></div>
            <div>
              <div className={ testStyles.test04 }></div>
              <div className={ testStyles.test05 }></div>
            </div>
          </div>
          <div className={`${ styles.productBoxTwo } even-col`}>          
            <div className={ testStyles.test02 }></div>
            <div className={ testStyles.test01 }></div>
          </div>
          <div className={`${ styles.productBoxThree } even-col`}>          
            <div className={ testStyles.test02 }></div>
            <div className={ testStyles.test01 }></div>
            <div className={ testStyles.test03 }></div>
          </div>
        </ContentBox>
      </Container>
    </Layout>
  );
};

/*

<div>
  <div className={`${ testStyles.testBox } even-col test-box`}>          
    <div className={ testStyles.test02 }></div>
    <div className={ testStyles.test01 }></div>
  </div>
</div>
<div>
  <div className={`${ testStyles.testBox } even-col test-box`}>          
    <div className={ testStyles.test02 }></div>
    <div className={ testStyles.test01 }></div>
    <div className={ testStyles.test03 }></div>
  </div>
</div>

*/

export default MensPage;


export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.MENS_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } })
  ])
  .then(axios.spread((desktop, mobile, data) => {
    if(desktop.status === 200 && mobile.status === 200) {
      const dataToken: MensPageData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data
        },
        data: data.data
      }

      return dataToken;
    }
  }))
  .catch(err => {
    throw new Error(`Error: ${ err.message }`)
  });

  return {
    props: {
      config: data as MensPageData
    }
  }
};
