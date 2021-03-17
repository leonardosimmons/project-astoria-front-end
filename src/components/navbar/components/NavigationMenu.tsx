import Link from "next/link";
import { cpnt } from "../../../utils/keys";
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
    <div className={`${ parent }__menu bg-red-400 w-full h-95/100 m-auto`}>
      <Container parent={`${ parent }__menu`} classes={``}>
        <div className={` w-95/100 flex justify-end py-2`} >
          <label 
            htmlFor={`${ cpnt.MOBILE_NAVIGATION }__toggle`}
            className={`text-2xl`} 
            onClick={ exit }>
              X
          </label>
        </div>
        <div className={`${ parent }__menu--tabs flex flex-col justify-center items-center text-5xl`}>
        {
          testTabsList.map((tabs, index) => ( 
            <Link href={ tabs.link } key={ index }>
              <a className={`my-3`}>{ tabs.title }</a>
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