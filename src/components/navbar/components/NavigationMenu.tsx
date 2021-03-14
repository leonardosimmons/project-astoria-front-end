
type Props = {
  parent: string;
  title: string;
  clicked: () => void;
};

const NavigationMenu: React.FunctionComponent<Props> = ({ parent, title, clicked  }): JSX.Element => {
  return (
    <div className={`${ parent }__menu`} >
      <input className={`${ parent }__menu--checkbox`} id="nav-toggle" type="checkbox" onChange={ clicked }/>
      <label className={`${ parent }__menu--button`} htmlFor="nav-toggle">
        <span className={`${ parent }__menu--button--icon`}>&nbsp;</span>
      </label>
      <div className={`${ parent }__menu--background`}>&nbsp;</div> 
      <p className={`${ parent }__menu--text`}>{ title }</p>
    </div>
  );
};

export default NavigationMenu;