import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-biciklik',
  templateUrl: './biciklik.component.html',
  styleUrls: ['./biciklik.component.css']
})
export class BiciklikComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }  

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        console.log('Products retrieved:', products);
        this.products = products;
      });
  }
}
