import Image from 'next/image';

import styles from './PromoCard.module.scss';

import Container from '../../container';
import ContentBox from '../../box/ContentBox';
import HeadingBox from '../../heading/Heading';
import { PromoCard as PromoCardType } from '../../../utils/types/types';

type Props = {
  config: PromoCardType;
};


const PromoCard: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <div id="promo-card" className={ styles.wrapper }>
      <Container styles={ styles } classes={'relative'}>
        <Image 
          src={ config.src }
          alt={ config.alt }
          quality={100}
          width={ config.width }
          height={ config.height }
          layout={'responsive'}
          objectFit={'cover'}
        />
      </Container>
      <ContentBox styles={ styles }>
        <HeadingBox 
          sub
          heading={ config.heading }
          btn={ config.btn }
          styles={ styles }
        />
      </ContentBox>
    </div>
  );
};

export default PromoCard;