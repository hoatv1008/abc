/* tslint:disable */
import { ProductItemAttributeDto } from './product-item-attribute-dto';
import { ProductDto } from './product-dto';
export class OrderItemDto {
  original_product_cost?: number;
  id?: string;
  quantity?: number;
  unit_price_incl_tax?: number;
  unit_price_excl_tax?: number;
  price_incl_tax?: number;
  price_excl_tax?: number;
  discount_amount_incl_tax?: number;
  discount_amount_excl_tax?: number;
  product_attributes?: Array<ProductItemAttributeDto>;
  attribute_description?: string;
  download_count?: number;
  isDownload_activated?: boolean;
  license_download_id?: number;
  item_weight?: number;
  rental_start_date_utc?: string;
  rental_end_date_utc?: string;
  product?: ProductDto;
  product_id?: number;
}
