import { BaseOptions, NavbarMobileMenu } from "../../../../utils/types/types";
import Input from "../../../input/Input";
import NavigationMenu from './MobileMenu';

type Props = {
  title: string;
  menu: NavbarMobileMenu;
  tabStyle: any;
  menuStyle: any;
  carouselStyle: any;
  clicked?: () => void;
} & BaseOptions;

const NavigationMenuTab: React.FunctionComponent<Props> = (
  { 
    parent, 
    title, 
    menu, 
    tabStyle, 
    menuStyle, 
    carouselStyle, 
    clicked 
  }
): JSX.Element => {
  return (
    <div className={ tabStyle.tab } >
      <Input
        toggle
        styles={ tabStyle } 
        parent={ parent }
        clicked={ clicked } />
      <div className={ tabStyle.background }>
        <NavigationMenu 
          parent={ parent as string }
          styles={ menuStyle }
          carouselStyles={ carouselStyle }
          menu={ menu } />
      </div> 
      <p className={ tabStyle.tabText }>{ title }</p>
    </div>
  );
};

export default NavigationMenuTab;
