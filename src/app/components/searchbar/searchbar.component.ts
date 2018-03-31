import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
// import { of } from 'rxjs/observable/of';
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
  products: ProductDto[];

    constructor(private catalog: ProductsService, private itemHeaderService: ItemHeaderService) {

  }

  ngOnInit() {
    this.productSearch.valueChanges
    .subscribe(keyword => {
      this.filter(keyword).subscribe(r => this.products = r);
    });
  }

    filter(val: string): Observable<ProductDto[]> {
        debugger
    return this.catalog.ApiProductsGet().map(r => {
      return r.products;
    });
  }

  productSelected(c: ProductDto) {
    // save into current sales order
      this.itemHeaderService.changeItem(c);
    
  }
}
