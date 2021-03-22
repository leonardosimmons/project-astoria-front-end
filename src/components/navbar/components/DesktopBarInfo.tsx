

import { cpnt } from "../../../utils/keys/keys";
import Container from "../../container/Container";

type Props = {

};

const DesktopBarInfo: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Container parent={`${ cpnt.DESKTOP_NAVIGATION }__information`}>
      {/* .map() <span/> */}
      {/* nav icon */}
      <span className={'mx-2'}>{`United States`}</span>
      <span className={'mx-2'}>{`English`}</span>
      {/* telephone icon */}
      <span className={'mx-2'}>{`+1.877.546.9043`}</span>
    </Container>
  );
};

export default DesktopBarInfo;