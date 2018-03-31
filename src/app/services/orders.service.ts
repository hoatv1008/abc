/* tslint:disable */
import { Injectable } from '@angular/core';
import {
    HttpClient, HttpRequest, HttpResponse,
    HttpHeaders, HttpParams
} from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import { OrdersRootObject } from '../models/orders-root-object';
import { ErrorsRootObject } from '../models/errors-root-object';
import { OrdersCountRootObject } from '../models/orders-count-root-object';

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
        if (parameters != null) __params = __params.set("parameters", parameters.toString());
        let req = new HttpRequest<any>(
            "GET",
            this.rootUrl + `/api/orders`,
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
                return _resp.clone({ body: _body }) as HttpResponse<OrdersRootObject>;
            })
        );
    }

    /**
     * @param parameters undefined
     * @return Success
     */
    ApiOrdersGet(parameters?: any): Observable<OrdersRootObject> {
        return this.ApiOrdersGetResponse(parameters).pipe(
            map(_r => _r.body)
        );
    }

    /**
     * @param orderDelta undefined
     * @return Success
     */
    ApiOrdersPostResponse(orderDelta?: any): Observable<HttpResponse<OrdersRootObject>> {
        let __params = this.newParams();
        let __headers = new HttpHeaders();
        let __body: any = null;
        if (orderDelta != null) __params = __params.set("orderDelta", JSON.stringify(orderDelta));
        let req = new HttpRequest<any>(
            "POST",
            this.rootUrl + `/api/orders`,
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
                return _resp.clone({ body: _body }) as HttpResponse<OrdersRootObject>;
            })
        );
    }

    /**
     * @param orderDelta undefined
     * @return Success
     */
    ApiOrdersPost(orderDelta?: any): Observable<OrdersRootObject> {
        return this.ApiOrdersPostResponse(orderDelta).pipe(
            map(_r => _r.body)
        );
    }

    /**
     * @param parameters undefined
     * @return Success
     */
    ApiOrdersCountGetResponse(parameters?: any): Observable<HttpResponse<OrdersCountRootObject>> {
        let __params = this.newParams();
        let __headers = new HttpHeaders();
        let __body: any = null;
        if (parameters != null) __params = __params.set("parameters", parameters.toString());
        let req = new HttpRequest<any>(
            "GET",
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
                return _resp.clone({ body: _body }) as HttpResponse<OrdersCountRootObject>;
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

        if (params.fields != null) __params = __params.set("fields", params.fields.toString());
        let req = new HttpRequest<any>(
            "GET",
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
                return _resp.clone({ body: _body }) as HttpResponse<OrdersRootObject>;
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

        if (params.orderDelta != null) __params = __params.set("orderDelta", params.orderDelta.toString());
        let req = new HttpRequest<any>(
            "PUT",
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
                return _resp.clone({ body: _body }) as HttpResponse<OrdersRootObject>;
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
            "DELETE",
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

                return _resp.clone({ body: _body }) as HttpResponse<void>;
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
            "GET",
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
                return _resp.clone({ body: _body }) as HttpResponse<OrdersRootObject>;
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

    getSampleData() {
        return {
            "id": "100",
            "store_id": 1,
            "pick_up_in_store": false,
            "payment_method_system_name": "Payments.CheckMoneyOrder",
            "customer_currency_code": "USD",
            "currency_rate": 1.00000000,
            "customer_tax_display_type_id": 0,
            "vat_number": "",
            "order_subtotal_incl_tax": 1855.0000,
            "order_subtotal_excl_tax": 1855.0000,
            "order_sub_total_discount_incl_tax": 0.0000,
            "order_sub_total_discount_excl_tax": 0.0000,
            "order_shipping_incl_tax": 0.0000,
            "order_shipping_excl_tax": 0.0000,
            "payment_method_additional_fee_incl_tax": 0.0000,
            "payment_method_additional_fee_excl_tax": 0.0000,
            "tax_rates": "0:0;",
            "order_tax": 0.0000,
            "order_discount": 0.0000,
            "order_total": 1855.0000,
            "refunded_amount": 0.0000,
            "reward_points_were_added": null,
            "checkout_attribute_description": "",
            "customer_language_id": 1,
            "affiliate_id": 0,
            "customer_ip": "127.0.0.1",
            "authorization_transaction_id": "",
            "authorization_transaction_code": "",
            "authorization_transaction_result": "",
            "capture_transaction_id": "",
            "capture_transaction_result": "",
            "subscription_transaction_id": "",
            "paid_date_utc": "2018-03-27T14:16:03.557",
            "shipping_method": "Ground",
            "shipping_rate_computation_method_system_name": "Shipping.FixedByWeightByTotal",
            "custom_values_xml": "",
            "deleted": false,
            "created_on_utc": "2018-03-27T14:16:03.557",
            "customer": {
                "id": "2",
                "username": "steve_gates@nopCommerce.com",
                "email": "steve_gates@nopCommerce.com",
                "first_name": "Steve",
                "last_name": "Gates",
                "language_id": "1",
                "admin_comment": null,
                "is_tax_exempt": false,
                "has_shopping_cart_items": false,
                "active": true,
                "deleted": false,
                "is_system_account": false,
                "system_name": null,
                "last_ip_address": null,
                "created_on_utc": "2018-03-27T14:15:55.193",
                "last_login_date_utc": null,
                "last_activity_date_utc": "2018-03-27T14:15:55.193",
                "registered_in_store_id": 1,
                "role_ids": [3]
            },
            "customer_id": 2,
            "billing_address": {
                "id": "10",
                "first_name": "Steve",
                "last_name": "Gates",
                "email": "steve_gates@nopCommerce.com",
                "company": "Steve Company",
                "country_id": 1,
                "country": "United States",
                "state_province_id": 9,
                "city": "Los Angeles",
                "address1": "750 Bel Air Rd.",
                "address2": "",
                "zip_postal_code": "90077",
                "phone_number": "87654321",
                "fax_number": "",
                "customer_attributes": null,
                "created_on_utc": "2018-03-27T14:15:55.197",
                "province": "California"
            },
            "shipping_address": {
                "id": "11",
                "first_name": "Steve",
                "last_name": "Gates",
                "email": "steve_gates@nopCommerce.com",
                "company": "Steve Company",
                "country_id": 1,
                "country": "United States",
                "state_province_id": 9,
                "city": "Los Angeles",
                "address1": "750 Bel Air Rd.",
                "address2": "",
                "zip_postal_code": "90077",
                "phone_number": "87654321",
                "fax_number": "",
                "customer_attributes": null,
                "created_on_utc": "2018-03-27T14:15:55.197",
                "province": "California"
            },
            "order_items": [{
                "id": "100",
                "product_attributes": [],
                "quantity": 1,
                "unit_price_incl_tax": 1300.0000,
                "unit_price_excl_tax": 1300.0000,
                "price_incl_tax": 1300.0000,
                "price_excl_tax": 1300.0000,
                "discount_amount_incl_tax": 0.0000,
                "discount_amount_excl_tax": 0.0000,
                "original_product_cost": 0.0000,
                "attribute_description": "",
                "download_count": 0,
                "isDownload_activated": false,
                "license_download_id": 0,
                "item_weight": null,
                "rental_start_date_utc": null,
                "rental_end_date_utc": null,
                "product": {
                    "id": "17",
                    "visible_individually": true,
                    "name": "Apple iCam",
                    "localized_names": [{
                        "language_id": 1,
                        "localized_name": "Apple iCam"
                    }],
                    "short_description": "Photography becomes smart",
                    "full_description": "tif apple picked up on this and made it",
                    "show_on_home_page": false,
                    "meta_keywords": null,
                    "meta_description": null,
                    "meta_title": null,
                    "allow_customer_reviews": true,
                    "approved_rating_sum": 5,
                    "not_approved_rating_sum": 0,
                    "approved_total_reviews": 1,
                    "not_approved_total_reviews": 0,
                    "sku": "APPLE_CAM",
                    "manufacturer_part_number": null,
                    "gtin": null,
                    "is_gift_card": false,
                    "require_other_products": false,
                    "automatically_add_required_products": false,
                    "is_download": false,
                    "unlimited_downloads": false,
                    "max_number_of_downloads": 0,
                    "download_expiration_days": null,
                    "has_sample_download": false,
                    "has_user_agreement": false,
                    "is_recurring": false,
                    "recurring_cycle_length": 0,
                    "recurring_total_cycles": 0,
                    "is_rental": false,
                    "rental_price_length": 0,
                    "is_ship_enabled": true,
                    "is_free_shipping": false,
                    "ship_separately": false,
                    "additional_shipping_charge": 0.0000,
                    "is_tax_exempt": false,
                    "is_telecommunications_or_broadcasting_or_electronic_services": false,
                    "use_multiple_warehouses": false,
                    "manage_inventory_method_id": 1,
                    "stock_quantity": 10000,
                    "display_stock_availability": true,
                    "display_stock_quantity": false,
                    "min_stock_quantity": 0,
                    "notify_admin_for_quantity_below": 1,
                    "allow_back_in_stock_subscriptions": false,
                    "order_minimum_quantity": 1,
                    "order_maximum_quantity": 10000,
                    "allowed_quantities": null,
                    "allow_adding_only_existing_attribute_combinations": false,
                    "disable_buy_button": false,
                    "disable_wishlist_button": false,
                    "available_for_pre_order": false,
                    "pre_order_availability_start_date_time_utc": null,
                    "call_for_price": false,
                    "price": 1300.0000,
                    "old_price": 0.0000,
                    "product_cost": 0.0000,
                    "special_price": null,
                    "special_price_start_date_time_utc": null,
                    "special_price_end_date_time_utc": null,
                    "customer_enters_price": false,
                    "minimum_customer_entered_price": 0.0000,
                    "maximum_customer_entered_price": 0.0000,
                    "baseprice_enabled": false,
                    "baseprice_amount": 0.0000,
                    "baseprice_base_amount": 0.0000,
                    "has_tier_prices": false,
                    "has_discounts_applied": false,
                    "weight": 7.0000,
                    "length": 7.0000,
                    "width": 7.0000,
                    "height": 7.0000,
                    "available_start_date_time_utc": null,
                    "available_end_date_time_utc": null,
                    "display_order": 0,
                    "published": true,
                    "deleted": false,
                    "created_on_utc": "2018-03-27T14:15:58.723",
                    "updated_on_utc": "2018-03-27T14:15:58.723",
                    "product_type": "SimpleProduct",
                    "parent_grouped_product_id": 0,
                    "role_ids": [],
                    "discount_ids": [],
                    "store_ids": [],
                    "manufacturer_ids": [1],
                    "images": [],
                    "attributes": [],
                    "associated_product_ids": [],
                    "tags": [],
                    "vendor_id": 0,
                    "se_name": "apple-icam"
                },
                "product_id": 17
            }
            ]
        };
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
