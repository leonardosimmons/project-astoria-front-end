import React from 'react';
import { useSession } from 'next-auth/client';
import { link } from '../../../utils/keys';
import { Icon as _Icon, NavbarMobileMenu } from '../../../utils/types';

import mainStyles from './styles/Navbar.module.scss';
import tabStyles from './styles/MenuTab.module.scss';
import menuStyles from './styles/Menu.module.scss';
import carouselStyles from './styles/Carousel.module.scss';

import { useUser } from '../../../helpers/hooks/useUser';

import Container from '../../../components/container';
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
  const user = useUser();
  const [ session ] = useSession();

  return (
    <div id="mobile-navbar" className={`${ mainStyles.wrapper || '' } noselect`} >
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
          <Icon 
            styles={ mainStyles }
            link={ config.icons[0].link as string }
            src={ config.icons[0].src as string }
            alt={ config.icons[0].alt as string }
            width={ config.icons[0].width as number }
            height={ config.icons[0].height as number } 
          />
          {
            session
            ? <button onClick={() => user.signOut(user.id as number)}>Sign Out</button>
            : <Icon 
                styles={ mainStyles }
                link={ config.icons[1].link as string }
                src={ config.icons[1].src as string }
                alt={ config.icons[1].alt as string }
                width={ config.icons[1].width as number }
                height={ config.icons[1].height as number } 
              />
          }
        </div>
      </Container>
    </div>
  );
};

export default MobileNavBar;
