import Image from 'next/image';

import baseStyles from './PromoCard.module.scss';

import Container from '../../container';
import ContentBox from '../../box/ContentBox';
import HeadingBox from '../../heading/Heading';
import { PromoCard as PromoCardType } from '../../../utils/types/types';

type Props = {
  config: PromoCardType;
  priority?: boolean;
  classes?: string;
  styles?: any;
  fill?: boolean;
};


const PromoCard: React.FunctionComponent<Props> = ({ config, priority, fill, classes, styles }): JSX.Element => {
  return (
    <div id="promo-card" className={`${ baseStyles.wrapper } ${ styles ? styles.wrapper ? styles.wrapper : '' : '' }`}>
      <Container styles={ baseStyles } classes={`${ styles ? styles.container ? styles.container : '' : '' } relative`}>
        {
          fill ?
          <Image 
            src={ config.src }
            alt={ config.alt }
            quality={100}
            layout={'fill'}
            objectFit={ config.objectFit ? config.objectFit : 'cover' }
            priority={ priority }
            className={ classes && classes }
          />
          :
          <Image 
            src={ config.src }
            alt={ config.alt }
            quality={100}
            width={ config.width as string }
            height={ config.height as string }
            layout={ config.layout ? config.layout : 'responsive' }
            objectFit={ config.objectFit ? config.objectFit : 'cover' }
            priority={ priority }
            className={ classes && classes }
          />

        }
      </Container>
      <ContentBox styles={ baseStyles } classes={ styles ? styles.contentBox ? styles.contentBox : '' : '' }>
        <HeadingBox 
          sub
          heading={ config.heading }
          btn={ config.btn }
          styles={ baseStyles }
        />
      </ContentBox>
    </div>
  );
};

export default PromoCard;