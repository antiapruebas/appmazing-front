import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoriesService } from "../categories.service";

@Component({
  selector: "app-category-edit",
  templateUrl: "./category-edit.component.html",
  styleUrls: ["./category-edit.component.css"],
})
export class CategoryEditComponent implements OnInit {
  category: any;

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoriesService
      .getCategory(this.route.snapshot.params["id"])
      .subscribe((data) => {
        this.category = data;
      });
  }

  updateCategory() {
    this.categoriesService.updateCategory(this.category);
    this.navigateCategoriesDetail();
  }
  cancelUpdate() {
    this.navigateCategoriesDetail();
  }

  navigateCategoriesDetail() {
    this.router.navigate(["/category", this.route.snapshot.params["id"]]);
  }
}
