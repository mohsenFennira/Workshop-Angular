import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  listProdcut:Product[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0,img:"./assets/img/iphone.jfif"},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0,img:"./assets/img/mouh.png"},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0,img:"./assets/img/mouh.png"}, ]
}
