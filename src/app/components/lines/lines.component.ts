import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ItemHeaderService } from '../../services/item-header.service';
import { OrderItemDto, OrderDto } from '../../models';
import { Element } from '@angular/compiler';
import { UtilsService } from '../../Common/utils.service';
@Component({
    selector: 'app-so-lines',
    templateUrl: './lines.component.html',
    styleUrls: ['./lines.component.css']
})
export class SOLinesComponent implements OnInit {
    displayedColumns = ['sku', 'name', 'price', 'quantity', 'total_amount'];
    customerPay = 0;
    @Input() so: OrderDto;
    @Output() lineChange = new EventEmitter<OrderDto>();
    constructor(private itemHeaderService: ItemHeaderService, private utils: UtilsService) {

    }
    ngOnInit() {
        this.itemHeaderService.currentItem.subscribe((item) => {
            if (item) {
                if (!this.CheckExistItem(item)) {
                    item.quantity = 1;
                    let sod = new OrderItemDto();
                    sod.quantity = 1;
                    sod.productCode = item.code;
                    sod.productName = item.productName;
                    sod.unitPrice = item.price;
                    sod.totalAmount = item.price * item.quantity;
                    sod.lineId = this.so.orderItems.length;
                    sod.salesOrderCode = this.so.salesOrderCode;
                    sod.customerId = this.so.customerId;
                    sod.orderDate = this.so.orderDate;
                    this.so.orderItems.push(sod);
                } else {
                    this.so.orderItems.find(n => n.productCode === item.code).quantity++;
                }
                this.calSummany();
                this.lineChange.emit(this.so);
            }
        });
    }
    CheckExistItem(item): boolean {
        return this.so.orderItems.some(x => x.productCode === item.code);
    }
    onDeleteItem(item): void {
        var index = this.so.orderItems.indexOf(item, 0);
        if (index > -1) {
            this.so.orderItems.splice(index, 1);
        }
        this.calSummany();
    }
    calSummany() {
        this.so.totalAmount = 0;
        this.so.orderItems.forEach(n => {
            n.totalAmount = this.utils.removeChar(String(n.quantity)) * this.utils.removeChar(String(n.unitPrice));
            this.so.totalAmount += n.totalAmount;
        });
        this.so.payAmount = this.so.totalAmount;
        this.so.returnAmount = 0;
    }
    onChange(item): void {
        this.calSummany();
    }
}

