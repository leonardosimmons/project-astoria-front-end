import Link from 'next/link'
import { BaseOptions } from '../../utils/types';

type Props = {
  text: string | number | JSX.Element | HTMLElement;
  toggle?: boolean;
  toggleFor?: string;
  toggleClasses?: string;
} & BaseOptions;

const Button: React.FunctionComponent<Props> = (
  { 
    parent, 
    link, 
    text, 
    toggle, 
    toggleFor,
    styles,
    toggleClasses, 
    clicked,
    classes, 
  }
): JSX.Element => {
  return (
    toggle ? 
    <div className={`${ styles && styles.toggleBox } ${ parent ? parent + '--toggle-button' : ''} ${ classes }`} >
      <label 
        htmlFor={`${ toggleFor }__toggle`}
        className={`${ styles && styles.toggleLabel }  ${ toggleClasses}`} 
        onClick={ clicked }>
          { text }
      </label>
    </div>
    :
    <Link href={ link || ''  }>
      <button className={`${ styles && styles.btn } ${ parent ? parent + '--button' : ''} ${ classes || '' }`}>
        { text as string }
      </button>
    </Link>
  );
};

export default Button;
