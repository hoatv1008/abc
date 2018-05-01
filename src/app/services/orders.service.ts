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

import { OrdersRootObject } from '../models/orders-root-object';
import { ErrorsRootObject } from '../models/errors-root-object';
import { OrdersCountRootObject } from '../models/orders-count-root-object';
import { OrderDto } from '../models';
@Injectable()
export class OrdersService extends BaseService {
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
  ApiOrdersGetResponse(parameters?: any): Observable<HttpResponse<OrdersRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (parameters != null) __params = __params.set('parameters', parameters.toString());
    let req = new HttpRequest<any>(
      'GET',
        this.rootUrl + `/api/services/app/OrderSevice/GetAll`,
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
        let _body: OrdersRootObject = null;
        _body = _resp.body as OrdersRootObject
        return _resp.clone({body: _body}) as HttpResponse<OrdersRootObject>;
      })
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
    ApiOrdersGet(parameters?: any): Observable<any> {
    return this.ApiOrdersGetResponse(parameters).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
    ApiOrdersCountGetResponse(parameters?: any): Observable<HttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (parameters != null) __params = __params.set('parameters', parameters.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/orders/count`,
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
        let _body: OrdersCountRootObject = null;
        _body = _resp.body as OrdersCountRootObject
        return _resp.clone({body: _body}) as HttpResponse<OrdersCountRootObject>;
      })
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
  ApiOrdersCountGet(parameters?: any): Observable<OrdersCountRootObject> {
    return this.ApiOrdersCountGetResponse(parameters).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `OrdersService.ApiOrdersByIdGetParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fields`:
   *
   * @return Success
   */
  ApiOrdersByIdGetResponse(params: OrdersService.ApiOrdersByIdGetParams): Observable<HttpResponse<OrdersRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/orders/${params.id}`,
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
        let _body: OrdersRootObject = null;
        _body = _resp.body as OrdersRootObject
        return _resp.clone({body: _body}) as HttpResponse<OrdersRootObject>;
      })
    );
  }

  /**
   * @param params The `OrdersService.ApiOrdersByIdGetParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `fields`:
   *
   * @return Success
   */
  ApiOrdersByIdGet(params: OrdersService.ApiOrdersByIdGetParams): Observable<OrdersRootObject> {
    return this.ApiOrdersByIdGetResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `OrdersService.ApiOrdersByIdPutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `orderDelta`:
   *
   * @return Success
   */
  ApiOrdersByIdPutResponse(params: OrdersService.ApiOrdersByIdPutParams): Observable<HttpResponse<OrdersRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.orderDelta != null) __params = __params.set('orderDelta', params.orderDelta.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/orders/${params.id}`,
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
        let _body: OrdersRootObject = null;
        _body = _resp.body as OrdersRootObject
        return _resp.clone({body: _body}) as HttpResponse<OrdersRootObject>;
      })
    );
  }

  /**
   * @param params The `OrdersService.ApiOrdersByIdPutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `orderDelta`:
   *
   * @return Success
   */
  ApiOrdersByIdPut(params: OrdersService.ApiOrdersByIdPutParams): Observable<OrdersRootObject> {
    return this.ApiOrdersByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
  ApiOrdersByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/orders/${id}`,
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
  ApiOrdersByIdDelete(id: number): Observable<void> {
    return this.ApiOrdersByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param customer_id undefined
   * @return Success
   */
  ApiOrdersCustomerByCustomer_idGetResponse(customerId: number): Observable<HttpResponse<OrdersRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
        this.rootUrl + `/api/orders/customer/${customerId}`,
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
        let _body: OrdersRootObject = null;
        _body = _resp.body as OrdersRootObject
        return _resp.clone({body: _body}) as HttpResponse<OrdersRootObject>;
      })
    );
  }

  /**
   * @param customer_id undefined
   * @return Success
   */
  ApiOrdersCustomerByCustomer_idGet(customerId: number): Observable<OrdersRootObject> {
    return this.ApiOrdersCustomerByCustomer_idGetResponse(customerId).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param orderDelta undefined
   * @return Success
   */
    ApiOrdersCreatePostResponse(orderDelta?: OrderDto): Observable<HttpResponse<OrdersRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = orderDelta;
    let req = new HttpRequest<any>(
      'POST',
        this.rootUrl + `/api/services/app/OrderSevice/Create`,
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
        let _body: OrdersRootObject = null;
        _body = _resp.body as OrdersRootObject
        return _resp.clone({body: _body}) as HttpResponse<OrdersRootObject>;
      })
    );
  }

  /**
   * @param orderDelta undefined
   * @return Success
   */
    ApiOrdersCreatePost(orderDelta?: OrderDto): Observable<OrdersRootObject> {
    return this.ApiOrdersCreatePostResponse(orderDelta).pipe(
      map(_r => _r.body)
    );
  }
}

export module OrdersService {

  /**
   * Parameters for ApiOrdersByIdGet
   */
  export interface ApiOrdersByIdGetParams {
    id: number;
    fields?: string;
  }

  /**
   * Parameters for ApiOrdersByIdPut
   */
  export interface ApiOrdersByIdPutParams {
    id: string;
    orderDelta?: any;
  }
}
