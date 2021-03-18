import Link from "next/link";
import { NavbarMenuTab } from "../../../utils/types";

import { cpnt } from "../../../utils/keys/keys";
import Text from "../../text";
import Container from "../../container";
import ExitButton from "../../button";
import CreateAccountButton from "../../button";
import Carousel from "../../../containers/carousel";

import NavigationMenuCarousel from './NavigationMenuCarousel';

type Props = {
  parent: string;
}

const NavigationMenu: React.FunctionComponent<Props> = ({ parent }): JSX.Element => {
 
  const testTabsList = [ 
    { title: 'what\'s new', link: '/under-construction'},
    { title: 'handbags', link: '/under-construction'},
    { title: 'women', link: '/under-construction'},
    { title: 'men', link: '/under-construction'},
    { title: 'mx', link: '/under-construction'},
    { title: 'children', link: '/under-construction'},
    { title: 'jewelry & watches', link: '/under-construction'},
    { title: 'beauty', link: '/under-construction'},
    { title: 'gifts', link: '/under-construction'},
  ];

  const testCreateAccountText = ['Save your favorite items', 'Browse a personailized list created just for you', 'View your recent orders, track shipping and manage returns'];

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
          testTabsList.map((tab: NavbarMenuTab, index: number) => {
            const key = index + 1;
            return (
              <Link href={ tab.link } key={ key }>
                <a className={`${ parent }__menu--tabs--tab ${ parent }__menu--tabs--tab-${ key }`}>
                  { tab.title.toUpperCase() }
                </a>
              </Link>
            )
          })
        }
        </div>
        <NavigationMenuCarousel 
          parent={ parent } 
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
