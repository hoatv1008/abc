import { Component, ViewChild } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { debug } from 'util';
@Component({
  selector: 'ngx-orderhistory',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent {
    displayedColumns = ['id', 'customer_currency_code',
        'paid_date_utc', 'order_status', 'order_total'];
    dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  soService: any;
    constructor(private ordersService: OrdersService) {}
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
        this.dataSource = new MatTableDataSource<any>(this.ordersService.ApiOrdersGet());
  }
}

