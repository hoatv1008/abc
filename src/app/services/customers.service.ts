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

import { CustomersRootObject } from '../models/customers-root-object';
import { ErrorsRootObject } from '../models/errors-root-object';
import { CustomersCountRootObject } from '../models/customers-count-root-object';

@Injectable()
export class CustomersService extends BaseService {
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
   ApiCustomersGetResponse(parameters?: any): Observable<HttpResponse<CustomersRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (parameters != null) __params = __params.set("parameters", parameters.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/customers`,
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
        let _body: CustomersRootObject = null;
        _body = _resp.body as CustomersRootObject
        return _resp.clone({body: _body}) as HttpResponse<CustomersRootObject>;
      })
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
   ApiCustomersGet(parameters?: any): Observable<CustomersRootObject> {
    return this.ApiCustomersGetResponse(parameters).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param customerDelta undefined
   * @return Success
   */
   ApiCustomersPostResponse(customerDelta?: any): Observable<HttpResponse<CustomersRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (customerDelta != null) __params = __params.set("customerDelta", customerDelta.toString());
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/customers`,
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
        let _body: CustomersRootObject = null;
        _body = _resp.body as CustomersRootObject
        return _resp.clone({body: _body}) as HttpResponse<CustomersRootObject>;
      })
    );
  }

  /**
   * @param customerDelta undefined
   * @return Success
   */
   ApiCustomersPost(customerDelta?: any): Observable<CustomersRootObject> {
    return this.ApiCustomersPostResponse(customerDelta).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `CustomersService.ApiCustomersByIdGetParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `fields`: 
   *
   * @return Success
   */
   ApiCustomersByIdGetResponse(params: CustomersService.ApiCustomersByIdGetParams): Observable<HttpResponse<CustomersRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set("fields", params.fields.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/customers/${params.id}`,
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
        let _body: CustomersRootObject = null;
        _body = _resp.body as CustomersRootObject
        return _resp.clone({body: _body}) as HttpResponse<CustomersRootObject>;
      })
    );
  }

  /**
   * @param params The `CustomersService.ApiCustomersByIdGetParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `fields`: 
   *
   * @return Success
   */
   ApiCustomersByIdGet(params: CustomersService.ApiCustomersByIdGetParams): Observable<CustomersRootObject> {
    return this.ApiCustomersByIdGetResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `CustomersService.ApiCustomersByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `customerDelta`: 
   *
   * @return Success
   */
   ApiCustomersByIdPutResponse(params: CustomersService.ApiCustomersByIdPutParams): Observable<HttpResponse<CustomersRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.customerDelta != null) __params = __params.set("customerDelta", params.customerDelta.toString());
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/customers/${params.id}`,
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
        let _body: CustomersRootObject = null;
        _body = _resp.body as CustomersRootObject
        return _resp.clone({body: _body}) as HttpResponse<CustomersRootObject>;
      })
    );
  }

  /**
   * @param params The `CustomersService.ApiCustomersByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `customerDelta`: 
   *
   * @return Success
   */
   ApiCustomersByIdPut(params: CustomersService.ApiCustomersByIdPutParams): Observable<CustomersRootObject> {
    return this.ApiCustomersByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   ApiCustomersByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/customers/${id}`,
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
   ApiCustomersByIdDelete(id: number): Observable<void> {
    return this.ApiCustomersByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @return Success
   */
   ApiCustomersCountGetResponse(): Observable<HttpResponse<CustomersCountRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/customers/count`,
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
        let _body: CustomersCountRootObject = null;
        _body = _resp.body as CustomersCountRootObject
        return _resp.clone({body: _body}) as HttpResponse<CustomersCountRootObject>;
      })
    );
  }

  /**
   * @return Success
   */
   ApiCustomersCountGet(): Observable<CustomersCountRootObject> {
    return this.ApiCustomersCountGetResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
   ApiCustomersSearchGetResponse(parameters?: any): Observable<HttpResponse<CustomersRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (parameters != null) __params = __params.set("parameters", parameters.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/customers/search`,
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
        let _body: CustomersRootObject = null;
        _body = _resp.body as CustomersRootObject
        return _resp.clone({body: _body}) as HttpResponse<CustomersRootObject>;
      })
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
   ApiCustomersSearchGet(parameters?: any): Observable<CustomersRootObject> {
    return this.ApiCustomersSearchGetResponse(parameters).pipe(
      map(_r => _r.body)
    );
  }
}

export module CustomersService {

  /**
   * Parameters for ApiCustomersByIdGet
   */
   export interface ApiCustomersByIdGetParams {

    id: number;

    fields?: string;
  }

  /**
   * Parameters for ApiCustomersByIdPut
   */
   export interface ApiCustomersByIdPutParams {

    id: string;

    customerDelta?: any;
  }
}
