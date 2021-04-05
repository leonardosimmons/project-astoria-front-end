import Image from 'next/image';

import styles from './Tag.module.scss';

import ContentBox from '../box/ContentBox';
import TextBox from '../text';
import Button from '../button';

type Props = {
  img?: string;
};

const Tag: React.FunctionComponent<Props> = ({ img }): JSX.Element => {
  const testImg: string = '/images/products/handbags/Handbag-decal01.jpg';

  return (
    <div className={ styles.wrapper || '' }>
      <ContentBox styles={ styles }>
        <Image
          className={ styles.image } 
          src={ testImg }
          alt={'handbag'}
          width={ 100 }
          height={ 100 }
        />
        <TextBox 
          subHeadOne={'Handbags'}
          textOne={'A cult fabric is imagined through the Astoria lens with the emblematic monogram motif.'}
          styles={ styles } />
        <Button
          styles={ styles } 
          text={'SHOP TOTES'}
          link={'/under-construction'}
          classes={'relative btn-activeFocus'}/>
      </ContentBox>
    </div>
  );
};

export default Tag;

/*

  <Image
    className={ styles.image } 
    src={ testImg }
    alt={'handbag'}
    width={ 115 }
    height={ 115 }
  />

*/