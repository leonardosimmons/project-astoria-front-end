
import { Header } from '../../../../utils/types';
import styles from './Header.module.scss';

import BaseHeader from '../../../../components/header';


type Props = {
  config: Header;
};

const WomensPageHeader: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <BaseHeader 
      type={'main'}
      config={ config }
      styles={ styles }
    />
  );
};

export default WomensPageHeader;
