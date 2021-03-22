import Image from "next/image";
import Link from "next/link";

type Props = {
  parent: string;
  index: number;
  src: string;
  alt: string;
  link: string;
  width: number;
  height: number;
}

const NavigationIcon: React.FunctionComponent<Props> = (
  {
    parent,
    index,
    src,
    alt,
    link,
    width,
    height,
  }
): JSX.Element => 
{
  return (
    <Link href={link}>
      {/* replace with Icon component */}
      <div className={`${ parent }__svg ${ parent }__svg--${ index }`}>
        <Image
          src={ src }
          alt={ alt }
          width={ width }
          height={ height } />
      </div>
    </Link>
  )
}

export default NavigationIcon;