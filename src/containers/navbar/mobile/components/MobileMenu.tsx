import Link from 'next/link';
import { link } from '../../../../utils/keys';
import { BaseOptions, NamedLink, NavbarMobileMenu } from '../../../../utils/types';

import Container from '../../../../components/container';
import ExitButton from '../../../../components/button';
import MenuCarousel from './MobileMenuCarousel';

type Props = {
  parent: string;
  menu: NavbarMobileMenu;
  carouselStyles: any;
} & BaseOptions;

const NavigationMenu: React.FunctionComponent<Props> = (
  { 
    parent, 
    menu, 
    carouselStyles,
    styles 
  }
): JSX.Element => {
  return (
    <div className={ styles && styles.wrapper }>
      <Container styles={ styles && styles }>
        <ExitButton
          toggle
          text={`x`}
          styles={ styles && styles }
          toggleFor={ parent }
        />
        <div className={ styles && styles.tabs }>
        {
          menu.tabs.map((tab: NamedLink, index: number) => {
            const key = index + 1;
            return (
              <Link href={ tab.link } key={ key }>
                <a className={ styles && styles.tab }>
                  { tab.name.toUpperCase() }
                </a>
              </Link>
            )
          })
        }
        </div>
        <MenuCarousel 
          parent={ parent }
          styles={ carouselStyles }
          scrollText={ menu.scrollText } 
        />
        <div className={ styles && styles.signIn }>
          <Link href={ link.SIGN_IN }>
            <a className={ styles && styles.signInText }>SIGN IN</a>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NavigationMenu;
