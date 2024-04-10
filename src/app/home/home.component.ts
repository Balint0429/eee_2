import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  markak = [
    'brand1.jpg',
    'brand2.jpg',
    'brand3.jpg',
    'brand4.jpg',
    'brand5.jpg',
  ];
  products = [
    { name: 'Bicó', description: 'Alkamasz városi ingázásra és kényelmes ', price: 19.99, image: 'kerekpar1.jpg' },
    { name: 'Product 2', description: 'Erős és strapabíró kerékpár túrázáshoz', price: 299.99, image: 'kerekpar2.jpg' },
    { name: 'Product 3', description: 'Könnyű és gyors városi bringa', price: 149.99, image: 'kerekpar1.jpg' },
    { name: 'Product 4', description: 'Robusztus hegyi kerékpár extrém terepre', price: 499.99, image: 'kerekpar2.jpg' },
    { name: 'Product 5', description: 'Stílusos vintage stílusú bringa', price: 249.99, image: 'kerekpar1.jpg' },
    { name: 'Product 6', description: 'Modern és kényelmes elektromos kerékpár', price: 899.99, image: 'kerekpar2.jpg' }
  ];
}