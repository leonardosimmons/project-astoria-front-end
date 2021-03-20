
import { cpnt } from '../../../utils/keys';

type Props = {
  parent?: string;
}

const MainNavigationBar: React.FunctionComponent<Props> = ({ parent, children }): JSX.Element => {
  return (
    <div className={`${ parent }__${ cpnt.DESKTOP_NAVIGATION } ${ cpnt.DESKTOP_NAVIGATION }`}>
      <p>Main Navigation</p>
    </div>
  );
};

export default MainNavigationBar;