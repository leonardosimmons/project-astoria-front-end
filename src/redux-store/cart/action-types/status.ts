
//** ---------------------  TYPES  --------------------- **//
export const UPDATE_CHECKING_OUT_STATUS = 'update_checking_out_status';
export const UPDATE_EMPTY_STATUS = 'update_empty_status';
export const UPDATE_COMPLETE_STATUS = 'update_complete_status';
export const UPDATE_PENDING_STATUS = 'update_pending_status';
export const UPDATE_ERROR_STATUS = 'update_error_status'


//** --------------------  ACTIONS  -------------------- **//
export type UpdateCheckingOutStatus = {
  type: typeof UPDATE_CHECKING_OUT_STATUS;
  payload: boolean;
};

export type UpdateEmptyStatus = {
  type: typeof UPDATE_EMPTY_STATUS;
  payload: boolean;
};

export type UpdateErrorStatus = {
  type: typeof UPDATE_ERROR_STATUS;
  payload: boolean;
};

export type UpdateCompleteStatus = {
  type: typeof UPDATE_COMPLETE_STATUS;
  payload: boolean;
};

export type UpdatePendingStatus = {
  type: typeof UPDATE_PENDING_STATUS;
  payload: boolean;
};

export type CartStatusActions = UpdateCheckingOutStatus | UpdateCompleteStatus | UpdateEmptyStatus | UpdateErrorStatus | UpdatePendingStatus;