
import { BaseOptions } from '../../../../utils/types/types';
import Container from '../../../container/Container';

type Props = Omit<BaseOptions, 'parent'> & {
  parent: string;
}

const DesktopBarInfo: React.FunctionComponent<Props> = ({parent, index, styles }): JSX.Element => {
  return (
    <Container styles={ styles && styles.info }>
      <span className={`${ styles && styles.infoText } mx-2`}>
        {`United States`}
      </span>
      <span className={`${ styles && styles.infoText } mx-2`}>
        {`English`}
      </span>
      <span className={`${ styles && styles.infoText } mx-2`}>
        {`+1.877.546.9043`}
      </span>
    </Container>
  );
};

export default DesktopBarInfo;