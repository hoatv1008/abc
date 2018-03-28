import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { CustomersService } from '../../services';
import { CustomerDto, CustomersRootObject } from '../../models';

@Component({
  selector: 'app-so-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SOSummaryComponent implements OnInit {

  customerSearch: FormControl = new FormControl();
  customers: CustomerDto[];

  // TODO
  // define current SO in some where global, not here
  currentSO = {
    customer: {
      customerName: '',
      customerPoints: 0
    },
    exchangedPoints: 0,
    exchangedRate: 0,
    subTotal: 0,
    total: 0,
    customerPay: 0,
    refund: 0,
    notes: ''
  };

  constructor(private customerService: CustomersService) { }

  ngOnInit() {
    this.customerSearch.valueChanges
    .subscribe(keyword => {
      this.filter(keyword).subscribe(r => this.customers = r);
    });
  }

  filter(val: string): Observable<CustomerDto[]> {
    return this.customerService.ApiCustomersGet().map(r => {
      return r.customers;
    });
  }

  displayCustomerOption(c: CustomerDto) {
    if (c == null) {
      return '';
    }

    return c.first_name + ' ' + c.last_name;
  }

  customerSelected(c: CustomerDto) {
    // save into current sales order

    this.currentSO = {
      customer: {
        customerName: this.displayCustomerOption(c),
        customerPoints: 10
      },
      exchangedPoints: 5,
      exchangedRate: 1000,
      subTotal: 100000,
      total: 95000,
      customerPay: 200000,
      refund: 105000,
      notes: 'no notes here'
    };
  }

}
