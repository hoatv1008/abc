/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse, 
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import { ProductCategoryMappingsRootObject } from '../models/product-category-mappings-root-object';
import { ErrorsRootObject } from '../models/errors-root-object';
import { ProductCategoryMappingsCountRootObject } from '../models/product-category-mappings-count-root-object';

@Injectable()
export class ProductCategoryMappingsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param parameters undefined
   * @return Success
   */
   ApiProduct_category_mappingsGetResponse(parameters?: any): Observable<HttpResponse<ProductCategoryMappingsRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (parameters != null) __params = __params.set("parameters", parameters.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/product_category_mappings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ProductCategoryMappingsRootObject = null;
        _body = _resp.body as ProductCategoryMappingsRootObject
        return _resp.clone({body: _body}) as HttpResponse<ProductCategoryMappingsRootObject>;
      })
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
   ApiProduct_category_mappingsGet(parameters?: any): Observable<ProductCategoryMappingsRootObject> {
    return this.ApiProduct_category_mappingsGetResponse(parameters).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param productCategoryDelta undefined
   * @return Success
   */
   ApiProduct_category_mappingsPostResponse(productCategoryDelta?: any): Observable<HttpResponse<ProductCategoryMappingsRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (productCategoryDelta != null) __params = __params.set("productCategoryDelta", productCategoryDelta.toString());
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/product_category_mappings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ProductCategoryMappingsRootObject = null;
        _body = _resp.body as ProductCategoryMappingsRootObject
        return _resp.clone({body: _body}) as HttpResponse<ProductCategoryMappingsRootObject>;
      })
    );
  }

  /**
   * @param productCategoryDelta undefined
   * @return Success
   */
   ApiProduct_category_mappingsPost(productCategoryDelta?: any): Observable<ProductCategoryMappingsRootObject> {
    return this.ApiProduct_category_mappingsPostResponse(productCategoryDelta).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
   ApiProduct_category_mappingsCountGetResponse(parameters?: any): Observable<HttpResponse<ProductCategoryMappingsCountRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (parameters != null) __params = __params.set("parameters", parameters.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/product_category_mappings/count`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ProductCategoryMappingsCountRootObject = null;
        _body = _resp.body as ProductCategoryMappingsCountRootObject
        return _resp.clone({body: _body}) as HttpResponse<ProductCategoryMappingsCountRootObject>;
      })
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
   ApiProduct_category_mappingsCountGet(parameters?: any): Observable<ProductCategoryMappingsCountRootObject> {
    return this.ApiProduct_category_mappingsCountGetResponse(parameters).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ProductCategoryMappingsService.ApiProduct_category_mappingsByIdGetParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `fields`: 
   *
   * @return Success
   */
   ApiProduct_category_mappingsByIdGetResponse(params: ProductCategoryMappingsService.ApiProduct_category_mappingsByIdGetParams): Observable<HttpResponse<ProductCategoryMappingsRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set("fields", params.fields.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/product_category_mappings/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ProductCategoryMappingsRootObject = null;
        _body = _resp.body as ProductCategoryMappingsRootObject
        return _resp.clone({body: _body}) as HttpResponse<ProductCategoryMappingsRootObject>;
      })
    );
  }

  /**
   * @param params The `ProductCategoryMappingsService.ApiProduct_category_mappingsByIdGetParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `fields`: 
   *
   * @return Success
   */
   ApiProduct_category_mappingsByIdGet(params: ProductCategoryMappingsService.ApiProduct_category_mappingsByIdGetParams): Observable<ProductCategoryMappingsRootObject> {
    return this.ApiProduct_category_mappingsByIdGetResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ProductCategoryMappingsService.ApiProduct_category_mappingsByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `productCategoryDelta`: 
   *
   * @return Success
   */
   ApiProduct_category_mappingsByIdPutResponse(params: ProductCategoryMappingsService.ApiProduct_category_mappingsByIdPutParams): Observable<HttpResponse<ProductCategoryMappingsRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.productCategoryDelta != null) __params = __params.set("productCategoryDelta", params.productCategoryDelta.toString());
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/product_category_mappings/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ProductCategoryMappingsRootObject = null;
        _body = _resp.body as ProductCategoryMappingsRootObject
        return _resp.clone({body: _body}) as HttpResponse<ProductCategoryMappingsRootObject>;
      })
    );
  }

  /**
   * @param params The `ProductCategoryMappingsService.ApiProduct_category_mappingsByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `productCategoryDelta`: 
   *
   * @return Success
   */
   ApiProduct_category_mappingsByIdPut(params: ProductCategoryMappingsService.ApiProduct_category_mappingsByIdPutParams): Observable<ProductCategoryMappingsRootObject> {
    return this.ApiProduct_category_mappingsByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   ApiProduct_category_mappingsByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/product_category_mappings/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param id undefined
   */
   ApiProduct_category_mappingsByIdDelete(id: number): Observable<void> {
    return this.ApiProduct_category_mappingsByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module ProductCategoryMappingsService {

  /**
   * Parameters for ApiProduct_category_mappingsByIdGet
   */
   export interface ApiProduct_category_mappingsByIdGetParams {

    id: number;

    fields?: string;
  }

  /**
   * Parameters for ApiProduct_category_mappingsByIdPut
   */
   export interface ApiProduct_category_mappingsByIdPutParams {

    id: string;

    productCategoryDelta?: any;
  }
}
