
import { Combinable } from '../utils/types';
import { preg_match } from './functions';

interface ValidationControls {
  readonly isValidated: boolean;
  readonly error: string;
  lenCheck: (field: string, len: number) => boolean;
  registrationForm: (un: string, e: string, a: Combinable, pw: string, pwC: string) => boolean;
  signInForm: (un: string, pw: string) => boolean;
};

class ValidationController implements ValidationControls
{
  private _validated: boolean;
  private _error: string;

  constructor() {
    this._validated = false;
    this._error = '';
  };

  get isValidated() {
    return this._validated;
  }

  get error() {
    return this._error;
  }

  // Controllers  
  public registrationForm(un: string, e: string, a: Combinable, pw: string, pwC: string): boolean {
    let fail = '';
    fail = fail.concat(this.username(un));
    fail = fail.concat(this.email(e));
    fail = fail.concat(this.age(a));
    fail = fail.concat(this.password(pw));
    fail = fail.concat(this.password(pwC));

    if (fail === '') {
      const check = this.pwCheck(pwC, pw);

      if (check) {
        this.validate();
        return true;
      }

      fail = fail.concat('The passwords entered do not match\n');
    }

    this._error = fail;
    return false;
  }; 

  public signInForm(un: string, pw: string): boolean {
    let fail = '';
    fail = this.username(un);
    fail = this.password(pw);

    if (fail === '') {
      this.validate();
      return true;
    }

    this._error = fail;
    return false;
  }

  // Functions
  public lenCheck(field: string, len: number): boolean {
    return field.length > len ? true : false;
  }
  
  private validate(): void {
    this._validated = true;
  };
  
  private pwCheck(pw: string, pwC: string): boolean {
    return pwC === pw ? true : false;
  }

  private title(field: string, len: number): string {
    let fail = '';
    if (field === '') { fail = 'No title was entered'; }
    if (!this.lenCheck(field, len)) { fail = fail + 'Title must be at least (5) characters long\n'; }

    return fail;
  };

  private content(field: string, len: number): string {
    let fail = '';
    if (field === '') { fail = 'No contetn was entered'; }
    if (!this.lenCheck(field, len)) { fail = fail + 'Content must be at least (5) characters long\n'; }

    return fail;
  };

  private firstName(field: string): string {
    return field === '' ? 'No First Name was entered\n': '';
  };

  private lastName(field: string): string {
    return field === '' ? 'No Last Name was entered\n': '';
  };

  private username(field: string): string {
    if (field === '') return 'No Username entered.\n';
    else if (field?.length && field.length < 5) return 'Usename must be at least 5 characters long.\n';
    else if (preg_match('\W', field)) return 'Username must only contain letters, numbers, _ and -.\n';
    
    return '';
  };

  private password(field: string): string {
    if (field === '') return 'No Password entered\n';
    else if (field?.length && field.length < 6) return 'Password must be at least 6 characters long\n';
    else if (!preg_match('[a-z]', field) || !preg_match('[A-Z]', field ) || !preg_match('[0-9]', field)) 
      return 'Passwords require at least (1) uppercase letter, (1) lowercase letter and (1) number\n';
    
    return '';
  };

  private age(field: Combinable): string {
    if (field === '' || field === 0) return 'No Age was entered\n';
    else if (typeof field === 'string') {
      if (parseInt(field) < 21) {
        return 'You must be at least 21 years of age to enter\n';
      }
    }
    else if (field < 21) return 'You must be at least 21 years of age to enter\n';

    return '';
  }
  
  private email(field: string): string {
    if (field === '') return 'No Email address was entered\n';
    else if (!(field?.indexOf('.') > 0 || field?.indexOf('@') > 0) && preg_match('[^a-zA-z0-9_-]', field)) 
      return 'The entered email address is invalid\n';

    return '';
  }
}

export { ValidationController };