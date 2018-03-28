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

import { CustomerRolesRootObject } from '../models/customer-roles-root-object';
import { ErrorsRootObject } from '../models/errors-root-object';

@Injectable()
export class CustomerRolesService extends BaseService {
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
   ApiCustomer_rolesGetResponse(fields?: string): Observable<HttpResponse<CustomerRolesRootObject>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (fields != null) __params = __params.set("fields", fields.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/customer_roles`,
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
        let _body: CustomerRolesRootObject = null;
        _body = _resp.body as CustomerRolesRootObject
        return _resp.clone({body: _body}) as HttpResponse<CustomerRolesRootObject>;
      })
    );
  }

  /**
   * @param fields undefined
   * @return Success
   */
   ApiCustomer_rolesGet(fields?: string): Observable<CustomerRolesRootObject> {
    return this.ApiCustomer_rolesGetResponse(fields).pipe(
      map(_r => _r.body)
    );
  }
}

export module CustomerRolesService {
}
