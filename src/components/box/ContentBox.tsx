import { BaseOptions } from '../../utils/types';
import Video from '../video/Video';

type Props = BaseOptions;

const ContentBox: React.FunctionComponent<Props> = (
  { 
    parent, 
    classes, 
    index, 
    styles,
    bgImage,
    video, 
    children
  }
): JSX.Element => {
  return (
    <div className={`${ classes || '' } ${ styles && styles.contentBox } ${ parent ? parent + '--box' : '' } ${ parent ? index ? `${ parent }--box-${ index }` : '' : ''}`}
    style={{ backgroundImage: `${ bgImage ? 'url(' + bgImage + ')' : '' }`}}
    >
      { video && <Video src={ video } /> }
      { children }
    </div>
  );
};

export default ContentBox;