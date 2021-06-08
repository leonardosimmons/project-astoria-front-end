import Image from 'next/image';

import baseStyles from './PromoCard.module.scss';

import Container from '../../container';
import ContentBox from '../../box/ContentBox';
import HeadingBox from '../../heading/Heading';
import { ProductCard } from '../../../utils/types';

type Props = {
  config: ProductCard;
  priority?: boolean;
  classes?: string;
  styles?: any;
  fill?: boolean;
};


const PreviewCard: React.FunctionComponent<Props> = ({ config, priority, fill, classes, styles }): JSX.Element => {
  return (
    <div id="promo-card" className={`${ baseStyles.wrapper } ${ styles ? styles.wrapper ? styles.wrapper : '' : '' }`}>
      <Container styles={ baseStyles } classes={`${ styles ? styles.container ? styles.container : '' : '' } relative`}>
        {
          fill ?
          <Image 
            src={ config.img.src }
            alt={ config.img.alt }
            quality={100}
            layout={'fill'}
            objectFit={ config.img.objectFit ? config.img.objectFit : 'cover' }
            priority={ priority }
            className={ classes && classes }
          />
          :
          <Image 
            src={ config.img.src }
            alt={ config.img.alt }
            quality={100}
            width={ config.img.width as string }
            height={ config.img.height as string }
            layout={ config.img.layout ? config.img.layout : 'responsive' }
            objectFit={ config.img.objectFit ? config.img.objectFit : 'cover' }
            priority={ priority }
            className={ classes && classes }
          />

        }
      </Container>
      <ContentBox styles={ baseStyles } classes={ styles ? styles.contentBox ? styles.contentBox : '' : '' }>
        <HeadingBox 
          sub
          heading={ config.text }
          btn={ config.btn }
          styles={ baseStyles }
        />
      </ContentBox>
    </div>
  );
};

export default PreviewCard;