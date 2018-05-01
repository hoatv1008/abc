/* tslint:disable */
import { ProductItemAttributeDto } from './product-item-attribute-dto';
import { ProductDto } from './product-dto';
export class OrderItemDto {
    salesOrderCode: string;
    lineId: number;
    customerId: number;
    orderDate: Date;
    productCode: string;
    productName: string;
    unitPrice: number;
    quantity: number;
    totalAmount: number;
    discount: number;
    attributeCode: number;
}
