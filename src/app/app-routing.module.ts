import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import {ProductHomeComponent} from './product-home/product-home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ChartsComponent } from './charts/charts.component';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';



const routes: Routes = [
  {path: '', component: ChartsComponent},
  {path: 'contacts', component: ContactHomeComponent},
  {path: 'contact/new', component: ContactNewComponent},
  {path: 'contact/edit/:id', component: ContactEditComponent},
  {path: 'contact/:id', component: ContactDetailComponent},
  {path: 'products', component: ProductHomeComponent},
  {path: 'product/new', component: ProductNewComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'categories', component: CategoryHomeComponent},
  {path: 'category/new', component: CategoryNewComponent},
  {path: 'category/edit/:id', component: CategoryEditComponent},
  {path: 'category/:id', component: CategoryDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }