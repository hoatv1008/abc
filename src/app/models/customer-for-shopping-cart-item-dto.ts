/* tslint:disable */
import { AddressDto } from './address-dto';
export interface CustomerForShoppingCartItemDto {
  has_shopping_cart_items?: boolean;
  billing_address?: AddressDto;
  addresses?: Array<AddressDto>;
  id?: string;
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  language_id?: string;
  admin_comment?: string;
  is_tax_exempt?: boolean;
  shipping_address?: AddressDto;
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
