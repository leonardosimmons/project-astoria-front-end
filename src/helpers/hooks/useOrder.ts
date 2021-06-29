
import { useAppDispatch, useAppSelector } from './redux';
import { useCart } from './useCart';
import { useUser } from './useUser';
import { OrderContext, OrderShippingInfo } from '../../utils/types/types';

import { 
  shippingErrorStatus, 
  setOrderAddress, 
  setOrderCity, 
  setOrderState, 
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
  const order: OrderContext = useAppSelector((state) => state.order);


  function setAddress(a: string): void {
    dispatch(setOrderAddress(a));
  };
  
  function setCity(c: string): void {
    dispatch(setOrderCity(c));
  };
  
  function setPostalCode(pC: number): void {
    dispatch(setOrderPostalCode(pC));
  };
  
  function setState(c: string): void {
    dispatch(setOrderState(c));
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
    user: {
      id: user.id,
      info: user.info
    },
    items: cart.items,
    summary: cart.summary,
    shipping: order.shipping,
    status: order.status,
    setAddress,
    setCity,
    setPostalCode,
    setState,
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
