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
  };
};

const MobileNavBar: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <div className={`${ mainStyles.wrapper || '' } noselect`} >
      <Container main styles={ mainStyles } >
        <MenuTab 
          tabStyle={ tabStyles }
          menuStyle={ menuStyles }
          carouselStyle={ carouselStyles } 
          title={'Menu'}
          menu={ config.menu } />
        <Logo 
          styles={ mainStyles } 
          text={'ASTORIA'}
          link={ link.HOME } />     
        <div className={ mainStyles.icons || '' }>
        {
          config.icons.map((icon: _Icon, index: number) => {
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
