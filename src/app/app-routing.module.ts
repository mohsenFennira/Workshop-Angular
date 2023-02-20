import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsProductsComponent } from './details-products/details-products.component';
import { ErrorComponent } from './error/error.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"404",component:ErrorComponent},
  {path:"",redirectTo:"Product",pathMatch:"full"},
  {path:"Product",component:ProductsComponent},
  {path:"Product/ProductDetails/:id",component:DetailsProductsComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"Contact",component:ContactComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
