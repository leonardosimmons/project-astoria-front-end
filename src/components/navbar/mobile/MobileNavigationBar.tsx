import React from 'react';
import { cpnt } from '../../../utils/keys';
import { NavbarIcon } from '../../../utils/types';

import Container from '../../container';
import NavigationMenuTab from '../components/NavigationMenuTab';
import NavigationLogo from '../components/NavigationLogo';
import NavigationIcon from '../components/NavigationIcon';


const MobileNavigationBar: React.FunctionComponent = (): JSX.Element => {
  const testIconData = [ 
    { link: '/under-construction', src: '/icons/svg/small/briefcase.svg', alt: 'test'},
    { link: '/under-construction', src: '/icons/svg/small/profile.svg', alt: 'test'},
    { link: '/under-construction', src: '/icons/svg/small/search-glass.svg', alt: 'test'}
  ];
 
  return (
    <div className={`${ cpnt.MOBILE_NAVIGATION  } noselect`} >
      <Container main parent={ cpnt.MOBILE_NAVIGATION } >
        <NavigationMenuTab 
          parent={ cpnt.MOBILE_NAVIGATION } 
          title={'Menu'} />
        <NavigationLogo
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
                <NavigationIcon
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
 