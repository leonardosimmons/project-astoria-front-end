import Link from "next/link"

export interface IProps 
{
  text: string;
  link?: string;
  parent?: string;
  classes?: string;
}

const Button: React.FunctionComponent<IProps> = ({ parent, link, text, classes }): JSX.Element => {
  return (
    <Link href={ link || ''  }>
      <button className={`${ parent || '' }__button ${ classes || '' }`}>
        { text }
      </button>
    </Link>
  );
};

export default Button;