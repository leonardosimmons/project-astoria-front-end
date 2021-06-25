
import { AppActions } from '../../action-types';
import { 
  RESET_ORDER_STATUS,
  UPDATE_COMPLETION_STATUS, 
  UPDATE_ERROR_STATUS, 
  UPDATE_PAYMENT_STATUS, 
  UPDATE_PENDING_STATUS, 
  UPDATE_SHIPPING_STATUS, 
  UPDATE_VERIFICATION_STATUS 
} from '../action-types/status';


export function resetAllOrderStatus(): AppActions {
  return {
    type: RESET_ORDER_STATUS
  };
};

export function updateOrderCompletionStatus(s: boolean): AppActions {
  return {
    type: UPDATE_COMPLETION_STATUS,
    payload: s
  };
};

export function updateOrderErrorStatus(s: boolean): AppActions {
  return {
    type: UPDATE_ERROR_STATUS,
    payload: s
  };
};

export function updateOrderPendingStatus(s: boolean): AppActions {
  return {
    type: UPDATE_PENDING_STATUS,
    payload: s
  };
};

export function updateOrderVerificationStatus(s: boolean): AppActions {
  return {
    type: UPDATE_VERIFICATION_STATUS,
    payload: s
  };
};

export function updateOrderPaymentStatus(s: boolean): AppActions {
  return {
    type: UPDATE_PAYMENT_STATUS,
    payload: s
  };
};

export function updateOrderShippingStatus(s: boolean): AppActions {
  return {
    type: UPDATE_SHIPPING_STATUS,
    payload: s
  };
};
