import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { CategoriesService, OrdersService } from "../../services";
import { CategoriesRootObject, CategoryDto, OrderDto } from "../../models";
import { ItemHeaderService } from '../../services/item-header.service';
import { MatDialog } from '@angular/material';
import { OrderHistoryComponent } from '../order-history/order-history.component';
import { NotificationsService } from 'angular4-notify';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    @Output() viewDetailSO = new EventEmitter<OrderDto>();
    lstSO = new Array<OrderDto>();
    currentSO = new OrderDto();
    customerPay: number = 0;
    countSO: number = 0;
    constructor(private itemHeaderService: ItemHeaderService,
        private ordersService: OrdersService,
        public dialog: MatDialog,
        private notificationsService: NotificationsService
    ) {
        
    }

    ngOnInit() {
        this.currentSO = this.createSO();
        this.lstSO.push(this.currentSO);
        abp.event.on('abp.notifications.received', userNotification => {
            let data = userNotification.notification.data;
            if (userNotification.notification.data.type == 'HomeABC.Admin.Application.Common.NewSalesOrderNotifice') {
                if (data.success == true) {
                    this.countSO++;
                    this.notificationsService.addInfo('Bạn có 1 đơn hàng mới');
                } 
            }
        });
    }
    addSO(so: OrderDto = null) {
        let newSo = this.createSO();
        if (so) {
            let oldSO = this.lstSO.filter(n => n.selected == true)[0];
            if (oldSO)
                oldSO.selected = false;
            newSo = so;
        }
        this.lstSO.push(newSo);
        this.currentSO = newSo;
    }
    createSO() {
        let soNew = new OrderDto();
        soNew.customerId = 1;
        soNew.customerName = "Vang lai";
        soNew.orderDate = new Date();
        soNew.salesOrderCode = 'SOD' + Math.floor(Math.random() * 99999);
        soNew.orderStatus = 'New';
        let oldSO = this.lstSO.filter(n => n.selected == true)[0];
        if (oldSO)
            oldSO.selected = false;
        soNew.selected = true;
        soNew.orderItems = [];
        return soNew;
    }
    selectSO(so: OrderDto) {
        let oldSO = this.lstSO.filter(n => n.selected == true)[0];
        if (oldSO)
            oldSO.selected = false;
        so.selected = true;
        this.currentSO = so;
    }
    removeSO(so: OrderDto) {
        if (this.lstSO.length <= 1) {
            this.lstSO = [];
            this.addSO();
        } else {
            var index = this.lstSO.indexOf(so, 0);
            if (index > -1) {
                this.lstSO.splice(index, 1);
            }
            this.lstSO[0].selected = true;
            this.currentSO = this.lstSO[0];
        }
    }
    logout() {
        localStorage.removeItem('currentUser');
        window.location.reload();
    }
    openDialog() {
        const dialogRef = this.dialog.open(OrderHistoryComponent, {
            height: '80%',
            width: '150%'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
        const sub = dialogRef.componentInstance.addSO.subscribe((n) => {
            this.addSO(n);
        });
    }
    resetNotifice() {
        this.countSO = 0;
    }
}
