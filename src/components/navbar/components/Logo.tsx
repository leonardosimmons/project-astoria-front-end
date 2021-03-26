
import Link from 'next/link';
import { BaseOptions, Logo } from '../../../utils/types/types';

type Props = Logo & BaseOptions;

const NavigationLogo: React.FunctionComponent<Props> = ({ parent, text, styles }): JSX.Element => {
  return (
    <div className={`${ styles && styles.logoBox } ${ parent }__logo-box`} >
      <Link href="/">
        <h2 className={`${ styles && styles.logo } ${ parent }__logo`}>{ text }</h2>
      </Link>
    </div>
  );
};

export default NavigationLogo;