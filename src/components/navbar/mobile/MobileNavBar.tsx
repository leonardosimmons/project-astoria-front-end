import React from 'react';
import { link } from '../../../utils/keys';
import { Icon as _Icon, NamedLink, NavbarMobileMenu } from '../../../utils/types';

import mainStyles from './styles/Navbar.module.scss';
import tabStyles from './styles/MenuTab.module.scss';
import menuStyles from './styles/Menu.module.scss';
import carouselStyles from './styles/Carousel.module.scss';

import Container from '../../container';
import MenuTab from './components/MobileMenuTab';
import Logo from '../../../components/logo';
import Icon from '../../../components/icon';

type Props = {
  config: {
    icons: _Icon[];
    menu: NavbarMobileMenu;
  }
}

const MobileNavBar: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  const testIconData: _Icon[] = [ 
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

  console.log(config)

  return (
    <div className={`${ mainStyles.wrapper } noselect`} >
      <Container main styles={ mainStyles } >
        <MenuTab 
          tabStyle={ tabStyles }
          menuStyle={ menuStyles }
          carouselStyle={ carouselStyles } 
          title={'Menu'}
          menu={ menu } />
        <Logo 
          styles={ mainStyles } 
          text={'ASTORIA'}
          link={ link.HOME } />     
        <div className={ mainStyles.icons }>
        {
          testIconData.map((icon: _Icon, index: number) => {
            const key = index + 1;
            return (
              <Icon 
                key={ index }
                index={ key }
                styles={ mainStyles }
                link={ icon.link as string }
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
