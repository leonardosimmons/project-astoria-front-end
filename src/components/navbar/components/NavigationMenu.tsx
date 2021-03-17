import Link from "next/link";
import { NavbarMenuToken } from "../../../utils/types";
import ExitButton from "../../button";
import Container from "../../container";

type Props = {
  parent: string;
  exit?: () => void;
}

const NavigationMenu: React.FunctionComponent<Props> = ({ parent, exit }): JSX.Element => {
 
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
          clicked={ exit }
        />
        <div className={`${ parent }__menu--tabs`}>
        {
          testTabsList.map((tab: NavbarMenuToken, index: number) => ( 
            <Link href={ tab.link } key={ index }>
              <a className={`${ parent }__menu--tabs--tab ${ parent }__menu--tabs--tab-${ index + 1 }`}>
                { tab.title }
              </a>
            </Link>
          ))
        }
        </div>
        <div className={`${ parent }__menu--account`}></div>
        <div className={`${ parent }__menu--others`}></div>
      </Container>
    </div>
  );
};

export default NavigationMenu;
