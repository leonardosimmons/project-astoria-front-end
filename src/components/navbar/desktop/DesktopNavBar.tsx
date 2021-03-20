
import { cpnt } from '../../../utils/keys';
import Container from '../../container';


const DesktopNavBar: React.FunctionComponent = (): JSX.Element => {
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
        <div className={`${ cpnt.DESKTOP_NAVIGATION }__menu-tabs`}>
          <Container parent={`${ cpnt.DESKTOP_NAVIGATION }__menu-tabs`}>
            <div className={`${ cpnt.DESKTOP_NAVIGATION }__menu-tabs--logo`}>
              {/* take <span/> as child */}
              <span className={``}>ASTORIA</span>
            </div>
            <div className={`${ cpnt.DESKTOP_NAVIGATION }__menu-tabs--tabs`}>
              {/* menu tabs go here */}
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
