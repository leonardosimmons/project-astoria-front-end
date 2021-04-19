
import React from 'react';
import { RegistrationForm } from '../../../../utils/types/types';

import Form from '../../../../components/form';
import Input from '../../../../components/input';

type Props = RegistrationForm & {
  styles: any;
};


const registrationForm: React.FunctionComponent<Props> = (
  {
    firstName,
    lastName,
    age,
    email,
    password,
    pwCheck,
    submit,
    styles
  }
): JSX.Element => {
  return (
    <Form submit={ submit } styles={ styles || '' }>
      <Input col labelFront={'First name'} styles={ styles } changed={ firstName }/>
      <Input col labelFront={'Last name'} styles={ styles } changed={ lastName }/>
      <Input col labelFront={'Age'} type={'number'} styles={ styles } changed={ age }/>
      <Input col labelFront={'Email Address'} type={'email'} styles={ styles } changed={ email }/>
      <Input col labelFront={'Password'} type={'password'} styles={ styles } changed={ password }/>
      <Input col labelFront={'Re-enter password'} type={'password'} styles={ styles } changed={ pwCheck }/>
      <div className={`${ styles.btnContainer } relative center`}>
        <Input type={'submit'} value={'REGISTER'} classes={'relative btn-hoverConfig btn-activeFocus'}/>
        <Input type={'reset'} value={'RESET'} classes={'relative btn-hoverConfig btn-activeFocus'}/>
      </div>
    </Form>
  );
};

export default registrationForm;