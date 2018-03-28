/* tslint:disable */
import { OrderCustomerDto } from './order-customer-dto';
import { AddressDto } from './address-dto';
import { OrderItemDto } from './order-item-dto';

export interface OrderDto {

  customer_language_id?: number;

  id?: string;

  pick_up_in_store?: boolean;

  payment_method_system_name?: string;

  customer_currency_code?: string;

  currency_rate?: number;

  customer_tax_display_type_id?: number;

  vat_number?: string;

  order_subtotal_incl_tax?: number;

  order_subtotal_excl_tax?: number;

  order_sub_total_discount_incl_tax?: number;

  order_sub_total_discount_excl_tax?: number;

  order_shipping_incl_tax?: number;

  order_shipping_excl_tax?: number;

  payment_method_additional_fee_incl_tax?: number;

  payment_method_additional_fee_excl_tax?: number;

  tax_rates?: string;

  order_tax?: number;

  order_discount?: number;

  order_total?: number;

  refunded_amount?: number;

  reward_points_were_added?: boolean;

  checkout_attribute_description?: string;

  store_id?: number;

  affiliate_id?: number;

  customer_ip?: string;

  authorization_transaction_id?: string;

  authorization_transaction_code?: string;

  authorization_transaction_result?: string;

  capture_transaction_id?: string;

  capture_transaction_result?: string;

  subscription_transaction_id?: string;

  paid_date_utc?: string;

  shipping_method?: string;

  shipping_rate_computation_method_system_name?: string;

  custom_values_xml?: string;

  deleted?: boolean;

  created_on_utc?: string;

  customer?: OrderCustomerDto;

  customer_id?: number;

  billing_address?: AddressDto;

  shipping_address?: AddressDto;

  order_items?: OrderItemDto[];

  order_status?: string;

  payment_status?: string;

  shipping_status?: string;

  customer_tax_display_type?: string;
}
