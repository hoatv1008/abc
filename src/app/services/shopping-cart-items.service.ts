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

import { ShoppingCartItemsRootObject } from '../models/shopping-cart-items-root-object';
import { ErrorsRootObject } from '../models/errors-root-object';
@Injectable()
export class ShoppingCartItemsService extends BaseService {
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
  ApiShopping_cart_itemsGetResponse(parameters?: any): Observable<HttpResponse<ShoppingCartItemsRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (parameters != null) __params = __params.set('parameters', parameters.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/shopping_cart_items`,
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
        let _body: ShoppingCartItemsRootObject = null;
        _body = _resp.body as ShoppingCartItemsRootObject
        return _resp.clone({body: _body}) as HttpResponse<ShoppingCartItemsRootObject>;
      })
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
  ApiShopping_cart_itemsGet(parameters?: any): Observable<ShoppingCartItemsRootObject> {
    return this.ApiShopping_cart_itemsGetResponse(parameters).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param shoppingCartItemDelta undefined
   * @return Success
   */
  ApiShopping_cart_itemsPostResponse(shoppingCartItemDelta?: any): Observable<HttpResponse<ShoppingCartItemsRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (shoppingCartItemDelta != null) __params = __params.set('shoppingCartItemDelta', shoppingCartItemDelta.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/shopping_cart_items`,
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
        let _body: ShoppingCartItemsRootObject = null;
        _body = _resp.body as ShoppingCartItemsRootObject
        return _resp.clone({body: _body}) as HttpResponse<ShoppingCartItemsRootObject>;
      })
    );
  }

  /**
   * @param shoppingCartItemDelta undefined
   * @return Success
   */
  ApiShopping_cart_itemsPost(shoppingCartItemDelta?: any): Observable<ShoppingCartItemsRootObject> {
    return this.ApiShopping_cart_itemsPostResponse(shoppingCartItemDelta).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ShoppingCartItemsService.ApiShopping_cart_itemsByCustomerIdGetParams` containing the following parameters:
   *
   * - `customerId`:
   *
   * - `parameters`:
   *
   * @return Success
   */
  ApiShopping_cart_itemsByCustomerIdGetResponse(params: ShoppingCartItemsService.ApiShopping_cart_itemsByCustomerIdGetParams): Observable<HttpResponse<ShoppingCartItemsRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.parameters != null) __params = __params.set('parameters', params.parameters.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/shopping_cart_items/${params.customerId}`,
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
        let _body: ShoppingCartItemsRootObject = null;
        _body = _resp.body as ShoppingCartItemsRootObject
        return _resp.clone({body: _body}) as HttpResponse<ShoppingCartItemsRootObject>;
      })
    );
  }

  /**
   * @param params The `ShoppingCartItemsService.ApiShopping_cart_itemsByCustomerIdGetParams` containing the following parameters:
   *
   * - `customerId`:
   *
   * - `parameters`:
   *
   * @return Success
   */
  ApiShopping_cart_itemsByCustomerIdGet(params: ShoppingCartItemsService.ApiShopping_cart_itemsByCustomerIdGetParams): Observable<ShoppingCartItemsRootObject> {
    return this.ApiShopping_cart_itemsByCustomerIdGetResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ShoppingCartItemsService.ApiShopping_cart_itemsByIdPutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `shoppingCartItemDelta`:
   *
   * @return Success
   */
  ApiShopping_cart_itemsByIdPutResponse(params: ShoppingCartItemsService.ApiShopping_cart_itemsByIdPutParams): Observable<HttpResponse<ShoppingCartItemsRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.shoppingCartItemDelta != null) __params = __params.set('shoppingCartItemDelta', params.shoppingCartItemDelta.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/shopping_cart_items/${params.id}`,
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
        let _body: ShoppingCartItemsRootObject = null;
        _body = _resp.body as ShoppingCartItemsRootObject
        return _resp.clone({body: _body}) as HttpResponse<ShoppingCartItemsRootObject>;
      })
    );
  }

  /**
   * @param params The `ShoppingCartItemsService.ApiShopping_cart_itemsByIdPutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `shoppingCartItemDelta`:
   *
   * @return Success
   */
  ApiShopping_cart_itemsByIdPut(params: ShoppingCartItemsService.ApiShopping_cart_itemsByIdPutParams): Observable<ShoppingCartItemsRootObject> {
    return this.ApiShopping_cart_itemsByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
  ApiShopping_cart_itemsByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/shopping_cart_items/${id}`,
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
  ApiShopping_cart_itemsByIdDelete(id: number): Observable<void> {
    return this.ApiShopping_cart_itemsByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module ShoppingCartItemsService {

  /**
   * Parameters for ApiShopping_cart_itemsByCustomerIdGet
   */
  export interface ApiShopping_cart_itemsByCustomerIdGetParams {
    customerId: number;
    parameters?: any;
  }

  /**
   * Parameters for ApiShopping_cart_itemsByIdPut
   */
  export interface ApiShopping_cart_itemsByIdPutParams {
    id: string;
    shoppingCartItemDelta?: any;
  }
}
