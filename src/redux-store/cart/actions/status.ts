
import { AppActions } from '../../action-types';
import { 
  UPDATE_CHECKING_OUT_STATUS, 
  UPDATE_EMPTY_STATUS, 
  UPDATE_COMPLETE_STATUS, 
  UPDATE_PENDING_STATUS, 
  UPDATE_ERROR_STATUS 
} from '../action-types/status';


export function updateCheckoutStatus(status: boolean): AppActions {
  return {
    type: UPDATE_CHECKING_OUT_STATUS,
    payload: status 
  };
};

export function updateCompleteStatus(status: boolean): AppActions {
  return {
    type: UPDATE_COMPLETE_STATUS,
    payload: status 
  };
};

export function updateEmptyStatus(status: boolean): AppActions {
  return {
    type: UPDATE_EMPTY_STATUS,
    payload: status 
  };
};

export function updateErrorStatus(status: boolean): AppActions {
  return {
    type: UPDATE_ERROR_STATUS,
    payload: status 
  };
};

export function updatePendingStatus(status: boolean): AppActions {
  return {
    type: UPDATE_PENDING_STATUS,
    payload: status 
  };
};
