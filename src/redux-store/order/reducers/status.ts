
import { OrderStatus } from '../../../utils/types';
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


const orderStatusInitialState: OrderStatus = {
  isComplete: false,
  isError: false,
  isPending: false,
  isVerified: false,
  payment: false,
  shipping: false
};


function orderStatusReducer(state = orderStatusInitialState, action: AppActions): OrderStatus {
  switch(action.type)
  {
    case RESET_ORDER_STATUS:
      return orderStatusInitialState;
    case UPDATE_COMPLETION_STATUS:
      return {...state, isComplete: action.payload};
    case UPDATE_ERROR_STATUS:
      return {...state, isError: action.payload};
    case UPDATE_PENDING_STATUS:
      return {...state, isPending: action.payload};
    case UPDATE_VERIFICATION_STATUS:
      return {...state, isVerified: action.payload};
    case UPDATE_PAYMENT_STATUS:
      return {...state, payment: action.payload};
    case UPDATE_SHIPPING_STATUS:
      return {...state, shipping: action.payload};
    default:
      return state;
  }
};

export { orderStatusReducer };
