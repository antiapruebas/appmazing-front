import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Category } from '../model/Category';
import { Product } from '../model/Product';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  category: Category;
  categories:Category[] = [];

  constructor(private productService: ProductsService, private categoriesService: CategoriesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe(data =>{
      this.product= data

    })
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  updateProduct() {
    this.productActive();
    this.productService.updateProduct(this.product);
    this.navigateProductDetail();
  
  }

  cancelUpdate() {
    this.navigateProductDetail();
  }

  navigateProductDetail() {
    this.router.navigate(['/product', this.route.snapshot.params['id']])
  }

  productActive() {
    if (this.product.stock > 0) {
      this.product.active = true;
    } else {
      this.product.active = false;
    }
  }



}