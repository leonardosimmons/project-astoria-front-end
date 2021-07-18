
export const SET_SIGN_IN_EMAIL = 'set_sign_in_email';
export const SET_SIGN_IN_PASSWORD = 'set_sign_in_password';
export const SET_SIGN_IN_VERIFICATION = 'set_sign_in_verification';


export type SetEmailAction = {
  type: typeof SET_SIGN_IN_EMAIL;
  payload: string;
};

export type SetPasswordAction = {
  type: typeof SET_SIGN_IN_PASSWORD;
  payload: string;
};

export type SetVerificationAction = {
  type: typeof SET_SIGN_IN_VERIFICATION;
  payload: boolean;
};


export type SignInFormActions = SetEmailAction | SetPasswordAction | SetVerificationAction;