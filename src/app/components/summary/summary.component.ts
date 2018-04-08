import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { CustomersService, OrdersService } from '../../services';
import { ItemHeaderService } from '../../services/item-header.service';
import { CustomersRootObject, OrderItemDto, OrderCustomerDto } from '../../models';
import { OrderDtoVM } from '../../models/order-dto-vm';
import { OrderCustomerVM } from '../../models/order-customer-dto-vm';
import { UtilsService } from '../../Common/utils.service';
@Component({
    selector: 'app-so-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})
export class SOSummaryComponent implements OnInit {
    customerSearch: FormControl = new FormControl();
    customers: Observable<OrderCustomerDto[]>;
    @Input() so: OrderDtoVM;
    @Output() summaryChange = new EventEmitter<OrderDtoVM>();
    lstCustomer = JSON.parse(localStorage.getItem('lstCustomers'));
    constructor(private customerService: CustomersService,
        private itemHeaderService: ItemHeaderService,
        private ordersService: OrdersService,
        private utils: UtilsService) {
    }

    ngOnInit() {
        this.customers = this.customerSearch.valueChanges
            .pipe(
            startWith(''),
            map(val => this.filter(val))
            );
    }

    filter(val: string): OrderCustomerDto[] {
        return this.lstCustomer.filter(item =>
            (val && item.first_name && item.first_name.toLowerCase().indexOf(val) === 0) ||
            (val && item.last_name && item.last_name.toLowerCase().indexOf(val) === 0)
        )
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
        this.ordersService.ApiOrdersCreatePost(this.so).subscribe(r => {
            console.log(r.orders);
        })
    }
    onChange(item): void {
        this.so.return_amount = this.utils.removeChar(this.so.pay_amount) - this.so.order_total;
    }
}
