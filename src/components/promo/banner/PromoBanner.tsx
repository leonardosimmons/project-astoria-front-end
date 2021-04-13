
import { Header } from '../../../utils/types';

import styles from './PromoBanner.module.scss';

import ContentBox from '../../box/ContentBox';
import Button from '../../button/Button';
import Container from '../../container/Container';
import TextBox from '../../text/Text';
import Video from '../../video';

type Props = {
  config: Header;
}


const BaseBanner: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <Container wrapper styles={ styles } bgImage={ config.bgImage ? config.bgImage : '' }>
      { config.video && <Video src={ config.video }/> }
      <ContentBox styles={ styles }>
        <TextBox 
          headingOne={ config.heading }
          styles={ styles }/>
        <Button 
          text={ config.btn?.text as string }
          link={ config.btn?.link }
          classes={'relative btn-hoverConfig btn-activeFocus'}
          styles={ styles }/>
      </ContentBox>
    </Container>
  );
};

export default BaseBanner;