
export const SET_EMAIL = 'set_email';
export const SET_PASSWORD = 'set_password';
export const SET_VERIFICATION = 'set_verification';


export type SetEmailAction = {
  type: typeof SET_EMAIL;
  payload: string;
};

export type SetPasswordAction = {
  type: typeof SET_PASSWORD;
  payload: string;
};

export type SetVerificationAction = {
  type: typeof SET_VERIFICATION;
  payload: boolean;
};


export type SignInFormActions = SetEmailAction | SetPasswordAction | SetVerificationAction;