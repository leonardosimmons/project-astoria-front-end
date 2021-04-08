import Image from 'next/image';

import styles from './ProductTag.module.scss';

import ContentBox from '../../box/ContentBox';
import TextBox from '../../text';
import Button from '../../button';
import { ProductTag } from '../../../utils/types';

type Props = {
  config: ProductTag;
};


const Tag: React.FunctionComponent<Props> = ({ config }): JSX.Element => {

  return (
    <div className={ styles.wrapper || '' }>
      <ContentBox styles={ styles }>
        <Image
          className={ styles.image } 
          src={ config.img.src }
          alt={ config.img.alt }
          width={ config.img.width }
          height={ config.img.height }
        />
        <TextBox 
          subHeadOne={ config.txt.heading }
          textOne={ config.txt.body }
          styles={ styles } />
        <Button
          styles={ styles } 
          text={ config.btn.text.toUpperCase() }
          link={ config.btn.link }
          classes={'relative btn-activeFocus'}/>
      </ContentBox>
    </div>
  );
};

export default Tag;
