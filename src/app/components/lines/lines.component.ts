import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ItemHeaderService } from '../../services/item-header.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { OrderItemDto, OrderDto } from '../../models';
import { Element } from '@angular/compiler';
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
    constructor(private itemHeaderService: ItemHeaderService) {

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
            n.total_amount = n.quantity * n.price_incl_tax;
            this.so.order_total += n.total_amount;
        });
    }
    onChange(item): void {
        item.total_amount = item.price_incl_tax * item.quantity;
        this.calSummany();
    }
}

