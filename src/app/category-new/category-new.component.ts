import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {
  name: string;

  constructor(private categoryService: CategoriesService, private router: Router) { }

  ngOnInit() {}

  
newCategory() {
  const category = {
    name:this.name,
  }

  this.categoryService.newCategory(category);
  this.navigateToHome();
  }


  cancelInsert(){
    this.navigateToHome();}

    navigateToHome(){
      this.router.navigate(['/categories']);
    }

}
