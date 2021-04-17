
import baseStyles from './Copyright.module.scss';

type Props = {
  styles?: any;
}

const Copyright: React.FunctionComponent<Props> = ({ styles }): JSX.Element => {
  return (
    <div className={ styles ? styles.copyright : baseStyles.copyright }>
      <p>Copyright &#169; ASTORIA 2021</p>
    </div>
  );
};

export default Copyright;