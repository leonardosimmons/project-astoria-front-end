
import { cpnt } from '../../../utils/keys';

interface IProps {
  parent?: string;

}

const MobileNavigationBar: React.FunctionComponent<IProps> = ({ parent, children }): JSX.Element => {
  return (
    <div className={`${ parent }__${ cpnt.MOBILE_NAVIGATION } ${ cpnt.MOBILE_NAVIGATION }`}>
      <p>Mobile Navigation</p>
    </div>
  );
};

export default MobileNavigationBar;