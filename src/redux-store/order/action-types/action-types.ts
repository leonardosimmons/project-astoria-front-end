
import { ShippingActions } from './shipping';
import { OrderStatusActions } from './status';


export type OrderActions = ShippingActions | OrderStatusActions;