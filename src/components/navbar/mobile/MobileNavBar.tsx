import React from 'react';
import { cpnt } from '../../../utils/keys';
import { NamedLink, NavbarIcon, NavbarMobileMenu } from '../../../utils/types';

import Container from '../../container';
import NavigationMenuTab from '../components/MobileMenuTab';
import Logo from '../components/Logo';
import Icon from '../components/Icon';


const MobileNavigationBar: React.FunctionComponent = (): JSX.Element => {
  const testIconData = [ 
    { link: '/under-construction', src: '/icons/svg/small/briefcase.svg', alt: 'test'},
    { link: '/under-construction', src: '/icons/svg/small/profile.svg', alt: 'test'},
    { link: '/under-construction', src: '/icons/svg/small/search-glass.svg', alt: 'test'}
  ];

  const testTabsList: NamedLink[] = [ 
    { name: 'what\'s new', link: '/under-construction'},
    { name: 'handbags', link: '/under-construction'},
    { name: 'women', link: '/under-construction'},
    { name: 'men', link: '/under-construction'},
    { name: 'mx', link: '/under-construction'},
    { name: 'children', link: '/under-construction'},
    { name: 'jewelry & watches', link: '/under-construction'},
    { name: 'beauty', link: '/under-construction'},
    { name: 'gifts', link: '/under-construction'},
  ];

  const testCreateAccountText: string[] = ['Save your favorite items', 'Browse a personailized list created just for you', 'View your recent orders, track shipping and manage returns'];

  const menu: NavbarMobileMenu = {
    tabs: testTabsList,
    scrollText: testCreateAccountText
  };
 
  return (
    <div className={`${ cpnt.MOBILE_NAVIGATION  } noselect`} >
      <Container main parent={ cpnt.MOBILE_NAVIGATION } >
        <NavigationMenuTab 
          parent={ cpnt.MOBILE_NAVIGATION } 
          title={'Menu'}
          menu={ menu } />
        <Logo
          parent={ cpnt.MOBILE_NAVIGATION }
          logoText={'ASTORIA'} />
        <div className={`${ cpnt.MOBILE_NAVIGATION }__icons`} >
        {
          testIconData.map((icon: NavbarIcon, index: number) => {
            const key = index + 1;
            return (
              <div className={`
                ${ cpnt.MOBILE_NAVIGATION }__icon 
                ${ cpnt.MOBILE_NAVIGATION }__icon--${ key }`} 
                key={ key }>
                <Icon
                  parent={ cpnt.MOBILE_NAVIGATION } 
                  index={ key }
                  src={ icon.src }
                  alt={ icon.alt }
                  link={ icon.link } 
                  width={ 22.5 }
                  height={ 22.5 }
                />
              </div>
            )
          })
        } 
        </div>
      </Container>
    </div>
  );
};

export default MobileNavigationBar;
 