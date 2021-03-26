
import { BaseOptions } from '../../../utils/types';
import Container from '../../container/Container';

type Props = Omit<BaseOptions, 'parent'> & {
  parent: string;
}

const DesktopBarInfo: React.FunctionComponent<Props> = ({parent, index, styles }): JSX.Element => {
  return (
    <Container styles={ styles && styles.info } parent={`${ parent }__info`}>
      {/* .map() <span/> */}
      {/* nav icon */}
      <span className={`${ styles && styles.infoText } ${ index ? styles && `${styles.infoText}0${ index }` : '' } ${ parent }__info--span ${ parent }__info--span-${ index } mx-2`}>
        {`United States`}
      </span>
      <span className={`${ styles && styles.infoText } ${ index ? styles && `${styles.infoText}0${ index }` : '' } ${ parent }__info--span ${ parent }__info--span-${ index } mx-2`}>
        {`English`}
      </span>
      {/* telephone icon */}
      <span className={`${ styles && styles.infoText } ${ index ? styles && `${styles.infoText}0${ index }` : '' } ${ parent }__info--span ${ parent }__info--span-${ index } mx-2`}>
        {`+1.877.546.9043`}
      </span>
    </Container>
  );
};

export default DesktopBarInfo;