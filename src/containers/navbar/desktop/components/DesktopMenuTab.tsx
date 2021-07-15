
import { link } from '../../../../utils/keys';
import { BaseOptions, Direction, NavbarMenuTab } from '../../../../utils/types';
import Icon from '../../../../components/icon';

type Props = & BaseOptions & Direction;

const tabs: Array<NavbarMenuTab> = [
  { name: 'what\'s new', link: link.WHATS_NEW, src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
  { name: 'men', link: link.MEN, src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
  { name: 'women', link: link.WOMEN, src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
  { name: 'handbags', link: link.HANDBAGS, src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
  { name: 'gifts', link: link.GIFTS, src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
];

const DesktopMenuTab: React.FunctionComponent<Props> = (
  { 
    styles,
    classes, 
    uppercase, 
    column,
    right,
    left, 
  }
): JSX.Element => {
  return (
    <div className={ styles && styles.tabs || '' }>
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
            styles={ styles && styles }
            classes={ classes }
            link={ tab.link }
            src={ tab.src as string }
            alt={ tab.alt as string }
            width={ tab.width as string }
            height={ tab.height as string }
            >
            <a className={ styles && styles.tabText } >
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