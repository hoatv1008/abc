import { Component, ViewChild } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { debug } from 'util';
import { Observable } from 'rxjs/Observable';
import { OrderDto } from '../../models';
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
    orders: OrderDto[];
    constructor(private ordersService: OrdersService) { }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    
    ngOnInit() {
        this.ordersService.ApiOrdersGet().subscribe(r => {
            this.dataSource = new MatTableDataSource<any>(r.orders);
        })
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
}

