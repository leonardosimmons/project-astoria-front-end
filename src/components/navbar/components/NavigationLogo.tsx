
import Link from 'next/link';

type Props = {
  parent: string;
  logoText: string;
};

const NavigationLogo: React.FunctionComponent<Props> = ({ parent, logoText }): JSX.Element => {
  return (
    <div className={`${ parent }__logo-box`} >
      <Link href="/">
        <p className={`${ parent }__logo`}>{ logoText }</p>
      </Link>
    </div>
  );
};

export default NavigationLogo;