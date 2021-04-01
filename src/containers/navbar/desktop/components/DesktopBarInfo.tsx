
import Container from '../../../../components/container';

type Props = {
  styles: {
    info: string;
    infoText: string;
  }
}

const DesktopBarInfo: React.FunctionComponent<Props> = ({ styles }): JSX.Element => {
  return (
    <Container styles={ styles.info }>
      <span className={`${ styles.infoText } mx-2`}>
        {`United States`}
      </span>
      <span className={`${ styles.infoText } mx-2`}>
        {`English`}
      </span>
      <span className={`${ styles.infoText } mx-2`}>
        {`+1.877.546.9043`}
      </span>
    </Container>
  );
};

export default DesktopBarInfo;