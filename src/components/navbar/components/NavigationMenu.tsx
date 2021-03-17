import Link from "next/link";
import { NavbarMenuTab } from "../../../utils/types";

import ExitButton from "../../button";
import Container from "../../container";

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
  ]

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
                  { tab.title }
                </a>
              </Link>
            )
          })
        }
        </div>
        <div className={`${ parent }__menu--account`}></div>
        <div className={`${ parent }__menu--others`}></div>
      </Container>
    </div>
  );
};

export default NavigationMenu;
