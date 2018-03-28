/* tslint:disable */
import { ProductItemAttributeDto } from './product-item-attribute-dto';
import { ProductDto } from './product-dto';
import { CustomerForShoppingCartItemDto } from './customer-for-shopping-cart-item-dto';

export interface ShoppingCartItemDto {

  created_on_utc?: string;

  id?: string;

  customer_entered_price?: number;

  quantity?: number;

  rental_start_date_utc?: string;

  rental_end_date_utc?: string;

  product_attributes?: ProductItemAttributeDto[];

  updated_on_utc?: string;

  shopping_cart_type?: string;

  product_id?: number;

  product?: ProductDto;

  customer_id?: number;

  customer?: CustomerForShoppingCartItemDto;
}
