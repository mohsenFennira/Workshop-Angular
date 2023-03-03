import { HttpClient } from '@angular/common/http';
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

  constructor(private r:Router, private products:ProductService,private http:HttpClient){

  }
  ngOnInit(): void {
    this.GetAllproduct();
  }

  product!:Product[] ;

    buy(P:Product ){
          P.quantity--;
    }
    like(P:Product ){
      P.likes++;
}
p!:Product;
show(id:number){
  this.r.navigate(["/Product/ProductDetails", id]);
}
delete(p:Product){
   this.products.deleteProduct(p.id).subscribe();
}
post(p:Product){
  this.products.addProduct(p).subscribe();
}
GetAllproduct(){
  this.products.getAllproducts().subscribe(data=>{this.product=data})
}
GetProductById(id:number){
this.products.getProductById(id).subscribe(data=>{this.p=data})
}
}
