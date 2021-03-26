
import Link from 'next/link';
import LogoImage from 'next/image';

import { BaseOptions, Logo } from '../../utils/types';


type Props = Logo & BaseOptions;

const BaseLogo: React.FunctionComponent<Props> = (
  { 
    parent, 
    text, 
    classes, 
    src, 
    width,
    height, 
    index,
    loader,
    styles,
    link = '#',
    loading = 'lazy',
    priority = false,
    alt = 'icon',
    quality = 100,
    layout = 'intrinsic',
    children
  }
): JSX.Element => {
  return (
    <div className={`${ styles && styles.logoBox } ${ index ? styles && `${ styles.logoBox }0${ index }` : ''} ${ parent }--logo-box`} >
      <Link href={ link as string }>
        {
          text ?
          <a className={`${ styles && styles.logo } ${ index ? styles && `${ styles.logo }0${ index }` : ''} ${ parent }--logo ${ classes || '' }`}>{ text }</a>
          :
          src ?
          <LogoImage
            className={`${ styles && styles.logo } ${ index ? styles && `${ styles.logo }0${ index }` : ''} ${ parent }--logo ${ index && `${ parent }--logo-${ index }`} ${ classes }`} 
            layout={ layout }
            quality={ quality }
            src={ src as string } 
            alt={ alt as string } 
            width={ width as string } 
            height={ height as string }
            priority={ priority }
            loading={ loading }
            loader={ loader } />
          :
          children
        }
      </Link>
    </div>
  );
};

export default BaseLogo;