
import React from 'react';
import { SignInForm } from '../../../../utils/types';
import styles from './SignInForm.module.scss';
import Input from '../../../../components/input';


const signInForm: React.FunctionComponent<SignInForm> = ({ email, password, submit }): JSX.Element => {
  return (
    <form onSubmit={ submit }>
      <Input col labelFront={'Email Address'} styles={ styles } changed={ email }/>
      <Input col type={'password'} labelFront={'Password'} styles={ styles } changed={ password }/>
      <div className={`${ styles.btnContainer } relative center`}>
        <Input type={'submit'} value={'SUBMIT'} classes={ styles.btn }/>
        <Input type={'reset'} value={'RESET'} classes={ styles.btn }/>
      </div>
    </form>
  );
};

export default signInForm;