/* tslint:disable */
export interface LanguageDto {
  rtl?: boolean;
  id?: string;
  language_culture?: string;
  unique_seo_code?: string;
  flag_image_file_name?: string;
  name?: string;
  limited_to_stores?: boolean;
  default_currency_id?: number;
  published?: boolean;
  display_order?: number;
  store_ids?: Array<number>;
}
