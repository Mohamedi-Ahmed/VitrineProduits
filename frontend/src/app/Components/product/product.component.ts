// Importation des services et composants nécessaires depuis l'application
import { Component, Input, OnInit } from "@angular/core";
import { Product, ProductService } from "../../Services/product.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-products",
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: "./product.component.html",
    styleUrl: "./product.component.css",
})
export class ProductComponent implements OnInit {
    @Input() currentIndex!: number; // Input to receive current product index
    Products!: Product[];

    constructor(public productService: ProductService) {}

    ngOnInit() {
        this.productService.getProducts().subscribe((products: any) => {
            this.Products = products;
            console.log(this.Products);
        });
    }



    // Optional: Method to check if the current product is available
    isCurrentProductAvailable(): boolean {
        return this.currentIndex >= 0 && this.currentIndex < this.Products.length;
    }


}
