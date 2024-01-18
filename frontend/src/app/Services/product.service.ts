import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: string,
  titre: string,
  description: string,
  prix: string,
  categorie: string,
  stock: string,
  image: string
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = 'https://back-projetvitrineproduitsam.azurewebsites.net/api/product';
  products: Observable<Product[]>; // Declare products as an Observable

  constructor(private http: HttpClient) {
    this.products = this.getProducts(); // Initialize products in the constructor
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

}
