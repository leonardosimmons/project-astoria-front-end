
import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut, useSession } from 'next-auth/client';
import { AppActions } from '../../../redux-store/action-types';
import { NavbarMenuTab, NavbarMenuTabToken, PageLink } from '../../../utils/types';
import { signOutUser } from '../../../redux-store/user/actions';

import navbarStyles from './styles/Navbar.module.scss';
import infoStyles from './styles/Information.module.scss';
import menuStyles from './styles/Menu.module.scss';
import profileStyles from './styles/Profile.module.scss';
import { strShortener } from '../../../helpers/functions';

import Logo from '../../../components/logo';
import Container from '../../../components/container';
import MenuTab from './components/DesktopMenuTab';
import BaseIcon from '../../../components/icon/Icon';


type Props = {
  config: {
    info: NavbarMenuTabToken[];
    menu: {
      logo: PageLink;
      tabs: NavbarMenuTabToken[];
    };
    profile:  NavbarMenuTab[];
  };
  solid?: boolean;
};

const DesktopNavBar: React.FunctionComponent<Props> = ({ config, solid }): JSX.Element => {
  const [ session, loading ] = useSession();
  const dispatch: React.Dispatch<AppActions> = useDispatch();

  function handleUserSignOut() {
    dispatch(signOutUser());
    signOut();
  };

  return (
    <div id="desktop-navbar" className={`${ navbarStyles.wrapper || '' } noselect solid`}>
      <Container main styles={ navbarStyles }>
        <div className={`${ infoStyles.wrapper || '' }`}>
          <Container styles={ infoStyles }>
            <MenuTab 
              left
              styles={ infoStyles }
              tabs={ config.info as NavbarMenuTabToken[] } />
          </Container>
        </div>
        <div className={ menuStyles.wrapper || '' }>
          <Container styles={ menuStyles }>
            <div id="desktop-logo">
              <Logo 
                classes={'logoFont'}
                styles={ menuStyles } 
                text={ config.menu.logo.name as string }
                link={ config.menu.logo.link as string } />
            </div>
            <MenuTab
              right
              column 
              uppercase
              styles={ menuStyles } 
              tabs={ config.menu.tabs as NavbarMenuTabToken[] } />
          </Container>
        </div>
        <div className={ profileStyles.wrapper || '' }>
          <Container styles={ profileStyles }>
            <div className={profileStyles.tabs}>
              {
                session &&
                <div className={profileStyles.signedInBox}>
                  <span>{'Hello'}</span>
                  <span>{strShortener((session.user?.name as string), 12, '...')}</span>
                  <span>{session.user?.name as string}</span>
                </div>
              }
              <BaseIcon 
                left
                styles={profileStyles}
                link={config.profile[0].link}
                src={config.profile[0].src}
                alt={config.profile[0].alt}
                width={config.profile[0].width}
                height={config.profile[0].height}
              >
              <a className={ profileStyles.tabText } >
                { config.profile[0].name }
              </a>
              </BaseIcon>
              {
                !session ?
                <>
                  <BaseIcon 
                    left
                    styles={profileStyles}
                    link={config.profile[1].link}
                    src={config.profile[1].src}
                    alt={config.profile[1].alt}
                    width={config.profile[1].width}
                    height={config.profile[1].height}
                  >
                  <a className={ profileStyles.tabText } >
                    { config.profile[1].name }
                  </a>
                  </BaseIcon>
                </> 
                :
                <button onClick={handleUserSignOut}>{'Sign Out'}</button>
              }
            </div>
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
