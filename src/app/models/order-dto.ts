/* tslint:disable */
import { OrderCustomerDto } from './order-customer-dto';
import { AddressDto } from './address-dto';
import { OrderItemDto } from './order-item-dto';
export class OrderDto {
    id: number;
    salesOrderCode: string;
    customerId: number;
    orderDate: Date;
    orderStatus: string;
    customerName: string;
    address: string;
    phone: string;
    shipAddress: string;
    subTotalAmount: number;
    totalAmount: number;
    notes: string;
    orderItems?: Array<OrderItemDto>;
    discountAmount: number;
    returnAmount: number;
    payAmount: number;
    selected: boolean;
    source: string;
}                     
