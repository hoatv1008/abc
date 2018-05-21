import { Component, ViewChild, EventEmitter } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { debug } from 'util';
import { Observable } from 'rxjs/Observable';
import { OrderDto } from '../../models';
import { ItemHeaderService } from '../../services/item-header.service';
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
    addSO = new EventEmitter();
    constructor(private ordersService: OrdersService, private itemHeaderService: ItemHeaderService, ) { }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    ngOnInit() {
        this.ordersService.ApiOrdersGet({
            'SkipCount': 0,
            'MaxResultCount': 1000}).subscribe(r => {
            this.dataSource = new MatTableDataSource<any>(r.result.items);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        })
    }
    ngAfterViewInit() {

    }

    viewDetailSO(so: OrderDto) {
        this.ordersService.ApiOrdersByIdGet(so).subscribe(n => {
            if (n && n.result) {
                n.result.selected = true;
                this.orders = n.result;
                this.addSO.emit(this.orders);
                return true;
            }
        })
    }
}

