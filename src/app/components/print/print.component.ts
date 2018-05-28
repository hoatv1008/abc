import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { ProductsService } from '../../services';
import { ItemHeaderService } from '../../services/item-header.service';
import { ProductDto, ProductsRootObjectDto, OrderDto } from '../../models';


@Component({
    selector: 'app-print',
    templateUrl: './print.component.html',
    styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
    @Input() so: OrderDto;
    @Output() summaryChange = new EventEmitter<OrderDto>();
    productSearch: FormControl = new FormControl();
    products: Observable<ProductDto[]>;
    lstProducts: ProductDto[];
    constructor(private productService: ProductsService, private itemHeaderService: ItemHeaderService) {
    }

    ngOnInit() {
    }
}
