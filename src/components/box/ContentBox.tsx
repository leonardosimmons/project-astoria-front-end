import { BaseOptions } from '../../utils/types';

type Props = BaseOptions;

const ContentBox: React.FunctionComponent<Props> = ({ parent, classes, index, styles, children}): JSX.Element => {
  return (
    <div className={`
      ${ styles && styles.contentBox }
      ${ index ? styles && `${ styles.contentBox }0${ index }` : '' }
      ${ classes || '' }
      ${ parent || '' }--box 
      ${ index ? `${ parent }--box-${ index }` : ''} 
    `}>
      { children }
    </div>
  );
};

export default ContentBox;