import { BaseOptions } from '../../utils/types';

type Props = BaseOptions;

const ContentBox: React.FunctionComponent<Props> = ({ parent, classes, index, styles, children}): JSX.Element => {
  return (
    <div className={`
      ${ styles && styles.contentBox } ${ classes || '' } ${ parent ? parent + '--box' : '' } ${ parent ? index ? `${ parent }--box-${ index }` : '' : ''} 
    `}>
      { children }
    </div>
  );
};

export default ContentBox;