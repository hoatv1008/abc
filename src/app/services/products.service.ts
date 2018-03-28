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

import { ProductsRootObjectDto } from '../models/products-root-object-dto';
import { ErrorsRootObject } from '../models/errors-root-object';
import { ProductsCountRootObject } from '../models/products-count-root-object';

@Injectable()
export class ProductsService extends BaseService {
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
   ApiProductsGetResponse(parameters?: any): Observable<HttpResponse<ProductsRootObjectDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (parameters != null) __params = __params.set("parameters", parameters.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/products`,
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
        let _body: ProductsRootObjectDto = null;
        _body = _resp.body as ProductsRootObjectDto
        return _resp.clone({body: _body}) as HttpResponse<ProductsRootObjectDto>;
      })
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
   ApiProductsGet(parameters?: any): Observable<ProductsRootObjectDto> {
    return this.ApiProductsGetResponse(parameters).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param productDelta undefined
   * @return Success
   */
   ApiProductsPostResponse(productDelta?: any): Observable<HttpResponse<ProductsRootObjectDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (productDelta != null) __params = __params.set("productDelta", productDelta.toString());
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/products`,
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
        let _body: ProductsRootObjectDto = null;
        _body = _resp.body as ProductsRootObjectDto
        return _resp.clone({body: _body}) as HttpResponse<ProductsRootObjectDto>;
      })
    );
  }

  /**
   * @param productDelta undefined
   * @return Success
   */
   ApiProductsPost(productDelta?: any): Observable<ProductsRootObjectDto> {
    return this.ApiProductsPostResponse(productDelta).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
   ApiProductsCountGetResponse(parameters?: any): Observable<HttpResponse<ProductsCountRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (parameters != null) __params = __params.set("parameters", parameters.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/products/count`,
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
        let _body: ProductsCountRootObject = null;
        _body = _resp.body as ProductsCountRootObject
        return _resp.clone({body: _body}) as HttpResponse<ProductsCountRootObject>;
      })
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
   ApiProductsCountGet(parameters?: any): Observable<ProductsCountRootObject> {
    return this.ApiProductsCountGetResponse(parameters).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ProductsService.ApiProductsByIdGetParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `fields`: 
   *
   * @return Success
   */
   ApiProductsByIdGetResponse(params: ProductsService.ApiProductsByIdGetParams): Observable<HttpResponse<ProductsRootObjectDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set("fields", params.fields.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/products/${params.id}`,
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
        let _body: ProductsRootObjectDto = null;
        _body = _resp.body as ProductsRootObjectDto
        return _resp.clone({body: _body}) as HttpResponse<ProductsRootObjectDto>;
      })
    );
  }

  /**
   * @param params The `ProductsService.ApiProductsByIdGetParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `fields`: 
   *
   * @return Success
   */
   ApiProductsByIdGet(params: ProductsService.ApiProductsByIdGetParams): Observable<ProductsRootObjectDto> {
    return this.ApiProductsByIdGetResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ProductsService.ApiProductsByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `productDelta`: 
   *
   * @return Success
   */
   ApiProductsByIdPutResponse(params: ProductsService.ApiProductsByIdPutParams): Observable<HttpResponse<ProductsRootObjectDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.productDelta != null) __params = __params.set("productDelta", params.productDelta.toString());
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/products/${params.id}`,
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
        let _body: ProductsRootObjectDto = null;
        _body = _resp.body as ProductsRootObjectDto
        return _resp.clone({body: _body}) as HttpResponse<ProductsRootObjectDto>;
      })
    );
  }

  /**
   * @param params The `ProductsService.ApiProductsByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `productDelta`: 
   *
   * @return Success
   */
   ApiProductsByIdPut(params: ProductsService.ApiProductsByIdPutParams): Observable<ProductsRootObjectDto> {
    return this.ApiProductsByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   ApiProductsByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/products/${id}`,
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
   ApiProductsByIdDelete(id: number): Observable<void> {
    return this.ApiProductsByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module ProductsService {

  /**
   * Parameters for ApiProductsByIdGet
   */
   export interface ApiProductsByIdGetParams {

    id: number;

    fields?: string;
  }

  /**
   * Parameters for ApiProductsByIdPut
   */
   export interface ApiProductsByIdPutParams {

    id: string;

    productDelta?: any;
  }
}
