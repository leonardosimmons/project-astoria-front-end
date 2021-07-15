
import Link from 'next/link';
import { link } from '../../../../utils/keys';
import { BaseOptions, NamedLink, NavbarMobileMenu } from '../../../../utils/types';

import Container from '../../../../components/container';
import ExitButton from '../../../../components/button';
import MenuCarousel from './MobileMenuCarousel';

type Props = {
  parent: string;
  carouselStyles: any;
} & BaseOptions;


const menu: NavbarMobileMenu = {
  tabs: 
  [
    { name: 'what\'s new', link: link.WHATS_NEW },
    { name: 'men', link: link.MEN },
    { name: 'women', link: link.WOMEN },
    { name: 'handbags', link: link.HANDBAGS },
    { name: 'gifts', link: link.GIFTS },
  ],
  scrollText: ['Save your favorite items', 'Browse a personailized list created just for you', 'View your recent orders, track shipping and manage returns']
};


const NavigationMenu: React.FunctionComponent<Props> = (
  { 
    parent,
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
