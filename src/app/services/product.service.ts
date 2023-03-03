import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
   /*listProdcut:Product[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0,img:"./assets/img/iphone.jfif"},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0,img:"./assets/img/mouh.png"},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0,img:"./assets/img/mouh.png"}, ]
*/
    ///url du Backend
    urlGetAllProduct="http://localhost:8081/retrieveAllProduct";
    urlGetProductById="http://localhost:8081/retrieveProductById";


    url="http://localhost:8081/addProduct";
    getAllproducts()
    {
      return this.http.get<Product[]>(this.urlGetAllProduct);
    }
    getProductById(id:number)
    {
      return this.http.get<Product>(this.urlGetProductById+"/$id");
    }
    addProduct(p:Product){
                return this.http.post<Product>(this.url, p);
    }
    updateproduct(id:number,p:Product){
      return this.http.put(this.url+'%$id',p)
    }
    deleteProduct(id:number){
      return this.http.delete(this.url+'%$id');
    }
}
