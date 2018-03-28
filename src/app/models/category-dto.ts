/* tslint:disable */
import { LocalizedNameDto } from './localized-name-dto';
import { ImageDto } from './image-dto';

export interface CategoryDto {

  show_on_home_page?: boolean;

  id?: string;

  localized_names?: LocalizedNameDto[];

  description?: string;

  category_template_id?: number;

  meta_keywords?: string;

  meta_description?: string;

  meta_title?: string;

  parent_category_id?: number;

  page_size?: number;

  page_size_options?: string;

  price_ranges?: string;

  name?: string;

  include_in_top_menu?: boolean;

  has_discounts_applied?: boolean;

  published?: boolean;

  deleted?: boolean;

  display_order?: number;

  created_on_utc?: string;

  updated_on_utc?: string;

  role_ids?: number[];

  discount_ids?: number[];

  store_ids?: number[];

  image?: ImageDto;

  se_name?: string;
}
