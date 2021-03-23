
import Link from 'next/link';
import LogoImage from 'next/image';

import { Image, Parent, Text } from '../../utils/types';


type Props = Omit<Image, "src"|"alt"|"width"|"height"> & {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  index?: number;
} & Parent & Text;

const Logo: React.FunctionComponent<Props> = (
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

export default Logo;