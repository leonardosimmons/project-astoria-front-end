import Input from "../../input/Input";
import NavigationMenu from './NavigationMenu';

type Props = {
  parent: string;
  title: string;
  clicked: () => void;
};

const NavigationMenuTab: React.FunctionComponent<Props> = ({ parent, title, clicked }): JSX.Element => {
  return (
    <div className={`${ parent }__menu-tab`} >
      <Input
        toggle 
        parent={ parent }
        clicked={ clicked } />
      <div className={`${ parent }__menu-tab--background`}>
        &nbsp;
        <NavigationMenu />
      </div> 
      <p className={`${ parent }__menu-tab--text`}>{ title }</p>
    </div>
  );
};

export default NavigationMenuTab;
