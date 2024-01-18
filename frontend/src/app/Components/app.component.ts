import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { ProductService, Product} from '../Services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ProductComponent, HttpClientModule]
})
export class AppComponent implements OnInit {
  title = 'frontend';
  products: Product[] = []; // Array to hold products
  currentIndex = 0;         // Index of the currently displayed product

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      // Optional: Initialize currentIndex if needed
    });
  }

  // Method to show next product
  onNextClick(): void {
    if (this.currentIndex < this.products.length - 1) {
      this.currentIndex++;
    }
  }

  // Method to show previous product
  onPrevClick(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  
}

