import { Fragment } from 'react';
import Head from 'next/head';

interface IProps {
  parent: string;
  title: string;
  classes?: string;
  mainNav?: JSX.Element;
  mobileNav?: JSX.Element;
  header?: JSX.Element;
  footer?: JSX.Element;
};

const Layout: React.FunctionComponent<IProps> = (
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
  return (
    <Fragment>
      <Head>
        <title>{ title }</title>
        <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      </Head>
      <div id="app" className={`${ classes }`}>
        <nav className={`${ parent }__nav`}>
          { mainNav }
          { mobileNav }
        </nav>
        <header className={`${ parent }__header`}>{ header }</header>
        <main className={`${ parent }__main`}>{ children }</main>
        <footer className={`${ parent }__footer`}>{ footer }</footer>
      </div>
    </Fragment>
  );
};

export default Layout;