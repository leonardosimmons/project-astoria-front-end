import { BaseOptions } from '../../utils/types';

type Props = BaseOptions;

const ContentBox: React.FunctionComponent<Props> = ({ parent, classes, index, children}): JSX.Element => {
  return (
    <div className={`
      ${ classes || '' }
      ${ parent || '' }--box 
      ${ index ? `${ parent }--box-${ index }` : ''} 
    `}>
      { children }
    </div>
  );
};

export default ContentBox;