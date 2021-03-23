
import { cpnt, link } from '../../../utils/keys';
import { NavbarMenuTab } from '../../../utils/types';
import Container from '../../container';

import Logo from '../../logo';
import MenuTab from '../components/DesktopMenuTab';


const DesktopNavBar: React.FunctionComponent = (): JSX.Element => {
  const testTabsList: NavbarMenuTab[] = [ 
    { name: 'what\'s new', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
    { name: 'men', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
    { name: 'women', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
    { name: 'mx', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
    { name: 'handbags', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
    { name: 'gifts', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
  ];

  return (
    <div className={`${ cpnt.DESKTOP_NAVIGATION } noselect`}>
      <Container main parent={ cpnt.DESKTOP_NAVIGATION }>
        <div className={`${ cpnt.DESKTOP_NAVIGATION }__information`}>
          <Container parent={`${ cpnt.DESKTOP_NAVIGATION }__information`}>
            {/* .map() <span/> */}
            {/* nav icon */}
            <span className={'mx-2'}>{`United States`}</span>
            <span className={'mx-2'}>{`English`}</span>
            {/* telephone icon */}
            <span className={'mx-2'}>{`+1.877.546.9043`}</span>
          </Container>
        </div>
        <div className={`${ cpnt.DESKTOP_NAVIGATION }__menu`}>
          <Container parent={`${ cpnt.DESKTOP_NAVIGATION }__menu`}>
            <Logo 
              parent={`${ cpnt.DESKTOP_NAVIGATION }__menu`} 
              text={'ASTORIA'}
              link={ link.HOME } />
            <MenuTab 
              parent={`${ cpnt.DESKTOP_NAVIGATION }__menu`} 
              tabs={ testTabsList } />
          </Container>
        </div>
        <div className={`${ cpnt.DESKTOP_NAVIGATION }__profile`}>
          <Container parent={`${ cpnt.DESKTOP_NAVIGATION }__profile`}>
            <span className={'mx-2'}>{`Sign In`}</span>
            {/* nav icon */}
            {/* telephone icon */}
            <span className={'mx-2'}>{`Blog`}</span>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default DesktopNavBar;


/*

<div className={`${ cpnt.DESKTOP_NAVIGATION }__menu--tabs`}>
  {
    testTabsList.map((tab, index: number) => {
      const key = index + 1;
      return (
        <Icon
          right
          key={ key }
          index={ key }
          classes={'filter-white'}
          src={ tab.src }
          alt={ tab.alt }
          width={ tab.width }
          height={ tab.height }
          link={ tab.link }
          parent={`${ cpnt.DESKTOP_NAVIGATION }__menu--tabs`}
          >
          <a className={`
            ${ cpnt.DESKTOP_NAVIGATION }__menu--tabs--tab 
            ${ cpnt.DESKTOP_NAVIGATION }__menu--tabs--tab-${ key }`}
          >
            { tab.name.toUpperCase() }
          </a>
        </Icon>
      )
    })
  }
</div>
*/