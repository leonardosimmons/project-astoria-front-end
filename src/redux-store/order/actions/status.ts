
import { AppActions } from '../../action-types';
import { 
  UPDATE_COMPLETION_STATUS, 
  UPDATE_ERROR_STATUS, 
  UPDATE_PAYMENT_STATUS, 
  UPDATE_PENDING_STATUS, 
  UPDATE_SHIPPING_STATUS, 
  UPDATE_VERIFICATION_STATUS 
} from '../action-types/status';


export function updateCompletionStatus(s: boolean): AppActions {
  return {
    type: UPDATE_COMPLETION_STATUS,
    payload: s
  };
};

export function updateErrorStatus(s: boolean): AppActions {
  return {
    type: UPDATE_ERROR_STATUS,
    payload: s
  };
};

export function updatePendingStatus(s: boolean): AppActions {
  return {
    type: UPDATE_PENDING_STATUS,
    payload: s
  };
};

export function updateVerificationStatus(s: boolean): AppActions {
  return {
    type: UPDATE_VERIFICATION_STATUS,
    payload: s
  };
};

export function updatePaymentStatus(s: boolean): AppActions {
  return {
    type: UPDATE_PAYMENT_STATUS,
    payload: s
  };
};

export function updateShippingStatus(s: boolean): AppActions {
  return {
    type: UPDATE_SHIPPING_STATUS,
    payload: s
  };
};
