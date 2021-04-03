
import Carousel from '../../../features/carousel';
import HeaderOne from './components/HeaderOne';
import HeaderTwo from './components/HeaderTwo';
import HeaderThree from './components/HeaderThree';

type Props = {
  autoplayLength?: number;
  arrows?: boolean;
  dots?: boolean;
};

const IndexHeader: React.FunctionComponent<Props> = ({ arrows = true , dots = true, autoplayLength = 11.5 }): JSX.Element => {
  return (
    <Carousel
      arrows={ arrows }
      dots={ dots }
      autoPlay={ autoplayLength }
    >
    <HeaderOne />
    <HeaderTwo />
    <HeaderThree />
  </Carousel>
  );
};

export default IndexHeader;