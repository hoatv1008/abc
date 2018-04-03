import { OrderDto } from './order-dto';
import { OrderCustomerVM } from './order-customer-dto-vm';
import { OrderItemVM } from './order-item-vm';
export class OrderDtoVM extends OrderDto  {
    selected?: boolean;
    customer?: OrderCustomerVM;
    order_items?: Array<OrderItemVM>;
}