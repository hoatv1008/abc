import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { ProductsService } from '../../services';
import { ItemHeaderService } from '../../services/item-header.service';
import { ProductDto, ProductsRootObjectDto } from '../../models';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.css']
})
export class SOSearchbarComponent implements OnInit {

    productSearch: FormControl = new FormControl();
    products: Observable<ProductDto[]>;
    lstProducts = JSON.parse(localStorage.getItem('lstProducts'));
    constructor(private productService: ProductsService, private itemHeaderService: ItemHeaderService) {
    }

    ngOnInit() {
        this.products = this.productSearch.valueChanges
            .pipe(
            startWith(''),
            map(val => this.filter(val))
            );
    }

    filter(val: string): ProductDto[] {
        return this.lstProducts.filter(item =>
            (val && item.productName && item.productName.toLowerCase().indexOf(val) === 0) ||
            (val && item.code && item.code.toLowerCase().indexOf(val) === 0)
        )
    }

    productSelected(c: ProductDto) {
        // save into current sales order
        this.itemHeaderService.changeItem(c);
        this.productSearch.setValue('');
    }
}
