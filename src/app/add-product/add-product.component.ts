import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  p:Product={id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0,img:"./assets/img/iphone.jfif"};
addForm(t6: NgForm) {
console.log(t6);
}

}
