import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {delay, switchMap} from 'rxjs/operators';
import {IProduct} from '../../product';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    /* dùng 2 subscribe cùng nhau - k tối ưu ?*/
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.productService.findProductById(id).subscribe(product => this.product = product);
    });
    // const paramMap = this.activatedRoute.snapshot.paramMap;
    // const id = paramMap.get('id');
    // this.productService.findProductById(id).subscribe(product => this.product = product);

  }

  backToList () {
    this.router.navigate(['/products']);
  }

}
