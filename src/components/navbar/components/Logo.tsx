
import Link from 'next/link';
import { BaseOptions, Logo } from '../../../utils/types/types';

type Props = Logo & BaseOptions;

const NavigationLogo: React.FunctionComponent<Props> = ({ parent, text }): JSX.Element => {
  return (
    <div className={`${ parent }__logo-box`} >
      <Link href="/">
        <h2 className={`${ parent }__logo`}>{ text }</h2>
      </Link>
    </div>
  );
};

export default NavigationLogo;