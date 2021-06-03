
import styles from './LoadSpinner.module.scss';

const LoadSpinner: React.FunctionComponent = ():JSX.Element => (
  <div className={styles.spinner}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default LoadSpinner;