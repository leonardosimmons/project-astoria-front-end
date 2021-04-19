
import React from 'react';
import { SignInForm } from '../../../../utils/types';

import Input from '../../../../components/input';

type Props = SignInForm & {
  styles: any;
};


const signInForm: React.FunctionComponent<Props> = ({ email, password, submit, styles }): JSX.Element => {
  return (
    <form onSubmit={ submit }>
      <Input col labelFront={'Email Address'} styles={ styles } changed={ email }/>
      <Input col type={'password'} labelFront={'Password'} styles={ styles } changed={ password }/>
      <div className={`${ styles.btnContainer } relative center`}>
        <Input type={'submit'} value={'SUBMIT'} classes={'relative btn-hoverConfig btn-activeFocus'}/>
        <Input type={'reset'} value={'RESET'} classes={'relative btn-hoverConfig btn-activeFocus'}/>
      </div>
    </form>
  );
};

export default signInForm;