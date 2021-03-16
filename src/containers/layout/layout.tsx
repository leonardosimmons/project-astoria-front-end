import Head from 'next/head';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux-store/reducers';

import MainNavigationBar from '../../components/navbar/main';
import MobileNavigationBar from '../../components/navbar/mobile';
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
  const showBackdrop = useSelector((state: AppState) => state.backdrop.open);

  return (
    <Fragment>
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
          { mainNav || <MainNavigationBar /> }
          { mobileNav || <MobileNavigationBar /> }
        </nav>
        <header className={`${ parent }__header`}>{ header }</header>
        <main className={`${ parent }__main`}>{ children }</main>
        <footer className={`${ parent }__footer`}>{ footer }</footer>
      </div>
    </Fragment>
  );
};

export default Layout;
