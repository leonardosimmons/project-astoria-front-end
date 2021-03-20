import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux-store/reducers';

import DesktopNavBar from '../../components/navbar/desktop';
import MobileNavbar from '../../components/navbar/mobile';
import Backdrop from '../../components/backdrop';

type Props = {
  parent: string;
  title: string;
  classes?: string;
  mainNav?: JSX.Element;
  mobileNav?: JSX.Element;
  header?: JSX.Element;
  footer?: JSX.Element;
};

const Layout: React.FunctionComponent<Props> = (
  { 
    parent,
    title,
    mainNav, 
    mobileNav, 
    header,
    footer,
    classes,
    children 
  }
): JSX.Element => {
  const showBackdrop: boolean = useSelector((state: AppState) => state.backdrop.open);

  return (
    <React.Fragment>
      <Head>
        <title>{ title }</title>
        <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      </Head>
      <div id="backdrop-root" />
      <div id="modal-root" />
      <div id="app" className={`${ classes }`}>
        { showBackdrop && <Backdrop /> }
        <nav className={`${ parent }__nav`}>
          { mainNav || <DesktopNavBar parent={ parent }/> }
          { mobileNav || <MobileNavbar /> }
        </nav>
        { header && <header className={`${ parent }__header`}>{ header }</header> }
        { children && <main className={`${ parent }__main`}>{ children }</main> }
        { footer && <footer className={`${ parent }__footer`}>{ footer }</footer> }
      </div>
    </React.Fragment>
  );
};

export default Layout;
