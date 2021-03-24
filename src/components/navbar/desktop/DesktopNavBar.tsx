
import { cpnt, link } from '../../../utils/keys';
import { NavbarMenuTab } from '../../../utils/types';

import Logo from '../../logo';
import Container from '../../container';
import MenuTab from '../components/DesktopMenuTab';


const DesktopNavBar: React.FunctionComponent = (): JSX.Element => {

  const testInfoTabsList: NavbarMenuTab[] = [
    {  name: 'United States', link: link.UNDER_CONSTRUCTION, src: '/icons/svg/small/location.svg', alt: 'location', width: 10, height: 10 },
    {  name: 'English', link: link.UNDER_CONSTRUCTION, src: '/icon', alt: '', width: 10, height: 10 },
    {  name: '+1.877.546.9043', link: link.UNDER_CONSTRUCTION, src: '/icons/svg/small/phone.svg', alt: 'location', width: 10, height: 10 },
  ];
  
  const testMenuTabsList: NavbarMenuTab[] = [ 
    { name: 'what\'s new', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
    { name: 'men', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
    { name: 'women', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
    { name: 'mx', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
    { name: 'handbags', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
    { name: 'gifts', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
  ];
  
  const testProfileTabsList: NavbarMenuTab[] = [
    {  name: 'Cart', link: link.UNDER_CONSTRUCTION, src: '/icons/svg/small/shopping-bag.svg', alt: 'shopping car', width: 10, height: 10 },
    { name: 'Sign In', link: link.UNDER_CONSTRUCTION, src: '/icons/svg/user.svg', alt: 'shopping car', width: 10, height: 10 },
    { name: 'Blog', link: link.UNDER_CONSTRUCTION, src: '/icons/svg/blog.svg', alt: 'shopping car', width: 10, height: 10 },
  ];
  

  return (
    <div className={`${ cpnt.DESKTOP_NAVIGATION } noselect`}>
      <Container main parent={ cpnt.DESKTOP_NAVIGATION }>
        <div className={`${ cpnt.DESKTOP_NAVIGATION }__information`}>
          <Container parent={`${ cpnt.DESKTOP_NAVIGATION }__information`}>
            <MenuTab 
              left
              parent={`${ cpnt.DESKTOP_NAVIGATION }__information`}
              tabs={ testInfoTabsList } />
          </Container>
        </div>
        <div className={`${ cpnt.DESKTOP_NAVIGATION }__menu`}>
          <Container parent={`${ cpnt.DESKTOP_NAVIGATION }__menu`}>
            <Logo 
              parent={`${ cpnt.DESKTOP_NAVIGATION }__menu`} 
              text={'ASTORIA'}
              link={ link.HOME } />
            <MenuTab
              right
              column 
              uppercase
              parent={`${ cpnt.DESKTOP_NAVIGATION }__menu`} 
              tabs={ testMenuTabsList } />
          </Container>
        </div>
        <div className={`${ cpnt.DESKTOP_NAVIGATION }__profile`}>
          <Container parent={`${ cpnt.DESKTOP_NAVIGATION }__profile`}>
            <MenuTab
              left 
              parent={`${ cpnt.DESKTOP_NAVIGATION }__profile`}
              tabs={ testProfileTabsList }/>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default DesktopNavBar;
