import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productId: number;
  constructor(private productService: ProductsService, public dialogRef: MatDialogRef<ProductDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {productId: number}, private router: Router) { 
      this.productId = data.productId;
    }

  ngOnInit() {
  }

  confirm(): void{
    this.productService.deleteProduct(this.productId);
    this.dialogRef.close();
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(['/products']);
  }

}