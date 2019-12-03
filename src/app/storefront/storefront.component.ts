import { Component, OnInit } from '@angular/core';
import { Product } from './products.model';
import { ProductsService } from './products.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.scss']
})

export class StorefrontComponent implements OnInit {

  Products: Product[] = [];
  private ProductsSub: Subscription;
  constructor(public productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts();
    this.ProductsSub = this.productsService.getProductsUpdateListener()
      .subscribe((Products: Product[]) => {
        this.Products = Products;
      });
  }

  ngOnDestroy() {
    if (this.ProductsSub) {
      this.ProductsSub.unsubscribe();
    }
  }

}
