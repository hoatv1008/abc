import { Component, ViewChild } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { debug } from 'util';
import { Observable } from 'rxjs/Observable';
import { OrderDto } from '../../models';
import { ItemHeaderService } from '../../services/item-header.service';
import { Router } from '@angular/router';
@Component({
    selector: 'ngx-orderhistory',
    templateUrl: './order-history.component.html',
    styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent {
    displayedColumns = ['salesOrderCode', 'customerName',
        'orderDate', 'orderStatus', 'totalAmount', 'action'];
    dataSource = new MatTableDataSource<any>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    orders: OrderDto[];
    linkIndex: string = '/';
    constructor(private ordersService: OrdersService, private itemHeaderService: ItemHeaderService, private _route: Router, ) { }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    ngOnInit() {
        this.ordersService.ApiOrdersGet().subscribe(r => {
            this.dataSource = new MatTableDataSource<any>(r.result.items);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        })
    }
    ngAfterViewInit() {

    }
    viewDetailSO(so: OrderDto) {
        debugger
        this.itemHeaderService.changeViewDetail(so);
        this._route.navigate([this.linkIndex]);
    }
}

