
import { cpnt } from '../../../utils/keys';

type Props = {
  parent?: string;
}

const MainNavigationBar: React.FunctionComponent<Props> = ({ parent, children }): JSX.Element => {
  return (
    <div className={`${ parent }__${ cpnt.MAIN_NAVIGATION } ${ cpnt.MAIN_NAVIGATION }`}>
      <p>Main Navigation</p>
    </div>
  );
};

export default MainNavigationBar;