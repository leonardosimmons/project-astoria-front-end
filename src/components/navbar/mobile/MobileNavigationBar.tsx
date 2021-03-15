
import { cpnt } from '../../../utils/keys';
import MainContainer from '../../container/MainContainer';
import NavigationMenu from '../components/NavigationMenu';
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
      <MainContainer parent={ cpnt.MOBILE_NAVIGATION } >
        <NavigationMenu 
          parent={ cpnt.MOBILE_NAVIGATION } 
          title={'Menu'} 
          clicked={ () => console.log('clicked') }/>
        <NavigationLogo
          parent={ cpnt.MOBILE_NAVIGATION }
          logoText={'ASTORIA'} />
        <div className={`${ cpnt.MOBILE_NAVIGATION }__icons`} >
        {
          testIconData.map((data, index) => {
            const key = index + 1;
            return (
              <div className={`
                ${ cpnt.MOBILE_NAVIGATION }__icon 
                ${ cpnt.MOBILE_NAVIGATION }__icon--${ key }`} 
                key={ key }>
                <NavigationIcon
                  parent={ cpnt.MOBILE_NAVIGATION } 
                  index={ key }
                  src={ data.src }
                  alt={ data.alt }
                  link={ data.link } 
                  width={ 22.5 }
                  height={ 22.5 }
                />
              </div>
            )
          })
        } 
        </div>
      </MainContainer>
    </div>
  );
};

export default MobileNavigationBar;
 