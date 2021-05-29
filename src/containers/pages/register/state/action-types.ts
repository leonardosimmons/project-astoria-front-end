import { Combinable } from '../../../../utils/types';

//** ---------------------  TYPES  --------------------- **//
export const SET_USERNAME = 'set_username';
export const SET_AGE = 'set_age';
export const SET_EMAIL = 'set_email';
export const SET_PASSWORD = 'set_password';
export const SET_PW_CHECK = 'set_pw_check';


//** --------------------  ACTIONS  -------------------- **//
export type SetUsernameAction = {
  type: typeof SET_USERNAME;
  payload: string;
};

export type SetAgeAction = {
  type: typeof SET_AGE;
  payload: Combinable;
};

export type SetEmailAction = {
  type: typeof SET_EMAIL;
  payload: string;
};

export type SetPassword = {
  type: typeof SET_PASSWORD;
  payload: string;
};

export type SetPwCheck = {
  type: typeof SET_PW_CHECK;
  payload: string;
};


export type RegistrationFormActions = SetUsernameAction | SetAgeAction | SetEmailAction | SetPassword | SetPwCheck;