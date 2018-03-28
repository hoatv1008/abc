/* tslint:disable */
import { ProductAttributeValueDto } from './product-attribute-value-dto';

export interface ProductAttributeMappingDto {

  id?: number;

  product_attribute_id?: number;

  product_attribute_name?: string;

  text_prompt?: string;

  is_required?: boolean;

  attribute_control_type_id?: number;

  display_order?: number;

  default_value?: string;

  attribute_control_type_name?: string;

  attribute_values?: ProductAttributeValueDto[];
}
