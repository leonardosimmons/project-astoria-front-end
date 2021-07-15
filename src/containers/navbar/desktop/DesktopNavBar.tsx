
import React from 'react';
import { useSession } from 'next-auth/client';
import { NavbarMenuTab, NavbarMenuTabToken, PageLink } from '../../../utils/types';

import navbarStyles from './styles/Navbar.module.scss';
import infoStyles from './styles/Information.module.scss';
import menuStyles from './styles/Menu.module.scss';
import profileStyles from './styles/Profile.module.scss';

import { strShortener } from '../../../helpers/functions';
import { useUser } from '../../../helpers/hooks/useUser';
import { useCart } from '../../../helpers/hooks/useCart';

import Logo from '../../../components/logo';
import Container from '../../../components/container';
import MenuTab from './components/DesktopMenuTab';
import BaseIcon from '../../../components/icon/Icon';


type Props = {
  solid?: boolean;
};

const DesktopNavBar: React.FunctionComponent<Props> = ({ solid }): JSX.Element => {
  const user = useUser();
  const cart = useCart();
  const [ session ] = useSession();

  return (
    <div id="desktop-navbar" className={`${ navbarStyles.wrapper || '' } noselect solid`}>
      <Container main styles={ navbarStyles }>
        <div className={`${ infoStyles.wrapper || '' }`}>
          <Container styles={ infoStyles }>
            <BaseIcon
              left
              styles={infoStyles}
              link={'/'}
              src={'/icons/svg/small/phone.svg'}
              alt={'phone number'}
              width={10}
              height={10}
              >
              <a className={infoStyles.tabText}>
                {'+1.877.546.9043'}
              </a>
            </BaseIcon>
          </Container>
        </div>
        <div className={ menuStyles.wrapper || '' }>
          <Container styles={ menuStyles }>
            <div id="desktop-logo">
              <Logo 
                classes={'logoFont'}
                styles={ menuStyles } 
                text={'ASTORIA'}
                link={'/'} />
            </div>
            <MenuTab
              right
              column 
              uppercase
              styles={ menuStyles } 
            />
          </Container>
        </div>
        <div className={ profileStyles.wrapper || '' }>
          <Container styles={ profileStyles }>
            <div className={profileStyles.tabs}>
              {
                session &&
                <div className={profileStyles.signedInBox}>
                  <span>{session.loading ? 'loading...' : 'Hello'}</span>
                  <span>{strShortener(user.info.name, 12, '...')}</span>
                  <span>{user.info.name}</span>
                </div>
              }
              <BaseIcon 
                left
                styles={profileStyles}
                link={'/cart'}
                src={'/icons/svg/small/shopping-bag.svg'}
                alt={'shopping cart'}
                width={10}
                height={10}
              >
              {cart.items.length > 0
              ? <a className={profileStyles.cartCount}>{cart.getCount()}</a>
              : <a className={ profileStyles.tabText }>{'Cart'}</a>
              }
              </BaseIcon>
              {
                !session ?
                <>
                  <BaseIcon 
                    left
                    styles={profileStyles}
                    link={'/sign-in'}
                    src={'/icons/svg/user.svg'}
                    alt={'icon'}
                    width={10}
                    height={10}
                  >
                  <a className={ profileStyles.tabText } >
                    {'Sign In'}
                  </a>
                  </BaseIcon>
                </> 
                :
                <button onClick={() => user.signOut(user.id as number)}>{'Sign Out'}</button>
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
