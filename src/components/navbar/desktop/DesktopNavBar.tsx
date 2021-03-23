
import Link from 'next/link';
import { cpnt } from '../../../utils/keys';
import { NamedLink } from '../../../utils/types';
import Container from '../../container';
import Logo from '../../logo/Logo';


const DesktopNavBar: React.FunctionComponent = (): JSX.Element => {
  const testTabsList: NamedLink[] = [ 
    { name: 'what\'s new', link: '/under-construction'},
    { name: 'men', link: '/under-construction'},
    { name: 'women', link: '/under-construction'},
    { name: 'mx', link: '/under-construction'},
    { name: 'handbags', link: '/under-construction'},
    { name: 'gifts', link: '/under-construction'},
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
              text={'ASTORIA'} />
            <div className={`${ cpnt.DESKTOP_NAVIGATION }__menu--tabs`}>
              {
                testTabsList.map((tab: NamedLink, index: number) => {
                  const key = index + 1;
                  return (
                    <Link href={ tab.link } key={ key }>
                      <a className={`
                        ${ cpnt.DESKTOP_NAVIGATION }__menu--tabs--tab 
                        ${ cpnt.DESKTOP_NAVIGATION }__menu--tabs--tab-${ key }`}
                      >
                        { tab.name.toUpperCase() }
                      </a>
                    </Link>
                  )
                })
              }
            </div>
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
