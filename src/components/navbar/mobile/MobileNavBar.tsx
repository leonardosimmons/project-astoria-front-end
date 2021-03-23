import React from 'react';
import { cpnt } from '../../../utils/keys';
import { Icon, Image, NamedLink, NavbarMobileMenu } from '../../../utils/types';

import Container from '../../container';
import NavigationMenuTab from '../components/MobileMenuTab';
import Logo from '../../../components/logo';
import NavIcon from '../../../components/icon';


const MobileNavBar: React.FunctionComponent = (): JSX.Element => {
  const testIconData: Partial<Icon>[] = [ 
    { link: '/under-construction', src: '/icons/svg/small/briefcase.svg', alt: 'test', width: 22.5, height: 22.5 },
    { link: '/under-construction', src: '/icons/svg/small/profile.svg', alt: 'test', width: 22.5, height: 22.5  },
    { link: '/under-construction', src: '/icons/svg/small/search-glass.svg', alt: 'test', width: 22.5, height: 22.5 }
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
          text={'ASTORIA'} />     
        <div className={`${ cpnt.MOBILE_NAVIGATION }__icons`} >
        {
          testIconData.map((icon: Partial<Icon>, index: number) => {
            const key = index + 1;
            return (
              <NavIcon 
                key={ index }
                index={ key }
                parent={`${ cpnt.MOBILE_NAVIGATION }__icons`} 
                link={ icon.link }
                src={ icon.src as string }
                alt={ icon.alt as string }
                width={ icon.width as number }
                height={ icon.height as number } 
              />
            )
          })
        } 
        </div>
      </Container>
    </div>
  );
};

export default MobileNavBar;
