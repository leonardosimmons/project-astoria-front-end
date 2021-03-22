import React from 'react';
import Link from 'next/link';
import ContentBox from '../box';
import IconImage from 'next/image';

import { Image } from '../../utils/types';


type Props = Image & {
  parent: string;
  left?: boolean;
  right?: boolean;
  index?: string | number;
};

const Icon: React.FunctionComponent<Props> = (
  { 
    parent, 
    src, 
    width,
    height, 
    left, 
    right, 
    index,
    classes,
    link,
    loader,
    alt = 'icon',
    loading = 'lazy',
    priority = false,
    quality = 100,
    layout = 'intrinsic',
    children 
  }
): JSX.Element => {
  return (
    // change to content-box
    <ContentBox parent={`${ parent }--icon`} index={ index as number } key={ index }>
    {
    left && 
    <Link href={ link as string }>
      <div>
        <IconImage 
          className={`${ parent }--icon ${ index && `${ parent }--icon-${ index }`} ${ classes }`} 
          layout={ layout }
          quality={ quality }
          src={ src } 
          alt={ alt } 
          width={ width as number } 
          height={ height as number }
          priority={ priority }
          loading={ loading }
          loader={ loader } />
        { children }
      </div>
    </Link>
    }
    {
    !left && !right &&
    <Link href={ link as string }>
      <div>
        <IconImage 
          className={`${ parent }--icon ${ index && `${ parent }--icon-${ index }`}`} 
          layout={ layout }
          quality={ quality }
          src={ src } 
          alt={ alt } 
          width={ width as number } 
          height={ height as number }
          priority={ priority }
          loading={ loading }
          loader={ loader } />
      </div>
    </Link>
    }
    {
    right && 
    <Link href={ link as string }>
      <div>
        { children }
        <IconImage 
          className={`${ parent }--icon ${ index && `${ parent }--icon-${ index }`}`} 
          layout={ layout }
          quality={ quality }
          src={ src } 
          alt={ alt } 
          width={ width as number } 
          height={ height as number }
          priority={ priority }
          loading={ loading }
          loader={ loader } />
      </div>
    </Link>
    }
    </ContentBox>
  );
};

export default Icon;
