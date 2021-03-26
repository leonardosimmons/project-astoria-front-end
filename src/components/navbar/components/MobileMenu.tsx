import Link from "next/link";
import { BaseOptions, NamedLink, NavbarMobileMenu } from "../../../utils/types";

import Container from "../../container";
import ExitButton from "../../button";
import MenuCarousel from './MobileMenuCarousel';

type Props = {
  parent: string;
  menu: NavbarMobileMenu
  menuStyles?: string;
  tabsBoxStyles?: string;
  tabStyles?: string;
  signInStyles?: string;
} & BaseOptions;

const NavigationMenu: React.FunctionComponent<Props> = (
  { 
    parent, 
    menu, 
    menuStyles, 
    tabsBoxStyles, 
    signInStyles, 
    tabStyles,
    styles 
  }
): JSX.Element => {
  return (
    <div className={`${ styles.menuStyles || ''} ${ parent }__menu`}>
      <Container styles={ styles && styles } parent={`${ parent }__menu`} >
        <ExitButton
          toggle
          text={`x`}
          styles={ styles && styles.btnStyles }
          parent={`${ parent }__menu`}
          toggleFor={ parent }
        />
        <div className={`${ tabsBoxStyles || ''} ${ parent }__menu--tabs`}>
        {
          menu.tabs.map((tab: NamedLink, index: number) => {
            const key = index + 1;
            return (
              <Link href={ tab.link } key={ key }>
                <a className={`${ tabStyles || ''} ${ parent }__menu--tabs--tab ${ parent }__menu--tabs--tab-${ key }`}>
                  { tab.name.toUpperCase() }
                </a>
              </Link>
            )
          })
        }
        </div>
        <MenuCarousel 
          parent={ parent }
          scrollText={ menu.scrollText } 
        />
        <div className={`${ signInStyles || ''} ${ parent }__menu--sign-in`}>
          <Link href="/under-construction">
            <a className={`${ parent }__menu--sign-in--text`}>SIGN IN</a>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NavigationMenu;
