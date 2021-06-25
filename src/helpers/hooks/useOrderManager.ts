
import React from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { useCart } from './useCart';
import { useUser } from './useUser';
import { Order, OrderCheckout } from '../../utils/types';
import { orderInitialState } from '../../redux-store/order/reducer';

import { 
  shippingErrorStatus, 
  setOrderAddress, 
  setOrderCity, 
  setOrderCountry, 
  setOrderPostalCode, 
  shippingVerificationStatus 
} from '../../redux-store/order/actions/shipping';
import { 
  updateOrderCompletionStatus, 
  updateOrderErrorStatus, 
  updateOrderPaymentStatus, 
  updateOrderShippingStatus, 
  updateOrderVerificationStatus 
} from '../../redux-store/order/actions/status';


function useOrder() {
  const user = useUser();
  const cart = useCart();
  const dispatch = useAppDispatch();
  const order: OrderCheckout = useAppSelector((state) => state.order);
  const [ current, setCurrent ] = React.useState<Order>(orderInitialState);

  // auto updates order upon mount/update
  React.useEffect(() => {
    const token: Order = createToken();
    setCurrent(token);
  }, [order]);

  React.useEffect(() => {
    console.log(current);
  }, [current]);

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

  function shippingError(e: boolean): void {
    dispatch(shippingErrorStatus(e));
  };

  function updateCompletionStatus(s: boolean): void {
    dispatch(updateOrderCompletionStatus(s));
  };

  function updateErrorStatus(e: boolean): void {
    dispatch(updateOrderErrorStatus(e));
  };
  
  function updatePaymentStatus(s: boolean): void {
    dispatch(updateOrderPaymentStatus(s));
  };
  
  function updatePendingStatus(p: boolean): void {
    dispatch(updateOrderPaymentStatus(p));
  };

  function updateShippingStatus(s: boolean): void {
    dispatch(updateOrderShippingStatus(s));
  };

  function updateVerificationStatus(v: boolean): void {
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
    shippingError,
    updateCompletionStatus,
    updateErrorStatus,
    updatePaymentStatus,
    updatePendingStatus,
    updateShippingStatus,
    updateVerificationStatus,
    verifyShipping
  }
};

export { useOrder };
