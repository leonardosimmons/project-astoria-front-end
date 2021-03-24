import Head from 'next/head';
import React from 'react';
import { AppState } from '../../redux-store/reducers';
import { useSelector } from 'react-redux';
import { page } from '../../utils/keys';

import DesktopNavBar from '../../components/navbar/desktop';
import MobileNavbar from '../../components/navbar/mobile';
import Backdrop from '../../components/backdrop';

type Props = {
  parent: string;
  title: string;
  classes?: string;
  desktopNav?: JSX.Element | HTMLElement;
  mobileNav?: JSX.Element | HTMLElement;
  header?: JSX.Element | HTMLElement;
  footer?: JSX.Element | HTMLElement;
};

const Layout: React.FunctionComponent<Props> = (
  { 
    parent,
    title,
    desktopNav, 
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
        <nav className={`${ parent }__nav ${ parent === page.UNDER_CONSTRUCTION ? 'none': ''}`}>
          { desktopNav || <DesktopNavBar /> }
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
