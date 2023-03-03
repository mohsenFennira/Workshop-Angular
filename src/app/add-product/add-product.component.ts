import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../Models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private products:ProductService,private http:HttpClient){

  }
  product: Product = new Product;
  p:Product={id: 1, title: "T-shirt 1", price: 18, quantity: 0, likes: 0,img:"./assets/img/iphone.jfif"};
// addForm(t6: NgForm) {
// console.log(t6);
// }
addForm(t6:NgForm){
  this.products.addProduct(this.product).subscribe();
}

post(p:Product){
  this.products.addProduct(p).subscribe(

  );
}

}
