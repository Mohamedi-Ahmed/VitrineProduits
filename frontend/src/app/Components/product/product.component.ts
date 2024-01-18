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
    styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
    @Input()
    @Input() currentIndex!: number; // Input to receive current product index
    @Input() products: Product[] = []; // Input to receive products array
    constructor(public productService: ProductService) {}

    ngOnInit() {
        this.productService.getProducts().subscribe((products: Product[]) => {
            this.products = products;
            console.log(this.products);
        });
    }

    // Optional: Method to check if the current product is available
    isCurrentProductAvailable(): boolean {
        return this.currentIndex >= 0 && this.currentIndex < this.products.length;
    }


}
