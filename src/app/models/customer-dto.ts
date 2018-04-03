/* tslint:disable */
import { ShoppingCartItemDto } from './shopping-cart-item-dto';
import { AddressDto } from './address-dto';
export class CustomerDto {
  is_tax_exempt?: boolean;
  shopping_cart_items?: Array<ShoppingCartItemDto>;
  shipping_address?: AddressDto;
  addresses?: Array<AddressDto>;
  id?: string;
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  language_id?: string;
  admin_comment?: string;
  billing_address?: AddressDto;
  has_shopping_cart_items?: boolean;
  active?: boolean;
  deleted?: boolean;
  is_system_account?: boolean;
  system_name?: string;
  last_ip_address?: string;
  created_on_utc?: string;
  last_login_date_utc?: string;
  last_activity_date_utc?: string;
  registered_in_store_id?: number;
  role_ids?: Array<number>;
}
