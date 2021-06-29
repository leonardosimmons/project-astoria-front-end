
import { combineReducers } from 'redux';
import { Order } from '../../utils/types';
import { shippingReducer } from './reducers/shipping';
import { orderStatusReducer } from './reducers/status';

export const orderInitialState: Order = {
  user: {
    id: 0,
    info: {
      name: '',
      email: '',
      image: ''
    }
  },
  items: [],
  summary: { 
    count: 0, 
    total: 0 
  },
  shipping: {
    info: {
      address: '',
      city: '',
      postal: 0,
      state: ''
    },
    status: { 
      isVerified: false, 
      isError: false 
    }
  },
  status: {
    isComplete: false,
    isError: false,
    isPending: false,
    isVerified: false,
    shipping: false,
    payment: false
  }
};


export const orderReducer = combineReducers({
  shipping: shippingReducer,
  status: orderStatusReducer
});
