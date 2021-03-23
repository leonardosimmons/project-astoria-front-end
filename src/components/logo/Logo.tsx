
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
    <div className={`${ parent }--logo-box`} >
      <Link href={ link as string }>
        {
          text ?
          <a className={`${ parent }--logo ${ classes || '' }`}>{ text }</a>
          :
          src ?
          <LogoImage
            className={`${ parent }--logo ${ index && `${ parent }--logo-${ index }`} ${ classes }`} 
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