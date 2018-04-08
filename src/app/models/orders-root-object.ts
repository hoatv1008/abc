/* tslint:disable */
import { OrderDto } from './order-dto';
import { OrderDtoVM } from './order-dto-vm';
export interface OrdersRootObject {
  orders?: Array<OrderDtoVM>;
}
