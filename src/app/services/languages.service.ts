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

import { LanguagesRootObject } from '../models/languages-root-object';
import { ErrorsRootObject } from '../models/errors-root-object';

@Injectable()
export class LanguagesService extends BaseService {
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
   ApiLanguagesGetResponse(fields?: string): Observable<HttpResponse<LanguagesRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (fields != null) __params = __params.set("fields", fields.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/languages`,
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
        let _body: LanguagesRootObject = null;
        _body = _resp.body as LanguagesRootObject
        return _resp.clone({body: _body}) as HttpResponse<LanguagesRootObject>;
      })
    );
  }

  /**
   * @param fields undefined
   * @return Success
   */
   ApiLanguagesGet(fields?: string): Observable<LanguagesRootObject> {
    return this.ApiLanguagesGetResponse(fields).pipe(
      map(_r => _r.body)
    );
  }
}

export module LanguagesService {
}
