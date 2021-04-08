
import Carousel from '../../../features/carousel';
import HeaderOne from './components/HeaderOne';
import HeaderTwo from './components/HeaderTwo';
import HeaderThree from './components/HeaderThree';

type Props = {
  classes: string;
  autoplayLength?: number;
  arrows?: boolean;
  dots?: boolean;
};

const IndexHeader: React.FunctionComponent<Props> = ({ classes, arrows = true , dots = true, autoplayLength = 11.5 }): JSX.Element => {
  return (
    <Carousel
      classes={ classes }
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