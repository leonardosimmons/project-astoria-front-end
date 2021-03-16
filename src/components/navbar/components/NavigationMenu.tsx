import Input from "../../input";

type Props = {
  parent: string;
  title: string;
  clicked: () => void;
};

const NavigationMenu: React.FunctionComponent<Props> = ({ parent, title, clicked  }): JSX.Element => {
  return (
    <div className={`${ parent }__menu`} >
      <Input
        toggle 
        parent={ parent }
        clicked={ clicked } />
      <div className={`${ parent }__menu--background`}>
        &nbsp;
        { /* place navbar dropdown menu(modal) here*/ }
      </div> 
      <p className={`${ parent }__menu--text`}>{ title }</p>
    </div>
  );
};

export default NavigationMenu;
