

import { cpnt } from '../../../utils/keys/keys';
import { BaseOptions } from '../../../utils/types';
import Container from '../../container/Container';
import Icon from '../../icon';

type Props = Omit<BaseOptions, 'parent'> & {
  parent: string;
}

const DesktopBarInfo: React.FunctionComponent<Props> = ({parent, index}): JSX.Element => {
  return (
    <Container parent={`${ parent }__info`}>
      {/* .map() <span/> */}
      {/* nav icon */}
      <span className={`${ parent }__info--span ${ parent }__info--span-${ index } mx-2`}>
        {`United States`}
      </span>
      <span className={`${ parent }__info--span ${ parent }__info--span-${ index } mx-2`}>
        {`English`}
      </span>
      {/* telephone icon */}
      <span className={`${ parent }__info--span ${ parent }__info--span-${ index } mx-2`}>
        {`+1.877.546.9043`}
      </span>
    </Container>
  );
};

export default DesktopBarInfo;