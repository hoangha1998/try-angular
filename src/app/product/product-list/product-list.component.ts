import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';
import {IProduct} from '../../product';
import {ActivatedRoute} from '@angular/router';
import {query} from '@angular/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:  IProduct[] = [];
  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(ps => this.productList = ps);

    this.activateRoute.queryParamMap.subscribe(
      q => {
        const orderBy = q.get('oder_by');
        console.log(orderBy);
      }
    );
  }

}
