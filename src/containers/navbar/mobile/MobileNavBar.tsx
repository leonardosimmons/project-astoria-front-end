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
import { useCart } from '../../../helpers/hooks/useCart';


const MobileNavBar: React.FunctionComponent = (): JSX.Element => {
  const user = useUser();
  const cart = useCart();
  const [ session ] = useSession();

  return (
    <div id="mobile-navbar" className={`${ mainStyles.wrapper || '' } noselect`} >
      <Container main styles={ mainStyles } >
        <MenuTab 
          tabStyle={ tabStyles }
          menuStyle={ menuStyles }
          carouselStyle={ carouselStyles } 
          title={'Menu'}
        />
        <Logo 
          styles={ mainStyles } 
          text={'ASTORIA'}
          link={ link.HOME } />     
        <div className={ mainStyles.icons || '' }>
          <Icon 
            left
            styles={ mainStyles }
            link={'/cart'}
            src={'/icons/svg/small/briefcase.svg'}
            alt={'cart'}
            width={22.5}
            height={22.5} 
          >
          {cart.items.length > 0
          ? <a className={mainStyles.cartCount}>{<span>{cart.getCount()}</span>}</a>
          : <div className={mainStyles.emptyCart} />
          }
          </Icon>
          {
            session || user.info.name
            ? <button className={'signOut'} onClick={() => user.signOut(user.id as number)}>Sign Out</button>
            : <Icon 
                left
                styles={ mainStyles }
                link={'/sign-in'}
                src={'/icons/svg/small/profile.svg'}
                alt={'photo'}
                width={22.5}
                height={22.5} 
              />
          }
        </div>
      </Container>
    </div>
  );
};

export default MobileNavBar;
