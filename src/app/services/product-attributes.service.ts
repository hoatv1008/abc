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

import { ProductAttributesRootObjectDto } from '../models/product-attributes-root-object-dto';
import { ErrorsRootObject } from '../models/errors-root-object';
import { ProductAttributesCountRootObject } from '../models/product-attributes-count-root-object';

@Injectable()
export class ProductAttributesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ProductAttributesService.ApiProductattributesGetParams` containing the following parameters:
   *
   * - `SinceId`: 
   *
   * - `Page`: 
   *
   * - `Limit`: 
   *
   * - `Ids`: 
   *
   * - `Fields`: 
   *
   * @return Success
   */
   ApiProductattributesGetResponse(params: ProductAttributesService.ApiProductattributesGetParams): Observable<HttpResponse<ProductAttributesRootObjectDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.SinceId != null) __params = __params.set("SinceId", params.SinceId.toString());
    if (params.Page != null) __params = __params.set("Page", params.Page.toString());
    if (params.Limit != null) __params = __params.set("Limit", params.Limit.toString());
    (params.Ids || []).forEach((val, index) => {if (val != null) __params = __params.append("Ids", val.toString())});
    if (params.Fields != null) __params = __params.set("Fields", params.Fields.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/productattributes`,
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
        let _body: ProductAttributesRootObjectDto = null;
        _body = _resp.body as ProductAttributesRootObjectDto
        return _resp.clone({body: _body}) as HttpResponse<ProductAttributesRootObjectDto>;
      })
    );
  }

  /**
   * @param params The `ProductAttributesService.ApiProductattributesGetParams` containing the following parameters:
   *
   * - `SinceId`: 
   *
   * - `Page`: 
   *
   * - `Limit`: 
   *
   * - `Ids`: 
   *
   * - `Fields`: 
   *
   * @return Success
   */
   ApiProductattributesGet(params: ProductAttributesService.ApiProductattributesGetParams): Observable<ProductAttributesRootObjectDto> {
    return this.ApiProductattributesGetResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param productAttributeDelta undefined
   * @return Success
   */
   ApiProductattributesPostResponse(productAttributeDelta?: any): Observable<HttpResponse<ProductAttributesRootObjectDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (productAttributeDelta != null) __params = __params.set("productAttributeDelta", productAttributeDelta.toString());
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/productattributes`,
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
        let _body: ProductAttributesRootObjectDto = null;
        _body = _resp.body as ProductAttributesRootObjectDto
        return _resp.clone({body: _body}) as HttpResponse<ProductAttributesRootObjectDto>;
      })
    );
  }

  /**
   * @param productAttributeDelta undefined
   * @return Success
   */
   ApiProductattributesPost(productAttributeDelta?: any): Observable<ProductAttributesRootObjectDto> {
    return this.ApiProductattributesPostResponse(productAttributeDelta).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @return Success
   */
   ApiProductattributesCountGetResponse(): Observable<HttpResponse<ProductAttributesCountRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/productattributes/count`,
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
        let _body: ProductAttributesCountRootObject = null;
        _body = _resp.body as ProductAttributesCountRootObject
        return _resp.clone({body: _body}) as HttpResponse<ProductAttributesCountRootObject>;
      })
    );
  }

  /**
   * @return Success
   */
   ApiProductattributesCountGet(): Observable<ProductAttributesCountRootObject> {
    return this.ApiProductattributesCountGetResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ProductAttributesService.ApiProductattributesByIdGetParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `fields`: 
   *
   * @return Success
   */
   ApiProductattributesByIdGetResponse(params: ProductAttributesService.ApiProductattributesByIdGetParams): Observable<HttpResponse<ProductAttributesRootObjectDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set("fields", params.fields.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/productattributes/${params.id}`,
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
        let _body: ProductAttributesRootObjectDto = null;
        _body = _resp.body as ProductAttributesRootObjectDto
        return _resp.clone({body: _body}) as HttpResponse<ProductAttributesRootObjectDto>;
      })
    );
  }

  /**
   * @param params The `ProductAttributesService.ApiProductattributesByIdGetParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `fields`: 
   *
   * @return Success
   */
   ApiProductattributesByIdGet(params: ProductAttributesService.ApiProductattributesByIdGetParams): Observable<ProductAttributesRootObjectDto> {
    return this.ApiProductattributesByIdGetResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ProductAttributesService.ApiProductattributesByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `productAttributeDelta`: 
   *
   * @return Success
   */
   ApiProductattributesByIdPutResponse(params: ProductAttributesService.ApiProductattributesByIdPutParams): Observable<HttpResponse<ProductAttributesRootObjectDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.productAttributeDelta != null) __params = __params.set("productAttributeDelta", params.productAttributeDelta.toString());
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/productattributes/${params.id}`,
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
        let _body: ProductAttributesRootObjectDto = null;
        _body = _resp.body as ProductAttributesRootObjectDto
        return _resp.clone({body: _body}) as HttpResponse<ProductAttributesRootObjectDto>;
      })
    );
  }

  /**
   * @param params The `ProductAttributesService.ApiProductattributesByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `productAttributeDelta`: 
   *
   * @return Success
   */
   ApiProductattributesByIdPut(params: ProductAttributesService.ApiProductattributesByIdPutParams): Observable<ProductAttributesRootObjectDto> {
    return this.ApiProductattributesByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   ApiProductattributesByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/productattributes/${id}`,
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
   ApiProductattributesByIdDelete(id: number): Observable<void> {
    return this.ApiProductattributesByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module ProductAttributesService {

  /**
   * Parameters for ApiProductattributesGet
   */
   export interface ApiProductattributesGetParams {

    SinceId: number;

    Page: number;

    Limit: number;

    Ids?: number[];

    Fields?: string;
  }

  /**
   * Parameters for ApiProductattributesByIdGet
   */
   export interface ApiProductattributesByIdGetParams {

    id: number;

    fields?: string;
  }

  /**
   * Parameters for ApiProductattributesByIdPut
   */
   export interface ApiProductattributesByIdPutParams {

    id: string;

    productAttributeDelta?: any;
  }
}
