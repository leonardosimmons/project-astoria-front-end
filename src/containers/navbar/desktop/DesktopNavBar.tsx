
import { NavbarMenuTab, NavbarMenuTabToken, PageLink } from '../../../utils/types';

import navbarStyles from './styles/Navbar.module.scss';
import infoStyles from './styles/Information.module.scss';
import menuStyles from './styles/Menu.module.scss';
import profileStyles from './styles/Profile.module.scss';

import Logo from '../../../components/logo';
import Container from '../../../components/container';
import MenuTab from './components/DesktopMenuTab';


type Props = {
  config?: {
    info: NavbarMenuTabToken[];
    menu: {
      logo: PageLink;
      tabs: NavbarMenuTabToken[];
    };
    profiles:  NavbarMenuTab[];
  };
  solid?: boolean;
};

const DesktopNavBar: React.FunctionComponent<Props> = ({ config, solid }): JSX.Element => {
  return (
    <div id="desktop-navbar" className={`${ navbarStyles.wrapper || '' } noselect solid`}>
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
            <div id="desktop-logo">
              <Logo 
                classes={'logoFont'}
                styles={ menuStyles } 
                text={ config?.menu.logo.name as string }
                link={ config?.menu.logo.link as string } />
            </div>
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
              tabs={ config?.profiles as NavbarMenuTab[] }/>
          </Container>
        </div>
      </Container>
      <style jsx>{`
      #desktop-navbar {
        background: ${ solid ? '#000000' : '' };
      `}</style>
    </div>
  );
};

export default DesktopNavBar;
