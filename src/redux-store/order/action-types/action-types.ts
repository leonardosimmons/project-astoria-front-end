
import { ShippingActions } from './shipping';
import { OrderStatusActions } from './status';


export type OrderActions = OrderStatusActions | ShippingActions;