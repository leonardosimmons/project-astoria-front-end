
import { Header } from '../../../utils/types';

import baseStyles from './PromoBanner.module.scss';

import ContentBox from '../../box/ContentBox';
import Button from '../../button/Button';
import Container from '../../container/Container';
import TextBox from '../../text/Text';
import Video from '../../video';

type Props = {
  config: Header;
  styles?: any;
}


const BaseBanner: React.FunctionComponent<Props> = ({ config, styles }): JSX.Element => {
  return (
    <Container wrapper styles={ baseStyles } bgImage={ config.bgImage ? config.bgImage : '' } classes={ styles && styles }>
      { config.video && <Video src={ config.video }/> }
      <ContentBox styles={ baseStyles }>
        <TextBox 
          headingOne={ config.heading }
          styles={ baseStyles }/>
        <Button 
          text={ config.btn?.text as string }
          link={ config.btn?.link }
          classes={'relative btn-hoverConfig btn-activeFocus'}
          styles={ baseStyles }/>
      </ContentBox>
    </Container>
  );
};

export default BaseBanner;