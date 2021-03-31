
import { NavbarMenuTab, NavbarMenuTabToken, PageLink } from '../../../utils/types';

import navbarStyles from './styles/Navbar.module.scss';
import infoStyles from './styles/Information.module.scss';
import menuStyles from './styles/Menu.module.scss';
import profileStyles from './styles/Profile.module.scss';

import Logo from '../../logo';
import Container from '../../container';
import MenuTab from './components/DesktopMenuTab';


type Props = {
  config?: {
    info: NavbarMenuTabToken[];
    menu: {
      logo: PageLink;
      tabs: NavbarMenuTabToken[];
    };
    profile:  NavbarMenuTab[];
  };
};

const DesktopNavBar: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <div id="desktop-navbar" className={`${ navbarStyles.wrapper || '' } noselect`}>
      <Container main styles={ navbarStyles }>
        <div className={`${ infoStyles.wrapper || '' }`}>
          <Container styles={ infoStyles }>
            <MenuTab 
              left
              styles={ infoStyles }
              tabs={ config?.info as NavbarMenuTabToken[] } />
          </Container>
        </div>
        <div className={ menuStyles.wrapper || '' }>
          <Container styles={ menuStyles }>
            <Logo 
              classes={'logoFont'}
              styles={ menuStyles } 
              text={ config?.menu.logo.text as string }
              link={ config?.menu.logo.link as string } />
            <MenuTab
              right
              column 
              uppercase
              styles={ menuStyles } 
              tabs={ config?.menu.tabs as NavbarMenuTabToken[] } />
          </Container>
        </div>
        <div className={ profileStyles.wrapper || '' }>
          <Container styles={ profileStyles }>
            <MenuTab
              left 
              styles={ profileStyles }
              tabs={ config?.profile as NavbarMenuTab[] }/>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default DesktopNavBar;
