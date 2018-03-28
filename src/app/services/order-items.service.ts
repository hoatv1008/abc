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

import { OrderItemsRootObject } from '../models/order-items-root-object';
import { ErrorsRootObject } from '../models/errors-root-object';
import { OrderItemsCountRootObject } from '../models/order-items-count-root-object';

@Injectable()
export class OrderItemsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `OrderItemsService.ApiOrdersByOrderIdItemsGetParams` containing the following parameters:
   *
   * - `orderId`: 
   *
   * - `parameters`: 
   *
   * @return Success
   */
   ApiOrdersByOrderIdItemsGetResponse(params: OrderItemsService.ApiOrdersByOrderIdItemsGetParams): Observable<HttpResponse<OrderItemsRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.parameters != null) __params = __params.set("parameters", params.parameters.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/orders/${params.orderId}/items`,
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
        let _body: OrderItemsRootObject = null;
        _body = _resp.body as OrderItemsRootObject
        return _resp.clone({body: _body}) as HttpResponse<OrderItemsRootObject>;
      })
    );
  }

  /**
   * @param params The `OrderItemsService.ApiOrdersByOrderIdItemsGetParams` containing the following parameters:
   *
   * - `orderId`: 
   *
   * - `parameters`: 
   *
   * @return Success
   */
   ApiOrdersByOrderIdItemsGet(params: OrderItemsService.ApiOrdersByOrderIdItemsGetParams): Observable<OrderItemsRootObject> {
    return this.ApiOrdersByOrderIdItemsGetResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `OrderItemsService.ApiOrdersByOrderIdItemsPostParams` containing the following parameters:
   *
   * - `orderId`: 
   *
   * - `orderItemDelta`: 
   *
   * @return Success
   */
   ApiOrdersByOrderIdItemsPostResponse(params: OrderItemsService.ApiOrdersByOrderIdItemsPostParams): Observable<HttpResponse<OrderItemsRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.orderItemDelta != null) __params = __params.set("orderItemDelta", params.orderItemDelta.toString());
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/orders/${params.orderId}/items`,
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
        let _body: OrderItemsRootObject = null;
        _body = _resp.body as OrderItemsRootObject
        return _resp.clone({body: _body}) as HttpResponse<OrderItemsRootObject>;
      })
    );
  }

  /**
   * @param params The `OrderItemsService.ApiOrdersByOrderIdItemsPostParams` containing the following parameters:
   *
   * - `orderId`: 
   *
   * - `orderItemDelta`: 
   *
   * @return Success
   */
   ApiOrdersByOrderIdItemsPost(params: OrderItemsService.ApiOrdersByOrderIdItemsPostParams): Observable<OrderItemsRootObject> {
    return this.ApiOrdersByOrderIdItemsPostResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param orderId undefined
   */
   ApiOrdersByOrderIdItemsDeleteResponse(orderId: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/orders/${orderId}/items`,
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
   * @param orderId undefined
   */
   ApiOrdersByOrderIdItemsDelete(orderId: number): Observable<void> {
    return this.ApiOrdersByOrderIdItemsDeleteResponse(orderId).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param orderId undefined
   * @return Success
   */
   ApiOrdersByOrderIdItemsCountGetResponse(orderId: number): Observable<HttpResponse<OrderItemsCountRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/orders/${orderId}/items/count`,
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
        let _body: OrderItemsCountRootObject = null;
        _body = _resp.body as OrderItemsCountRootObject
        return _resp.clone({body: _body}) as HttpResponse<OrderItemsCountRootObject>;
      })
    );
  }

  /**
   * @param orderId undefined
   * @return Success
   */
   ApiOrdersByOrderIdItemsCountGet(orderId: number): Observable<OrderItemsCountRootObject> {
    return this.ApiOrdersByOrderIdItemsCountGetResponse(orderId).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `OrderItemsService.ApiOrdersByOrderIdItemsByOrderItemIdGetParams` containing the following parameters:
   *
   * - `orderItemId`: 
   *
   * - `orderId`: 
   *
   * - `fields`: 
   *
   * @return Success
   */
   ApiOrdersByOrderIdItemsByOrderItemIdGetResponse(params: OrderItemsService.ApiOrdersByOrderIdItemsByOrderItemIdGetParams): Observable<HttpResponse<OrderItemsRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set("fields", params.fields.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/orders/${params.orderId}/items/${params.orderItemId}`,
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
        let _body: OrderItemsRootObject = null;
        _body = _resp.body as OrderItemsRootObject
        return _resp.clone({body: _body}) as HttpResponse<OrderItemsRootObject>;
      })
    );
  }

  /**
   * @param params The `OrderItemsService.ApiOrdersByOrderIdItemsByOrderItemIdGetParams` containing the following parameters:
   *
   * - `orderItemId`: 
   *
   * - `orderId`: 
   *
   * - `fields`: 
   *
   * @return Success
   */
   ApiOrdersByOrderIdItemsByOrderItemIdGet(params: OrderItemsService.ApiOrdersByOrderIdItemsByOrderItemIdGetParams): Observable<OrderItemsRootObject> {
    return this.ApiOrdersByOrderIdItemsByOrderItemIdGetResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `OrderItemsService.ApiOrdersByOrderIdItemsByOrderItemIdPutParams` containing the following parameters:
   *
   * - `orderItemId`: 
   *
   * - `orderId`: 
   *
   * - `orderItemDelta`: 
   *
   * @return Success
   */
   ApiOrdersByOrderIdItemsByOrderItemIdPutResponse(params: OrderItemsService.ApiOrdersByOrderIdItemsByOrderItemIdPutParams): Observable<HttpResponse<OrderItemsRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.orderItemDelta != null) __params = __params.set("orderItemDelta", params.orderItemDelta.toString());
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/orders/${params.orderId}/items/${params.orderItemId}`,
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
        let _body: OrderItemsRootObject = null;
        _body = _resp.body as OrderItemsRootObject
        return _resp.clone({body: _body}) as HttpResponse<OrderItemsRootObject>;
      })
    );
  }

  /**
   * @param params The `OrderItemsService.ApiOrdersByOrderIdItemsByOrderItemIdPutParams` containing the following parameters:
   *
   * - `orderItemId`: 
   *
   * - `orderId`: 
   *
   * - `orderItemDelta`: 
   *
   * @return Success
   */
   ApiOrdersByOrderIdItemsByOrderItemIdPut(params: OrderItemsService.ApiOrdersByOrderIdItemsByOrderItemIdPutParams): Observable<OrderItemsRootObject> {
    return this.ApiOrdersByOrderIdItemsByOrderItemIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `OrderItemsService.ApiOrdersByOrderIdItemsByOrderItemIdDeleteParams` containing the following parameters:
   *
   * - `orderItemId`: 
   *
   * - `orderId`:
   */
   ApiOrdersByOrderIdItemsByOrderItemIdDeleteResponse(params: OrderItemsService.ApiOrdersByOrderIdItemsByOrderItemIdDeleteParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/orders/${params.orderId}/items/${params.orderItemId}`,
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
   * @param params The `OrderItemsService.ApiOrdersByOrderIdItemsByOrderItemIdDeleteParams` containing the following parameters:
   *
   * - `orderItemId`: 
   *
   * - `orderId`:
   */
   ApiOrdersByOrderIdItemsByOrderItemIdDelete(params: OrderItemsService.ApiOrdersByOrderIdItemsByOrderItemIdDeleteParams): Observable<void> {
    return this.ApiOrdersByOrderIdItemsByOrderItemIdDeleteResponse(params).pipe(
      map(_r => _r.body)
    );
  }
}

export module OrderItemsService {

  /**
   * Parameters for ApiOrdersByOrderIdItemsGet
   */
   export interface ApiOrdersByOrderIdItemsGetParams {

    orderId: number;

    parameters?: any;
  }

  /**
   * Parameters for ApiOrdersByOrderIdItemsPost
   */
   export interface ApiOrdersByOrderIdItemsPostParams {

    orderId: number;

    orderItemDelta?: any;
  }

  /**
   * Parameters for ApiOrdersByOrderIdItemsByOrderItemIdGet
   */
   export interface ApiOrdersByOrderIdItemsByOrderItemIdGetParams {

    orderItemId: number;

    orderId: number;

    fields?: string;
  }

  /**
   * Parameters for ApiOrdersByOrderIdItemsByOrderItemIdPut
   */
   export interface ApiOrdersByOrderIdItemsByOrderItemIdPutParams {

    orderItemId: number;

    orderId: number;

    orderItemDelta?: any;
  }

  /**
   * Parameters for ApiOrdersByOrderIdItemsByOrderItemIdDelete
   */
   export interface ApiOrdersByOrderIdItemsByOrderItemIdDeleteParams {

    orderItemId: number;

    orderId: number;
  }
}
