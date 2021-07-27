
import React from 'react';
import { SignInForm } from '../../../../utils/types';

import styles from './SignInForm.module.scss';

import Input from '../../../../components/input';


type Props = SignInForm;


const signInForm: React.FunctionComponent<Props> = ({ email, password, submit }): JSX.Element => {
  return (
    <form id={'sign-in-form'} className={styles.form} onSubmit={submit}>
      <Input id={'si-email'} col type={'email'} labelFront={'Email Address'} styles={styles} changed={ email }/>
      <Input id={'si-password'} col type={'password'} labelFront={'Password'} styles={styles} changed={ password }/>
      <div className={`${ styles.btnContainer } relative center`}>
        <Input id={'si-rest'} type={'reset'} value={'RESET'} classes={'relative btn-default btn-hoverConfig btn-activeFocus'}/>
        <Input id={'si-button'} type={'submit'} value={'SUBMIT'} classes={'relative btn-default btn-hoverConfig btn-activeFocus'}/>
      </div>
    </form>
  );
};

export default signInForm;