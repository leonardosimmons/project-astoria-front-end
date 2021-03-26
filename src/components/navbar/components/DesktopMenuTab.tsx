import { BaseOptions, Direction, NavbarMenuTab } from '../../../utils/types';
import Icon from '../../icon';

type Props = {
  tabs: NavbarMenuTab[];
} & BaseOptions & Direction;

const DesktopMenuTab: React.FunctionComponent<Props> = (
  { 
    parent,
    styles,
    classes, 
    tabs, 
    uppercase, 
    column,
    right,
    left, 
  }
): JSX.Element => {
  return (
    <div className={`${ styles && styles.boxStyles } ${ parent }--tabs`}>
    {
      tabs.map((tab: NavbarMenuTab, index: number) => {
        const key = index + 1;
        return (
          <Icon
            left={ left ? true : false }
            right={ right ? true : false }
            column={ column ? true : false }
            key={ key }
            index={ key }
            styles={ styles }
            classes={ classes }
            link={ tab.link }
            src={ tab.src as string }
            alt={ tab.alt as string }
            width={ tab.width as string }
            height={ tab.height as string }
            parent={`${ parent }--tabs`}
            >
            <a className={`
              ${ styles && styles.textStyles }
              ${ parent }--tabs--tab 
              ${ parent }--tabs--tab-${ key }`}
            >
              { uppercase ? tab.name!.toUpperCase() : tab.name }
            </a>
          </Icon>
        )
      })
    }
  </div>
  );
};

export default DesktopMenuTab;