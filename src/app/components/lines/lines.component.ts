import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ItemHeaderService } from '../../services/item-header.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { OrderItemDto } from '../../models';
import { OrderDtoVM } from '../../models/order-dto-vm';
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
    @Input() so: OrderDtoVM;
    @Output() lineChange = new EventEmitter<OrderDtoVM>();
    constructor(private itemHeaderService: ItemHeaderService, private utils : UtilsService) {

    }
    ngOnInit() {
        this.itemHeaderService.currentItem.subscribe((item) => {
            if (item) {
                if (!this.CheckExistItem(item)) {
                    
                    item.quantity = 1;  
                    let sod = {
                        quantity : 1,
                        price_incl_tax: item.price,
                        product: item,
                        product_id: item.sku,
                        total_amount: 0
                    }                    
                    this.so.order_items.push(sod);
                } else {
                    this.so.order_items.find(n => n.product_id === item.sku).quantity++;
                }
                this.calSummany();
                this.lineChange.emit(this.so);
            }
        });
    }
    CheckExistItem(item): boolean {
        return this.so.order_items.some(x => x.product_id === item.sku);
    }
    onDeleteItem(item): void {
        var index = this.so.order_items.indexOf(item, 0);
        if (index > -1) {
            this.so.order_items.splice(index, 1);
        }
        this.calSummany();
    }
    calSummany() {
        this.so.order_total = 0;
        this.so.order_items.forEach(n => {
            n.total_amount = this.utils.removeChar(String(n.quantity)) * this.utils.removeChar(String(n.price_incl_tax));
            this.so.order_total += n.total_amount;
        });
    }
    //onChange(item): void {
    //    item.total_amount = item.price_incl_tax * item.quantity;
    //    this.calSummany();
    //}
    onChange(item): void {
        let quantity = item.quantity;
        let price_incl_tax = item.price_incl_tax;
        if (String(quantity).length === 0) {
            quantity = 0;
        }
        if (String(price_incl_tax).length === 0) {
            price_incl_tax = 0;
        }
        quantity = this.utils.removeChar(String(quantity));
        price_incl_tax = this.utils.removeChar(String(price_incl_tax));       
        item.quantity = this.utils.formatCurrencyWithDot(quantity);
        item.price_incl_tax = this.utils.formatCurrencyWithDot(price_incl_tax);        
        this.calSummany();
    }
}

