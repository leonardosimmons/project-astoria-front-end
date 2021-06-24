
//** ---------------------  TYPES  --------------------- **//
export const UPDATE_COMPLETION_STATUS = 'completion_status';
export const UPDATE_ERROR_STATUS = 'error_status';
export const UPDATE_PENDING_STATUS = 'pending_status';
export const UPDATE_VERIFICATION_STATUS = 'verified_Status';
export const UPDATE_PAYMENT_STATUS = 'payment_status';
export const UPDATE_SHIPPING_STATUS = 'shipping_status';


//** --------------------  ACTIONS  -------------------- **//
export type UpdateCompletionStatusAction = {
  type: typeof UPDATE_COMPLETION_STATUS;
  payload: boolean;
};

export type UpdateErrorStatusAction = {
  type: typeof UPDATE_ERROR_STATUS;
  payload: boolean;
};

export type UpdatePaymentStatusAction = {
  type: typeof UPDATE_PAYMENT_STATUS;
  payload: boolean;
};

export type UpdatePendingStatusAction = {
  type: typeof UPDATE_PENDING_STATUS;
  payload: boolean;
};

export type UpdateShippingStatusAction = {
  type: typeof UPDATE_SHIPPING_STATUS;
  payload: boolean;
};

export type UpdateVerificationStatusAction = {
  type: typeof UPDATE_VERIFICATION_STATUS;
  payload: boolean;
};


export type OrderStatusActions = UpdateCompletionStatusAction | UpdateErrorStatusAction | UpdatePaymentStatusAction | UpdatePendingStatusAction | UpdateShippingStatusAction | UpdateVerificationStatusAction;