import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { CategoriesService } from "../../services";
import { CategoriesRootObject, CategoryDto, OrderDto } from "../../models";
import { ItemHeaderService } from '../../services/item-header.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    lstSO = new Array<OrderDto>();
    currentSO = new OrderDto();
    customerPay: number = 0;
    constructor(private itemHeaderService: ItemHeaderService) { }

    ngOnInit() {        
        this.currentSO = this.createSO();
        this.lstSO.push(this.currentSO);        
    }
    addSO() {
        let newSo = this.createSO();
        this.lstSO.push(newSo);
        this.currentSO = newSo;
    }
    createSO() {
        let soNew = new OrderDto();
        soNew.customerId = 1;
        soNew.customerName = "Vang lai";
        soNew.orderDate = new Date();
        soNew.salesOrderCode = 'SOD' + Math.floor(Math.random() * 99999);
        soNew.orderStatus = 'Complete';
        let oldSO = this.lstSO.filter(n => n.selected == true)[0];
        if (oldSO)
            oldSO.selected = false;
        soNew.selected = true;
        soNew.orderItems = [];        
        return soNew;
    }
    selectSO(so: OrderDto){
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
    
}
