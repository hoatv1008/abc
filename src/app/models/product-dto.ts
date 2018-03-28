/* tslint:disable */
import { LocalizedNameDto } from './localized-name-dto';
import { ImageMappingDto } from './image-mapping-dto';
import { ProductAttributeMappingDto } from './product-attribute-mapping-dto';

export interface ProductDto {

  order_minimum_quantity?: number;

  id?: string;

  name?: string;

  localized_names?: LocalizedNameDto[];

  short_description?: string;

  full_description?: string;

  show_on_home_page?: boolean;

  meta_keywords?: string;

  meta_description?: string;

  meta_title?: string;

  allow_customer_reviews?: boolean;

  approved_rating_sum?: number;

  not_approved_rating_sum?: number;

  approved_total_reviews?: number;

  not_approved_total_reviews?: number;

  sku?: string;

  manufacturer_part_number?: string;

  gtin?: string;

  is_gift_card?: boolean;

  require_other_products?: boolean;

  automatically_add_required_products?: boolean;

  is_download?: boolean;

  unlimited_downloads?: boolean;

  max_number_of_downloads?: number;

  download_expiration_days?: number;

  has_sample_download?: boolean;

  has_user_agreement?: boolean;

  is_recurring?: boolean;

  recurring_cycle_length?: number;

  recurring_total_cycles?: number;

  is_rental?: boolean;

  rental_price_length?: number;

  is_ship_enabled?: boolean;

  is_free_shipping?: boolean;

  ship_separately?: boolean;

  additional_shipping_charge?: number;

  is_tax_exempt?: boolean;

  is_telecommunications_or_broadcasting_or_electronic_services?: boolean;

  use_multiple_warehouses?: boolean;

  manage_inventory_method_id?: number;

  stock_quantity?: number;

  display_stock_availability?: boolean;

  display_stock_quantity?: boolean;

  min_stock_quantity?: number;

  notify_admin_for_quantity_below?: number;

  allow_back_in_stock_subscriptions?: boolean;

  visible_individually?: boolean;

  order_maximum_quantity?: number;

  allowed_quantities?: string;

  allow_adding_only_existing_attribute_combinations?: boolean;

  disable_buy_button?: boolean;

  disable_wishlist_button?: boolean;

  available_for_pre_order?: boolean;

  pre_order_availability_start_date_time_utc?: string;

  call_for_price?: boolean;

  price?: number;

  old_price?: number;

  product_cost?: number;

  special_price?: number;

  special_price_start_date_time_utc?: string;

  special_price_end_date_time_utc?: string;

  customer_enters_price?: boolean;

  minimum_customer_entered_price?: number;

  maximum_customer_entered_price?: number;

  baseprice_enabled?: boolean;

  baseprice_amount?: number;

  baseprice_base_amount?: number;

  has_tier_prices?: boolean;

  has_discounts_applied?: boolean;

  weight?: number;

  length?: number;

  width?: number;

  height?: number;

  available_start_date_time_utc?: string;

  available_end_date_time_utc?: string;

  display_order?: number;

  published?: boolean;

  deleted?: boolean;

  created_on_utc?: string;

  updated_on_utc?: string;

  product_type?: string;

  parent_grouped_product_id?: number;

  role_ids?: number[];

  discount_ids?: number[];

  store_ids?: number[];

  manufacturer_ids?: number[];

  images?: ImageMappingDto[];

  attributes?: ProductAttributeMappingDto[];

  associated_product_ids?: number[];

  tags?: string[];

  vendor_id?: number;

  se_name?: string;
}