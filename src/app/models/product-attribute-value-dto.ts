/* tslint:disable */
import { ImageDto } from './image-dto';

export interface ProductAttributeValueDto {

  weight_adjustment?: number;

  id?: number;

  associated_product_id?: number;

  name?: string;

  color_squares_rgb?: string;

  image_squares_image?: ImageDto;

  price_adjustment?: number;

  type_id?: number;

  cost?: number;

  quantity?: number;

  is_pre_selected?: boolean;

  display_order?: number;

  product_image_id?: number;

  type?: string;
}
