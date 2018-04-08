import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { CategoriesService } from "../../services";
import { CategoriesRootObject, CategoryDto } from "../../models";
import { OrderDtoVM } from '../../models/order-dto-vm';
import { ItemHeaderService } from '../../services/item-header.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    lstSO = new Array<OrderDtoVM>();
    currentSO = new OrderDtoVM();
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
        let soNew = new OrderDtoVM();
        soNew.customer = {
            first_name: 'Khach hang vang lai',
            id: '010101010',
            last_name: '',
            customer_points: 0
        }
        soNew.id = 'SOD' + Math.floor(Math.random() * 99999);
        soNew.order_status  = 'Complete';
        let oldSO = this.lstSO.filter(n => n.selected == true)[0];
        if (oldSO)
            oldSO.selected = false;
        soNew.selected = true;
        soNew.order_items = [];        
        return soNew;
    }
    selectSO(so: OrderDtoVM){
        let oldSO = this.lstSO.filter(n => n.selected == true)[0];
        if (oldSO)
            oldSO.selected = false;
        so.selected = true;
        this.currentSO = so;
    }
    removeSO(so: OrderDtoVM) {
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

}
