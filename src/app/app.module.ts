import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ContactHomeComponent } from "./contact-home/contact-home.component";
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule,
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";
import { ProductHomeComponent } from "./product-home/product-home.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ContactNewComponent } from "./contact-new/contact-new.component";
import { FormsModule } from "@angular/forms";
import { ProductNewComponent } from "./product-new/product-new.component";
import { ContactEditComponent } from "./contact-edit/contact-edit.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ContactDeleteComponent } from "./contact-delete/contact-delete.component";
import { ProductDeleteComponent } from "./product-delete/product-delete.component";
import { ChartsComponent } from "./charts/charts.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { CategoryHomeComponent } from './category-home/category-home.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactHomeComponent,
    ContactDetailComponent,
    ProductHomeComponent,
    ProductDetailComponent,
    ContactNewComponent,
    ProductNewComponent,
    ContactEditComponent,
    ProductEditComponent,
    ContactDeleteComponent,
    ProductDeleteComponent,
    ChartsComponent,
    CategoryHomeComponent,
    CategoryDetailComponent,
    CategoryNewComponent,
    CategoryEditComponent,
  ],
  entryComponents: [ContactDeleteComponent, ProductDeleteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    NgxChartsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
