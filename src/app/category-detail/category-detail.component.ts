import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  category: any

  constructor(
    private categoryiesService: CategoriesService,
    private route: ActivatedRoute, 
    private router: Router, 
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

    this.categoryiesService.getCategory(this.route.snapshot.params["id"])
    .subscribe((data) => {
      this.category = data;
    });
  }

  closeCategory(){
    this.router.navigate(['/categories']);
  }

  editCategory(){
  this.router.navigate(['/category/edit', this.route.snapshot.params['id']]);
  
  }


}
