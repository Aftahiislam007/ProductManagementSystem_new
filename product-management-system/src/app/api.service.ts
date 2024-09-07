import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductData } from './productmodel';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //adding product

  addproduct(data: ProductData) {
    return this.http.post('http://localhost:3000/product', data);
  }

  //display product

  getproduct() {
    return this.http.get<ProductData[]>('http://localhost:3000/product');
  }

  //delete product

  deleteproduct(id:number) {
    return this.http.delete('http://localhost:3000/product'+id);
  }

  //update product

  updateproduct(product:ProductData, id:number) {
    return this.http.put<ProductData>('http://localhost:3000/product/'+id,product);
  }

  //on edit product

  getproductbyid(id:string) {
    return this.http.get<ProductData>('http://localhost:3000/product/'+id);
  }
}
