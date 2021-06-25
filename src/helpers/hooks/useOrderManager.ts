
import React from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { useCart } from './useCart';
import { useUser } from './useUser';
import { Order, OrderCheckout, OrderShippingInfo } from '../../utils/types';
import { orderInitialState } from '../../redux-store/order/reducer';

import { 
  shippingErrorStatus, 
  setOrderAddress, 
  setOrderCity, 
  setOrderCountry, 
  setOrderPostalCode, 
  shippingVerificationStatus, 
  setOrderShippingInfo
} from '../../redux-store/order/actions/shipping';
import { 
  updateOrderCompletionStatus, 
  updateOrderErrorStatus, 
  updateOrderPaymentStatus, 
  updateOrderPendingStatus, 
  updateOrderShippingStatus, 
  updateOrderVerificationStatus 
} from '../../redux-store/order/actions/status';
import { ValidationController } from '../ValidationController';


function useOrder() {
  const user = useUser();
  const cart = useCart();
  const dispatch = useAppDispatch();
  const validate = new ValidationController();
  const order: OrderCheckout = useAppSelector((state) => state.order);
  const [ current, setCurrent ] = React.useState<Order>(orderInitialState);

  // auto updates order upon mount/update
  React.useEffect(() => {
    const token: Order = createToken() as Order;
    
    if (token) {
      setCurrent(token);
    }
  }, [order]);

  function createToken(): Order {
    return {
      user: {
        id: user.id,
        info: user.info
      },
      items: cart.items,
      summary: cart.summary,
      shipping: order.shipping,
      status: order.status
    };
  };
  
  function setAddress(a: string): void {
    dispatch(setOrderAddress(a));
  };
  
  function setCity(c: string): void {
    dispatch(setOrderCity(c));
  };
  
  function setPostalCode(pC: number): void {
    dispatch(setOrderPostalCode(pC));
  };
  
  function setCountry(c: string): void {
    dispatch(setOrderCountry(c));
  };

  function setShippingInfo(o: OrderShippingInfo): void {
    dispatch(setOrderShippingInfo(o));
  };

  function shippingError(e: boolean): void {
    dispatch(shippingErrorStatus(e));
  };

  function completionStatus(s: boolean): void {
    dispatch(updateOrderCompletionStatus(s));
  };

  function errorStatus(e: boolean): void {
    dispatch(updateOrderErrorStatus(e));
  };
  
  function paymentStatus(s: boolean): void {
    dispatch(updateOrderPaymentStatus(s));
  };
  
  function pendingStatus(p: boolean): void {
    dispatch(updateOrderPendingStatus(p));
  };

  function resetShippingStatus() {
    verifyShipping(false);
    shippingStatus(false);
    shippingError(false);
    errorStatus(false);
  };

  function shippingStatus(s: boolean): void {
    dispatch(updateOrderShippingStatus(s));
  };

  function verificationStatus(v: boolean): void {
    dispatch(updateOrderVerificationStatus(v));
  };
  
  function verifyShipping(b: boolean): void {
    dispatch(shippingVerificationStatus(b));
  };

  return {
    current,
    setAddress,
    setCity,
    setPostalCode,
    setCountry,
    setShippingInfo,
    shippingError,
    completionStatus,
    errorStatus,
    paymentStatus,
    pendingStatus,
    resetShippingStatus,
    shippingStatus,
    verificationStatus,
    validate,
    verifyShipping
  }
};

export { useOrder };
