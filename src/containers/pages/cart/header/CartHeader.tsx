
import { Header } from '../../../../utils/types/types';

import styles from './CartHeader.module.scss';

import BaseHeader from '../../../../components/header';

type Props = {
  config: Header;
};


const cartHeader: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <BaseHeader
      type={'main'}
      config={ config }
      styles={ styles }
    />
  );
};

export default cartHeader;