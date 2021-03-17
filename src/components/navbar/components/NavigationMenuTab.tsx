import Input from "../../input/Input";
import NavigationMenu from './NavigationMenu';

type Props = {
  parent: string;
  title: string;
  exit?: () => void;
  clicked?: () => void;
};

const NavigationMenuTab: React.FunctionComponent<Props> = ({ parent, title, clicked, exit }): JSX.Element => {
  return (
    <div className={`${ parent }__menu-tab`} >
      <Input
        toggle 
        parent={ parent }
        clicked={ clicked } />
      <div className={`${ parent }__menu-tab--background`}>
        <NavigationMenu 
          parent={ parent }
          exit={ exit } />
      </div> 
      <p className={`${ parent }__menu-tab--text`}>{ title }</p>
    </div>
  );
};

export default NavigationMenuTab;
