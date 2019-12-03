import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './products.model';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})

export class ProductsService {

    private products: Product[] = [];
    private productsUpdated = new Subject<Product[]>();


    constructor(private http: HttpClient, private router: Router) {}

    getProducts() {
      this.http.get<{message: string, products: any}>(
        'http://localhost:3000/api/sqlserver'
        )
        .pipe(map(productData => {
          return productData.products.map(product => {
            console.log(product);
            return {
              id: product.nProductId,
              cName: product.cName,
              cDescription: product.cDescription,
              nUnitPrice: product.nUnitPrice,
              nStock: product.nStock,
              nAverageRating: product.nAverageRating,
              nMinimumStock: product.nMinimumStock
            };
          });
        }))
        .subscribe((idUpdatedProducts) => {
          this.products = idUpdatedProducts;
          this.productsUpdated.next([...this.products]);
        });
    }

    getProductsUpdateListener() {
      return this.productsUpdated.asObservable();
    }


    getProduct(id: string) {
      // tslint:disable-next-line: max-line-length
      return this.http.get<{ nProductId: number, cName: string, cDescription: string, nUnitPrice: number, nStock: number, nAverageRating: number, nMinimumStock: number }>('http://localhost:3000/api/sqlserver' + id);
    }

}

