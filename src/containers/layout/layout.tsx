import Head from 'next/head';
import React from 'react';
import { page } from '../../utils/keys/keys';

import DesktopNavBar from '../../components/navbar/desktop/DesktopNavBar';
import MobileNavbar from '../../components/navbar/mobile/MobileNavBar';

type Props = {
  parent: string;
  title: string;
  styles: any;
  classes?: string;
  desktopData: any;
  mobileData: any;
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
    desktopData, 
    mobileNav, 
    mobileData,
    header,
    footer,
    styles,
    classes,
    children 
  }
): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>{ title }</title>
        <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      </Head>
      <div id="backdrop-root" />
      <div id="modal-root" />
      <div id="app" className={`${ styles.page || '' } ${ classes }`}>
        <nav className={`${ styles.nav || '' } ${ parent }__nav ${ parent === page.UNDER_CONSTRUCTION ? 'none': ''}`}>
          { desktopNav || <DesktopNavBar config={ desktopData } /> }
          { mobileNav || <MobileNavbar config={ mobileData }/> }
        </nav>
        { header && <header className={`${ styles.header || '' } ${ parent }__header`}>{ header }</header> }
        { children && <main className={`${ styles.main || '' } ${ parent }__main`}>{ children }</main> }
        { footer && <footer className={`${ styles.footer || '' } ${ parent }__footer`}>{ footer }</footer> }
        <div id="top-of-site-pixel-anchor" />
        <style global jsx>{`
        html {
          box-sizing: border-box;
          height: 108rem;
          max-width: 216rem;
          margin: 0 auto;
      
          font-size: 62.5%;
        }
        
        body {
          margin: 0 auto;
      
          font-size: 1.6rem;
          font-family: 'Open Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }
        
        a {
          text-decoration: none;
          list-style: none;
        }
      
        h1,
        h2,
        h3,
        h4 {
          font-family: 'Mukta', sans-serif;
        }
        
        #app {
          position: relative;
          max-width: 216rem;
          width: 100%;
          margin: 0 auto;
        }
      
        .logoFont {
          font-family: 'Oswald', sans-serif;
        }
      
        .headerFont {
          font-family: 'Mukta', sans-serif;
        }
      
        .bodyFont {
          font-family: 'Open Sans', sans-serif;
        }
      
        :root 
        {
          --primary-lightest: #ab9ab2;
          --primary-lighter: #9f8ba7;
          --primary-light: #937d9c;
          --primary: #876e91;
          --primary-dark: #7a6383;
          --primary-darker: #6c5874;
          --primary-darkest: #5f4d66;
      
          --primary-100: #c8bccc;
          --primary-200: #beb1c4;
          --primary-300: #ac9bb3;
          --primary-400: #a38faa;
          --primary-500: #9984a2;
          --primary-600: #907999;
          --primary-700: #876e91;
          --primary-800: #725d7b;
          --primary-900: #5d4c64;
      
          --secondary-lightest: #a1b29a;
          --secondary-lighter: #93a78b;
          --secondary-light: #869c7d;
          --secondary: #78916e;
          --secondary-dark: #6c8363;
          --secondary-darker: #607458;
          --secondary-darkest: #54664d;
      
          --secondary-100: #c1ccbc;
          --secondary-200: #b6c4b1;
          --secondary-300: #acbba6;
          --secondary-400: #97aa8f;
          --secondary-500: #8da284;
          --secondary-600: #829979;
          --secondary-700: #78916e;
          --secondary-800: #667b5d;
          --secondary-900: #53644c;
      
          --tertiary-lightest: #b2ab9a;
          --tertiary-lighter: #a79f8b;
          --tertiary-light: #9c937d;
          --tertiary: #91876e;
          --tertiary-dark: #837a63;
          --tertiary-darker: #746c58;
          --tertiary-darkest: #665f4d;
      
          --tertiary-100: #ccc8bc;
          --tertiary-200: #c4beb1;
          --tertiary-300: #b3ac9b;
          --tertiary-400: #aaa38f;
          --tertiary-500: #a29984;
          --tertiary-600: #999079;
          --tertiary-700: #91876e;
          --tertiary-800: #7b725d;
          --tertiary-900: #645d4c;
          --grey-lightest: #f3f3f3;
          --grey-lighter: #e7e7e7;
          --grey-light: #dadada;
          --grey: #cdcdcd;
          --grey-dark: #c0c0c0;
          --grey-darker: #b4b4b4;
          --grey-darkest: #a7a7a7;
      
          --grey-100: #f1f1f1;
          --grey-200: #e7e7e7;
          --grey-300: #dddddd;
          --grey-400: #d3d3d3;
          --grey-500: #cacaca;
          --grey-600: #b6b6b6;
          --grey-700: #a2a2a2;
          --grey-800: #8f8f8f;
          --grey-900: #858585;
      
          --dark-grey-lightest: #8a8a8a;
          --dark-grey-lighter: #7e7e7e;
          --dark-grey-light: #717171;
          --dark-grey: #646464;
          --dark-grey-dark: #575757;
          --dark-grey-darker: #4b4b4b;
          --dark-grey-darkest: #3e3e3e;
      
          --dark-grey-100: #7b7b7b;
          --dark-grey-200: #717171;
          --dark-grey-300: #5e5e5e;
          --dark-grey-400: #545454;
          --dark-grey-500: #4a4a4a;
          --dark-grey-600: #404040;
          --dark-grey-700: #363636;
          --dark-grey-800: #2d2d2d;
          --dark-grey-900: #232323;
      
          --pure-black: #000000;
          --black: #141414;
          
          --pure-white: #ffffff;
          --white: #fcfcfc;
        }
        `}</style>
      </div>
    </React.Fragment>
  );
};

export default Layout;