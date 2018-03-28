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


@Injectable()
export class ManageClientsAdminService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  AdminManageClientsAdminListGetResponse(): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/admin/manageClientsAdmin/list`,
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

  AdminManageClientsAdminListGet(): Observable<void> {
    return this.AdminManageClientsAdminListGetResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ManageClientsAdminService.AdminManageClientsAdminListPostParams` containing the following parameters:
   *
   * - `PageSize`: 
   *
   * - `Page`:
   */
   AdminManageClientsAdminListPostResponse(params: ManageClientsAdminService.AdminManageClientsAdminListPostParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.PageSize != null) __params = __params.set("PageSize", params.PageSize.toString());
    if (params.Page != null) __params = __params.set("Page", params.Page.toString());
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/admin/manageClientsAdmin/list`,
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
   * @param params The `ManageClientsAdminService.AdminManageClientsAdminListPostParams` containing the following parameters:
   *
   * - `PageSize`: 
   *
   * - `Page`:
   */
   AdminManageClientsAdminListPost(params: ManageClientsAdminService.AdminManageClientsAdminListPostParams): Observable<void> {
    return this.AdminManageClientsAdminListPostResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  AdminManageClientsAdminCreateGetResponse(): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/admin/manageClientsAdmin/create`,
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

  AdminManageClientsAdminCreateGet(): Observable<void> {
    return this.AdminManageClientsAdminCreateGetResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ManageClientsAdminService.AdminManageClientsAdminCreatePostParams` containing the following parameters:
   *
   * - `continueEditing`: 
   *
   * - `RefreshTokenLifetime`: 
   *
   * - `Id`: 
   *
   * - `Enabled`: 
   *
   * - `AccessTokenLifetime`: 
   *
   * - `RedirectUrl`: 
   *
   * - `ClientSecret`: 
   *
   * - `ClientName`: 
   *
   * - `ClientId`:
   */
   AdminManageClientsAdminCreatePostResponse(params: ManageClientsAdminService.AdminManageClientsAdminCreatePostParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.continueEditing != null) __params = __params.set("continueEditing", params.continueEditing.toString());
    if (params.RefreshTokenLifetime != null) __params = __params.set("RefreshTokenLifetime", params.RefreshTokenLifetime.toString());
    if (params.Id != null) __params = __params.set("Id", params.Id.toString());
    if (params.Enabled != null) __params = __params.set("Enabled", params.Enabled.toString());
    if (params.AccessTokenLifetime != null) __params = __params.set("AccessTokenLifetime", params.AccessTokenLifetime.toString());
    if (params.RedirectUrl != null) __params = __params.set("RedirectUrl", params.RedirectUrl.toString());
    if (params.ClientSecret != null) __params = __params.set("ClientSecret", params.ClientSecret.toString());
    if (params.ClientName != null) __params = __params.set("ClientName", params.ClientName.toString());
    if (params.ClientId != null) __params = __params.set("ClientId", params.ClientId.toString());
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/admin/manageClientsAdmin/create`,
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
   * @param params The `ManageClientsAdminService.AdminManageClientsAdminCreatePostParams` containing the following parameters:
   *
   * - `continueEditing`: 
   *
   * - `RefreshTokenLifetime`: 
   *
   * - `Id`: 
   *
   * - `Enabled`: 
   *
   * - `AccessTokenLifetime`: 
   *
   * - `RedirectUrl`: 
   *
   * - `ClientSecret`: 
   *
   * - `ClientName`: 
   *
   * - `ClientId`:
   */
   AdminManageClientsAdminCreatePost(params: ManageClientsAdminService.AdminManageClientsAdminCreatePostParams): Observable<void> {
    return this.AdminManageClientsAdminCreatePostResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   AdminManageClientsAdminEditByIdGetResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/admin/manageClientsAdmin/edit/${id}`,
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
   AdminManageClientsAdminEditByIdGet(id: number): Observable<void> {
    return this.AdminManageClientsAdminEditByIdGetResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ManageClientsAdminService.AdminManageClientsAdminEditByIdPostParams` containing the following parameters:
   *
   * - `continueEditing`: 
   *
   * - `RefreshTokenLifetime`: 
   *
   * - `Id`: 
   *
   * - `Enabled`: 
   *
   * - `AccessTokenLifetime`: 
   *
   * - `RedirectUrl`: 
   *
   * - `ClientSecret`: 
   *
   * - `ClientName`: 
   *
   * - `ClientId`:
   */
   AdminManageClientsAdminEditByIdPostResponse(params: ManageClientsAdminService.AdminManageClientsAdminEditByIdPostParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.continueEditing != null) __params = __params.set("continueEditing", params.continueEditing.toString());
    if (params.RefreshTokenLifetime != null) __params = __params.set("RefreshTokenLifetime", params.RefreshTokenLifetime.toString());

    if (params.Enabled != null) __params = __params.set("Enabled", params.Enabled.toString());
    if (params.AccessTokenLifetime != null) __params = __params.set("AccessTokenLifetime", params.AccessTokenLifetime.toString());
    if (params.RedirectUrl != null) __params = __params.set("RedirectUrl", params.RedirectUrl.toString());
    if (params.ClientSecret != null) __params = __params.set("ClientSecret", params.ClientSecret.toString());
    if (params.ClientName != null) __params = __params.set("ClientName", params.ClientName.toString());
    if (params.ClientId != null) __params = __params.set("ClientId", params.ClientId.toString());
    let req = new HttpRequest<any>(
        "POST",
        this.rootUrl + `/admin/manageClientsAdmin/edit/${params.Id}`,
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
   * @param params The `ManageClientsAdminService.AdminManageClientsAdminEditByIdPostParams` containing the following parameters:
   *
   * - `continueEditing`: 
   *
   * - `RefreshTokenLifetime`: 
   *
   * - `Id`: 
   *
   * - `Enabled`: 
   *
   * - `AccessTokenLifetime`: 
   *
   * - `RedirectUrl`: 
   *
   * - `ClientSecret`: 
   *
   * - `ClientName`: 
   *
   * - `ClientId`:
   */
   AdminManageClientsAdminEditByIdPost(params: ManageClientsAdminService.AdminManageClientsAdminEditByIdPostParams): Observable<void> {
    return this.AdminManageClientsAdminEditByIdPostResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   AdminManageClientsAdminDeleteByIdPostResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/admin/manageClientsAdmin/delete/${id}`,
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
   AdminManageClientsAdminDeleteByIdPost(id: number): Observable<void> {
    return this.AdminManageClientsAdminDeleteByIdPostResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module ManageClientsAdminService {

  /**
   * Parameters for AdminManageClientsAdminListPost
   */
   export interface AdminManageClientsAdminListPostParams {

    PageSize: number;

    Page: number;
  }

  /**
   * Parameters for AdminManageClientsAdminCreatePost
   */
   export interface AdminManageClientsAdminCreatePostParams {

    continueEditing: boolean;

    RefreshTokenLifetime: number;

    Id: number;

    Enabled: boolean;

    AccessTokenLifetime: number;

    RedirectUrl?: string;

    ClientSecret?: string;

    ClientName?: string;

    ClientId?: string;
  }

  /**
   * Parameters for AdminManageClientsAdminEditByIdPost
   */
   export interface AdminManageClientsAdminEditByIdPostParams {

    continueEditing: boolean;

    RefreshTokenLifetime: number;

    Id: number;

    Enabled: boolean;

    AccessTokenLifetime: number;

    RedirectUrl?: string;

    ClientSecret?: string;

    ClientName?: string;

    ClientId?: string;
  }
}
