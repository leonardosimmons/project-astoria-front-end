
import React from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/client';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { IndexPageData, UserInfo, UserCheck, UserData } from '../utils/types';
import { page } from '../utils/keys';

import styles from '../containers/pages/index/Index.module.scss';

import { useNavScrollConfig } from '../helpers/hooks/useNavScrollConfig';
import { useUser } from '../helpers/hooks/useUser';

import Layout from '../containers/layout';
import Container from '../components/container';
import IntroModal from '../containers/pages/index/intro';
import IndexHeader from '../containers/pages/index/header';
import SectionOne from '../containers/pages/index/sections/one';
import SectionTwo from '../containers/pages/index/sections/two';
import SectionThree from '../containers/pages/index/sections/three';
import SectionFour from '../containers/pages/index/sections/four';
import AppointmentSection from '../containers/pages/index/sections/appointment';


export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.INDEX_HEADER_DATA_API as string, { headers: { 'Content-Type': 'application/json' } }),
    axios.get(process.env.INDEX_PAGE_DATA_API as string, { headers: { 'Content-Type': 'application/json' } }),
  ])
  .then(axios.spread((desktop, mobile, header, data) => { 
    if(desktop.status === 200 && mobile.status === 200 && header.status === 200 && data.status === 200)
    {
      const dataToken: IndexPageData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data,
        },
        header: header.data,
        section: data.data
      };

      return dataToken;
    }
  }))
  .catch(err => { 
    throw new Error(err.message); 
  });

  return {
    props: {
      config: data as IndexPageData
    }
  };
};


function Index({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const user = useUser();
  const [ session ] = useSession();

  // USER SCROLL POSITION
  useNavScrollConfig();

  // GUEST SIGN IN
  React.useEffect(() => {
    if (!session) {
      user.guestSignIn();
    }
  }, []);
  
  // USER SIGN IN
  React.useEffect(() => {
    if (session && !user.status.signedIn) {      
      const token: UserInfo = {
        name: session.user?.name as string,
        email: session.user?.email as string,
        image: session.user?.image as string
      };

      user.signIn(token);
    }
  }, [session]);


  /* ---------------------  RENDER  --------------------- */
  return (
    <Layout 
      parent={ page.HOME } 
      title={`Astoria | Home`}
      classes={`relative`}
      styles={ styles }
      desktop={ config.nav.desktop }
      mobile={ config.nav.mobile }
      header={
        <React.Fragment>
          {/* context.introModal && <IntroModal btnClickHandler={ introModalToggle }/> NOTE: change classes check(below) to 'none' @ true*/}
          <IndexHeader headerConfig={ config.header } classes={''}/>
        </React.Fragment>
      }
    >
      <Container main parent={ page.HOME } classes={`relative`}>
        <SectionOne config={ config.section.one }/>
        <SectionTwo config={ config.section.two }/>
        <SectionThree config={ config.section.three }/>
        <SectionFour config={ config.section.four }/>
        <AppointmentSection config={ config.section.appt } />
      </Container>
    </Layout>
  );
};

export default Index;
