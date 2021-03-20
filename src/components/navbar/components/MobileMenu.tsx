import Link from "next/link";
import { NamedLink, NavbarMobileMenu } from "../../../utils/types";

import Container from "../../container";
import ExitButton from "../../button";
import MenuCarousel from './MobileMenuCarousel';

type Props = {
  parent: string;
  menu: NavbarMobileMenu
};

const NavigationMenu: React.FunctionComponent<Props> = ({ parent, menu }): JSX.Element => {
  return (
    <div className={`${ parent }__menu`}>
      <Container parent={`${ parent }__menu`} >
        <ExitButton
          toggle
          text={`x`}
          parent={`${ parent }__menu`}
          toggleFor={ parent }
        />
        <div className={`${ parent }__menu--tabs`}>
        {
          menu.tabs.map((tab: NamedLink, index: number) => {
            const key = index + 1;
            return (
              <Link href={ tab.link } key={ key }>
                <a className={`${ parent }__menu--tabs--tab ${ parent }__menu--tabs--tab-${ key }`}>
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
        <div className={`${ parent }__menu--sign-in`}>
          <Link href="/under-construction">
            <a className={`${ parent }__menu--sign-in--text`}>SIGN IN</a>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NavigationMenu;
