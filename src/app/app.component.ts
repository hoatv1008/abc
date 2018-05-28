import { Component, OnInit } from '@angular/core';
import { CustomersService, ProductsService } from './services';
import { OrderCustomerDto } from './models';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { SignalRHelper } from './Common/SignalRHelper';
import { ApiConfiguration } from './api-configuration';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    token: string;
    constructor(private customerService: CustomersService,
        private productService: ProductsService,
        private apiConfig: ApiConfiguration
    ) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    res: any
    ngOnInit() {

        SignalRHelper.initSignalR(this.apiConfig.rootUrl, this.token);

        this.customerService.getListCustomer().subscribe(r => {
            localStorage.setItem('lstCustomers', JSON.stringify(r.body.result.items));
        });
        this.productService.getListProduct().subscribe(r => {
            localStorage.setItem('lstProducts', JSON.stringify(r.body.result.items));
        });
    }

}
