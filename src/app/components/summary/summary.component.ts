import { Component,Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { CustomersService, OrdersService} from '../../services';
import { ItemHeaderService } from '../../services/item-header.service';
import { CustomersRootObject, OrderItemDto, OrderCustomerDto } from '../../models';
import { OrderDtoVM } from '../../models/order-dto-vm';
import { OrderCustomerVM } from '../../models/order-customer-dto-vm';
@Component({
    selector: 'app-so-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})
export class SOSummaryComponent implements OnInit {
    customerSearch: FormControl = new FormControl();
    customers: OrderCustomerDto[];
    @Input() so: OrderDtoVM;
    @Output() summaryChange = new EventEmitter<OrderDtoVM>();
    constructor(private customerService: CustomersService,
        private itemHeaderService: ItemHeaderService,
        private ordersService: OrdersService) {
    }
    orderDelta: any;
    customerPay: number = 0;
    ngOnInit() {
        this.customerSearch.valueChanges
            .subscribe(keyword => {
                this.filter(keyword).subscribe(r => this.customers = r);
            });        
    }

    filter(val: string): Observable<OrderCustomerDto[]> {
        return this.customerService.ApiCustomersGet().map(r => {
            return r.customers;
        });
    }

    displayCustomerOption(c: OrderCustomerDto) {
        if (c == null) {
            return '';
        }
        return c.first_name + ' ' + c.last_name;
    }
    customerSelected(c: OrderCustomerVM) {
        this.so.customer = {
            first_name: c.first_name,
            id: c.id,
            last_name: c.last_name,
            customer_points: c.customer_points
        };
        this.summaryChange.emit(this.so);
        //this.customerSearch.setValue('');
    }
    releaseSalesOrder() {
        localStorage.setItem(this.so.id + '_salesInvoice', JSON.stringify(this.so));
        //this.orderDelta = this.ordersService.getSampleData();
        this.submit(this.so).subscribe();
    }
    submit(val: OrderDtoVM): Observable<OrderDtoVM[]> {
        debugger
        return this.ordersService.ApiOrdersCreatePost(val).map(r => {
            return r.orders;
        });
    }
}
