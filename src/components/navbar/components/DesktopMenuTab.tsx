import { BaseOptions, NavbarMenuTab } from '../../../utils/types';
import MenuTab from '../../icon';

type Props = {
  tabs: NavbarMenuTab[];
} & BaseOptions;

const DesktopMenuTab: React.FunctionComponent<Props> = ({ parent, classes, tabs }): JSX.Element => {
  return (
    <div className={`${ parent }__menu--tabs`}>
    {
      tabs.map((tab: NavbarMenuTab, index: number) => {
        const key = index + 1;
        return (
          <MenuTab
            right
            key={ key }
            index={ key }
            classes={ classes }
            link={ tab.link }
            src={ tab.src as string }
            alt={ tab.alt as string }
            width={ tab.width as string }
            height={ tab.height as string }
            parent={`${ parent }__menu--tabs`}
            >
            <a className={`
              ${ parent }__menu--tabs--tab 
              ${ parent }__menu--tabs--tab-${ key }`}
            >
              { tab.name!.toUpperCase() }
            </a>
          </MenuTab>
        )
      })
    }
  </div>
  );
};

export default DesktopMenuTab;