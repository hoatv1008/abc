import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { CustomersService, OrdersService } from '../../services';
import { ItemHeaderService } from '../../services/item-header.service';
import { CustomersRootObject, OrderItemDto, OrderCustomerDto } from '../../models';
import { OrderDto } from '../../models/order-dto';
import { UtilsService } from '../../Common/utils.service';
@Component({
    selector: 'app-so-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})
export class SOSummaryComponent implements OnInit {
    customerSearch: FormControl = new FormControl();
    customers: Observable<OrderCustomerDto[]>;
    @Input() so: OrderDto;
    @Output() summaryChange = new EventEmitter<OrderDto>();
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
            (val && item.customerName && item.customerName.toLowerCase().indexOf(val) === 0) ||
            (val && item.id == val)
        )
    }
    
    customerSelected(c: OrderCustomerDto) {
        this.so.customerId = c.id;
        this.so.customerName = c.customerName
        this.so.address = c.address;
        this.so.phone = c.phone;
        this.summaryChange.emit(this.so);
        this.customerSearch.setValue('');
    }
    releaseSalesOrder() {
        localStorage.setItem(this.so.salesOrderCode + '_salesInvoice', JSON.stringify(this.so));
        this.ordersService.ApiOrdersCreatePost(this.so).subscribe(r => {
            this.printSO();
        })
    }
    onChange(item): void {
        this.so.returnAmount = this.utils.removeChar(this.so.payAmount) - this.so.totalAmount;
    }
    printSO(): void {
        let printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;

        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
          <title>Print SO</title>
          <style>
                @media print {
                    html, body {
                        height: auto;
                    }

                    body {
                        font-size: 1.2rem;
                    }

                    
.wrap-report-order .order-id {
        word-wrap: break-word;
        word-break: break-all;
    }
                }
.wrap-print-container {
                        padding: .5em;
                        display: block;
                    }
.text-uppercase, .initialism {
    text-transform: uppercase;
}
.wrap-print-container{
font-family: monospace;
}
.wrap-report-order{
    line-height:1.32; padding:0px !important
}
.heading1 {
    font-size: 15px;
    padding-bottom: 5px;
}
.bold {
    font-weight: bold;
}
.text-left {
    text-align: left;
}

.text-right {
    text-align: right;
}

.text-center {
    text-align: center;
}

.text-justify {
    text-align: justify;
}

.text-nowrap {
    white-space: nowrap;
}

.text-lowercase {
    text-transform: lowercase;
}
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
        );
        popupWin.document.close();
    }
}
