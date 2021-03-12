import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cpnt } from '../../../utils/keys';
import MainContainer from '../../container/MainContainer';


interface IProps {
  parent?: string;
}


const MobileNavigationBar: React.FunctionComponent<IProps> = ({ parent, children }): JSX.Element => {
  const testData = [ 
    { link: '/under-construction', src: '/icons/png/shopping-bag.png', alt: 'test'},
    { link: '/under-construction', src: '/icons/png/user.png', alt: 'test'},
    { link: '/under-construction', src: '/icons/png/search-glass.png', alt: 'test'}
  ];

  return (
    <div className={`${ parent }__${ cpnt.MOBILE_NAVIGATION } ${ cpnt.MOBILE_NAVIGATION }`}>
      <MainContainer parent={ cpnt.MOBILE_NAVIGATION }>
        <div>Menu</div>
        <div className="logo">
          <Link href="/">
            <p>ASTORIA</p>
          </Link>
        </div>
        <div className={`flex`}>
          {
            testData.map((data, index) => (
              <div className={`${ parent }__icon ${ parent }__icon--${ index }`}>
                <Link href={data.link} key={ index }>
                  <Image 
                    src={data.src}
                    alt={data.alt}
                    width={ 22 }
                    height={ 22 }
                  />
                </Link>
              </div>
            ))
          } 
        </div>
      </MainContainer>
    </div>
  );
};

export default MobileNavigationBar;

/* 

<NavbarIcons
  parent={ cpnt.MOBILE_NAVIGATION }
  link={'/under-construction'} 
  src={'/icons/png/shopping-bag.png'}
  alt={'test icon'}
  height={ 22.5 }
  width={ 22.5 }
  classes={`flex`} />

*/