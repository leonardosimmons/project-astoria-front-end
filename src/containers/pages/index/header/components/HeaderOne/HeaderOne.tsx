
import styles from './Header.module.scss';
import Heading from '../../../../../../components/heading';
import Container from '../../../../../../components/container';
import Video from '../../../../../../components/video';
import { Header } from '../../../../../../utils/types';


type Props = {
  config: Header;
};

const HeaderOne: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <div id={ config.id } className={ styles.wrapper }>
      <Container main styles={ styles }>
        <Video src={ config.video as string }/>
        <Heading
          main
          heading={ config.heading?.toUpperCase() }
          btnText={ config.btn.text.toUpperCase() }
          btnLink={ config.btn.link }
          styles={ styles }
        />
      </Container>
    </div>
  )
};

export default HeaderOne;
