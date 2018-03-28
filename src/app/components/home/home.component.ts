import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { CategoriesService } from "../../services";
import { CategoriesRootObject, CategoryDto } from "../../models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // $ => Observable
  categories$: Observable<CategoryDto[]>;

  constructor(private categoryService: CategoriesService) { }

  ngOnInit() {
      // this.getAllCategories();
  }

  getAllCategories(): void {
      this.categoryService
          .ApiCategoriesGet()
          .subscribe(c => this.categories$ = of(c.categories));
  }
}
