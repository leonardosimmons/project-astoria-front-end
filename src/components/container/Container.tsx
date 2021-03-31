import { BaseOptions } from '../../utils/types';

type Props = {
  main?: boolean;
} & BaseOptions;

const Container: React.FunctionComponent<Props> = ({ parent, styles, classes, main, children }) => {
  return (
    <div className={`${ main ? styles && styles.mainContainer || '' : styles && styles.container || '' } ${ parent ? main ? parent + '__main-container' : parent + '--container' : '' } ${ classes || '' }`} >
      { children }
    </div>
  );
};

export default Container;