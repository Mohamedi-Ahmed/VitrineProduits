import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../Services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ProductComponent, HttpClientModule, FormsModule],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  products: Product[] = []; // Array to hold products
  init_products: Product[] = [];
  currentIndex = 0; // Index of the currently displayed product
  currentProduct: Product | undefined; // Define currentProduct

  selectedCategory: string = ''; // Selected category for filtering

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.init_products = data;
      this.currentProduct = this.products[0]; // Set currentProduct to the first product

      // Optional: Initialize currentIndex if needed
    });
  }

  // Method to show next product
  onNextClick(): void {
    if (this.currentIndex === this.products.length - 1) {
      // Si l'index est égal à l'index du dernier produit, revenez à l'index 0
      this.currentIndex = 0;
    } else {
      // Sinon, incrémentez l'index normalement
      this.currentIndex++;
    }

    // Update currentProduct when changing currentIndex
    this.currentProduct = this.products[this.currentIndex];
  }

  // Method to show previous product
  onPrevClick(): void {
    if (this.currentIndex === 0) {
      // Si l'index est 0, retournez au dernier produit (dernier index)
      this.currentIndex = this.products.length - 1;
    } else {
      // Sinon, décrémentez l'index normalement
      this.currentIndex--;
    }
    // Update currentProduct when changing currentIndex
    this.currentProduct = this.products[this.currentIndex];
  }

  // Method to filter products by category
  filterProductsByCategory(category: string): void {
    this.products = this.init_products.filter((product) => product.categorie === category);
    this.currentIndex = 0;

    // Update currentProduct if the filtered list is not empty
    if (this.products.length > 0) {
      this.currentProduct = this.products[0];
    } else {
      this.currentProduct = undefined; // No products to display
    }
    console.log(this.currentProduct);
  }
}
