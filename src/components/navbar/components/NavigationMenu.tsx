import NavigationButton from './NavigationButton';

type Props = {
  parent: string;
  title: string;
};

const NavigationMenu: React.FunctionComponent<Props> = ({ parent, title  }): JSX.Element => {
  return (
    <div className={`${ parent }__menu`} >
      <span className={`${ parent }__menu--button`}>&nbsp;</span>
      <p className={`${ parent }__menu--text`}>{ title }</p>
    </div>
  );
};

export default NavigationMenu;