import React from 'react';
import Link from 'next/link';
import ContentBox from '../box';
import Image from 'next/image';

import { Icon, BaseOptions } from '../../utils/types';


type Props = Icon & BaseOptions;

const BaseIcon: React.FunctionComponent<Props> = (
  { 
    parent, 
    src, 
    width,
    height, 
    left, 
    right, 
    index,
    classes,
    column,
    link,
    loader,
    priority = false,
    alt = 'icon',
    loading = 'lazy',
    quality = 100,
    layout = 'intrinsic',
    children 
  }
): JSX.Element => {
  return (
    <ContentBox parent={`${ parent }--icon`} index={ index as number } key={ index }>
    {
    left && 
    <Link href={ link as string }>
      <div className={`${ column ? ' flex flex-col' : 'flex'}`}>
        <Image 
          className={`${ parent }--icon ${ index && `${ parent }--icon-${ index }`} ${ classes || '' }`} 
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
        <Image 
          className={`${ parent }--icon ${ index && `${ parent }--icon-${ index }`} ${ classes || '' }`} 
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
      <div className={`${ column ? 'flex flex-col' : 'flex'}`}>
        { children }
        <Image 
          className={`${ parent }--icon ${ index && `${ parent }--icon-${ index }`} ${ classes || '' }`} 
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

export default BaseIcon;
