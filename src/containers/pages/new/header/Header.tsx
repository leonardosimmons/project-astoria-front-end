
import HeaderBox from '../../../../components/header';
import { Header } from '../../../../utils/types';


type Props = {
  config: Header;
  styles: any;
};


const MainHeader: React.FunctionComponent<Props> = ({ config, styles }): JSX.Element => {
  return (
    <HeaderBox 
      config={ config }
      styles={ styles }
    />
  );
};

export default MainHeader;

