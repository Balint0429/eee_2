// biciklik.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-biciklik',
  templateUrl: './biciklik.component.html',
  styleUrls: ['./biciklik.component.css']
})
export class BiciklikComponent implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';

  constructor(
    private http: HttpClient,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }  

  getProducts(): void {
    this.http.get<any[]>('http://172.16.16.157:8000/api/termekek/25')
      .subscribe(products => {
        console.log('Products retrieved:', products);
        this.products = products;
        this.filteredProducts = products;

      });
  }
  

}
