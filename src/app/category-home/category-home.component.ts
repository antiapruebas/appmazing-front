import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit {
  categories: any =[];

  constructor(private categoriesService: CategoriesService, private router: Router,) { }

  ngOnInit() { this.categoriesService.getCategories().subscribe((data) => {
    this.categories=data;
  });
  }

  openDetailForm(row: any) {
    // this.router.navigate(["/category", row.id]);
    console.log("works")
  }

  editCategoryDetail(contact: any) {
    // this.router.navigate(['/category/edit', category]);
    console.log("works");
  }


  
  displayedColumns: string[] = [
    'id',
    'name',
    'actions',
  ]



}
