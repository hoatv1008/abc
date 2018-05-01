/* tslint:disable */
import { LocalizedNameDto } from './localized-name-dto';
import { ImageMappingDto } from './image-mapping-dto';
import { ProductAttributeMappingDto } from './product-attribute-mapping-dto';
export class ProductDto {
    code: string;
    productName: string;
    gtin: string;
    description: string;
    price: number;
    cost: number;
    image: string;
    category: number;
    stock: number;
    sold: number;
}                     
