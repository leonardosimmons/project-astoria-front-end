
import Carousel from '../../../features/carousel';
import HeaderOne from './components/HeaderOne';
import HeaderTwo from './components/HeaderTwo';

type Props = {
  autoplayLength?: number;
  arrows?: boolean;
  dots?: boolean;
};

const IndexHeader: React.FunctionComponent<Props> = ({ arrows = true , dots = true, autoplayLength = 12.5 }): JSX.Element => {
  return (
    <Carousel
    arrows={ arrows }
    dots={ dots }
    //autoPlay={ autoplayLength }
  >
    <HeaderOne />
    <HeaderTwo />
  </Carousel>
  );
};

export default IndexHeader;