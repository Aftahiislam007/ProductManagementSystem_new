import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  // onSubmit(data:any){
  //   console.log(data)
  // }

  productName: string = '';
  productDescription: string = '';
  productCategory: string = '';
  productQuantity: number | null = null;
  productPrice: number | null = null;
  productCreateDate: string = '';
}
