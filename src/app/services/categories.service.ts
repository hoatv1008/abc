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

import { CategoriesRootObject } from '../models/categories-root-object';
import { ErrorsRootObject } from '../models/errors-root-object';
import { CategoriesCountRootObject } from '../models/categories-count-root-object';

@Injectable()
export class CategoriesService extends BaseService {
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
   ApiCategoriesGetResponse(parameters?: any): Observable<HttpResponse<CategoriesRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (parameters != null) __params = __params.set("parameters", parameters.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/categories`,
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
        let _body: CategoriesRootObject = null;
        _body = _resp.body as CategoriesRootObject
        return _resp.clone({body: _body}) as HttpResponse<CategoriesRootObject>;
      })
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
   ApiCategoriesGet(parameters?: any): Observable<CategoriesRootObject> {
    return this.ApiCategoriesGetResponse(parameters).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param categoryDelta undefined
   * @return Success
   */
   ApiCategoriesPostResponse(categoryDelta?: any): Observable<HttpResponse<CategoriesRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (categoryDelta != null) __params = __params.set("categoryDelta", categoryDelta.toString());
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/categories`,
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
        let _body: CategoriesRootObject = null;
        _body = _resp.body as CategoriesRootObject
        return _resp.clone({body: _body}) as HttpResponse<CategoriesRootObject>;
      })
    );
  }

  /**
   * @param categoryDelta undefined
   * @return Success
   */
   ApiCategoriesPost(categoryDelta?: any): Observable<CategoriesRootObject> {
    return this.ApiCategoriesPostResponse(categoryDelta).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
   ApiCategoriesCountGetResponse(parameters?: any): Observable<HttpResponse<CategoriesCountRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (parameters != null) __params = __params.set("parameters", parameters.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/categories/count`,
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
        let _body: CategoriesCountRootObject = null;
        _body = _resp.body as CategoriesCountRootObject
        return _resp.clone({body: _body}) as HttpResponse<CategoriesCountRootObject>;
      })
    );
  }

  /**
   * @param parameters undefined
   * @return Success
   */
   ApiCategoriesCountGet(parameters?: any): Observable<CategoriesCountRootObject> {
    return this.ApiCategoriesCountGetResponse(parameters).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `CategoriesService.ApiCategoriesByIdGetParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `fields`: 
   *
   * @return Success
   */
   ApiCategoriesByIdGetResponse(params: CategoriesService.ApiCategoriesByIdGetParams): Observable<HttpResponse<CategoriesRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set("fields", params.fields.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/categories/${params.id}`,
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
        let _body: CategoriesRootObject = null;
        _body = _resp.body as CategoriesRootObject
        return _resp.clone({body: _body}) as HttpResponse<CategoriesRootObject>;
      })
    );
  }

  /**
   * @param params The `CategoriesService.ApiCategoriesByIdGetParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `fields`: 
   *
   * @return Success
   */
   ApiCategoriesByIdGet(params: CategoriesService.ApiCategoriesByIdGetParams): Observable<CategoriesRootObject> {
    return this.ApiCategoriesByIdGetResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `CategoriesService.ApiCategoriesByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `categoryDelta`: 
   *
   * @return Success
   */
   ApiCategoriesByIdPutResponse(params: CategoriesService.ApiCategoriesByIdPutParams): Observable<HttpResponse<CategoriesRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.categoryDelta != null) __params = __params.set("categoryDelta", params.categoryDelta.toString());
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/categories/${params.id}`,
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
        let _body: CategoriesRootObject = null;
        _body = _resp.body as CategoriesRootObject
        return _resp.clone({body: _body}) as HttpResponse<CategoriesRootObject>;
      })
    );
  }

  /**
   * @param params The `CategoriesService.ApiCategoriesByIdPutParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `categoryDelta`: 
   *
   * @return Success
   */
   ApiCategoriesByIdPut(params: CategoriesService.ApiCategoriesByIdPutParams): Observable<CategoriesRootObject> {
    return this.ApiCategoriesByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   ApiCategoriesByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/categories/${id}`,
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
   ApiCategoriesByIdDelete(id: number): Observable<void> {
    return this.ApiCategoriesByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module CategoriesService {

  /**
   * Parameters for ApiCategoriesByIdGet
   */
   export interface ApiCategoriesByIdGetParams {

    id: number;

    fields?: string;
  }

  /**
   * Parameters for ApiCategoriesByIdPut
   */
   export interface ApiCategoriesByIdPutParams {

    id: string;

    categoryDelta?: any;
  }
}
