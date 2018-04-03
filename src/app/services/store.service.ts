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

import { StoresRootObject } from '../models/stores-root-object';
import { ErrorsRootObject } from '../models/errors-root-object';
@Injectable()
export class StoreService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param fields undefined
   * @return Success
   */
  ApiCurrent_storeGetResponse(fields?: string): Observable<HttpResponse<StoresRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (fields != null) __params = __params.set('fields', fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/current_store`,
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
        let _body: StoresRootObject = null;
        _body = _resp.body as StoresRootObject
        return _resp.clone({body: _body}) as HttpResponse<StoresRootObject>;
      })
    );
  }

  /**
   * @param fields undefined
   * @return Success
   */
  ApiCurrent_storeGet(fields?: string): Observable<StoresRootObject> {
    return this.ApiCurrent_storeGetResponse(fields).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param fields undefined
   * @return Success
   */
  ApiStoresGetResponse(fields?: string): Observable<HttpResponse<StoresRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (fields != null) __params = __params.set('fields', fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stores`,
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
        let _body: StoresRootObject = null;
        _body = _resp.body as StoresRootObject
        return _resp.clone({body: _body}) as HttpResponse<StoresRootObject>;
      })
    );
  }

  /**
   * @param fields undefined
   * @return Success
   */
  ApiStoresGet(fields?: string): Observable<StoresRootObject> {
    return this.ApiStoresGetResponse(fields).pipe(
      map(_r => _r.body)
    );
  }
}

export module StoreService {
}
