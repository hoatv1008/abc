/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Contains global configuration for API services
 */
@Injectable()
export class ApiConfiguration {
    // prod
    rootUrl: string = "http://backend.posabc.vn";
    static baseUrl = "http://po.posabc.vn/";
    callbackUrl: string = "http://localhost:5000/login";
  clientId: string = "754b0372-f0c5-47db-9d48-0d51ff2aa7d7";
  clientSecret: string = "fca53d3a-3ed2-4985-9f29-812a3dc3ee4b";
    
    // base
    //static baseUrl = "http://localhost:4200";
    //rootUrl: string = "http://localhost:21021";
    static readonly authorization = {
        encrptedAuthTokenName: 'enc_auth_token'
    };
  //callbackUrl: string = "http://localhost:4200/login";
  //clientId: string = "68efc300-68f0-44cf-9e74-ef2fe81853cf";
  //clientSecret: string = "0027ad2a-a408-458e-b225-cd6d6eb2a89c";
}
