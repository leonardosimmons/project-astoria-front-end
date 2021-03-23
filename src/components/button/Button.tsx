import Link from 'next/link'
import { BaseOptions } from '../../utils/types';

type Props = {
  text: string | number | JSX.Element | HTMLElement;
  toggle?: boolean;
  toggleFor?: string;
  toggleClasses?: string;
  clicked?: () => void;
} & BaseOptions;

const Button: React.FunctionComponent<Props> = (
  { 
    parent, 
    link, 
    text, 
    toggle, 
    toggleFor,
    toggleClasses, 
    clicked,
    classes 
  }
): JSX.Element => {
  return (
    toggle ? 
    <div className={`${ parent }--toggle-button ${ classes }`} >
      <label 
        htmlFor={`${ toggleFor }__toggle`}
        className={ toggleClasses } 
        onClick={ clicked }>
          { text }
      </label>
    </div>
    :
    <Link href={ link || ''  }>
      <button className={`${ parent || '' }--button ${ classes || '' }`}>
        { text as string }
      </button>
    </Link>
  );
};

export default Button;
