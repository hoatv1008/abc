/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Contains global configuration for API services
 */
@Injectable()
export class ApiConfiguration {
  rootUrl: string = "http://backend.posabc.vn";
  callbackUrl: string = "http://localhost:4200/login";
  clientId: string = "754b0372-f0c5-47db-9d48-0d51ff2aa7d7";
  clientSecret: string = "fca53d3a-3ed2-4985-9f29-812a3dc3ee4b";
}
