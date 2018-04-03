import { Component, ViewChild } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ProductsService } from '../../services';
import { debug } from 'util';
import { Observable } from 'rxjs/Observable';
import { OrderDto } from '../../models/order-dto';
@Component({
    selector: 'ngx-orderhistory',
    templateUrl: './order-history.component.html',
    styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent {
    displayedColumns = ['id', 'customer_language_id', 'customer',
        'paid_date_utc', 'order_status', 'order_total'];
    dataSource = new MatTableDataSource<any>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    soService: any;
    data: any;
    orders: OrderDto[];
    constructor(private ordersService: OrdersService, private catalog: ProductsService) { }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    ngOnInit() {
        this.filter('').subscribe(r => this.orders = r);
    }

    filter(val: string): Observable<OrderDto[]> {
        return this.ordersService.ApiOrdersGet().map(r => {
            this.data = r.orders;
            this.dataSource = new MatTableDataSource<any>(this.data);
            return r.orders;
        });
    }
}

