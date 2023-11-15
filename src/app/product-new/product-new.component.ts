import { Component, OnInit } from "@angular/core";
import { Product } from "../model/Product";
import { Category } from "../model/Category";
import { Router } from "@angular/router";
import { ProductsService } from "../products.service";
import { CategoriesService } from "../categories.service";

@Component({
  selector: "app-product-new",
  templateUrl: "./product-new.component.html",
  styleUrls: ["./product-new.component.css"],
})
export class ProductNewComponent implements OnInit {
  product = new Product();
  category = new Category();

  categories: Category[] = [];

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  newProduct() {
    const product = {
      name: this.product.name,
      stock: this.product.stock,
      price: this.product.price,
      date_added: (this.product.date_added = new Date()),
      category_id: this.category,
    };

    this.productActive();

    this.productsService.newProduct(product);
    this.navigateToHome();
  }

  cancelInsert() {
    this.navigateToHome();
  }

  navigateToHome() {
    this.router.navigate(["/products"]);
  }

  
  productActive() {
    if (this.product.stock > 0) {
      this.product.active = true;
    } else {
      this.product.active = false;
    }
  }


}
