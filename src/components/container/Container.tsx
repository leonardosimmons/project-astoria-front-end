import { BaseOptions } from '../../utils/types';

type Props = {
  main?: boolean;
} & BaseOptions

const Container: React.FunctionComponent<Props> = ({ parent, classes, main, children }) => {
  return (
    <div className={`
      ${ main ? parent + '__main-container' : parent + '--container' }
      ${ classes || '' }`
      }
    >
      { children }
    </div>
  );
};

export default Container;