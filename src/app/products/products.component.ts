import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  productList=this.products.listProdcut;
  constructor(private r:Router, private products:ProductService){

  }

 // listProducts:Product[]=[];

    buy(P:Product ){
          P.quantity--;
    }
    like(P:Product ){
      P.like++;
}
show(id:number){
  this.r.navigate(["/Product/ProductDetails", id]);
}

}
