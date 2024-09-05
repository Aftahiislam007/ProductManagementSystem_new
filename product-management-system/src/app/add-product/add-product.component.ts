import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ProductData } from '../productmodel';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  
//   product = {
//     productId: '',
//     productName: '',
//     productDescription: '',
//     productCategory: '',
//     productQuantity: '',
//     productPrice: '',
//     productCreateDate: '',
//   };
// addproduct: any;
  
  onSubmit(form:NgForm){
    if (!form.valid) {
      console.log(form.value);
      return;
    }

    const product: ProductData = {
      productId: form.value.productId,
      productName: form.value.productName,
      productDescription: form.value.productDescription,
      productCategory: form.value.productCategory,
      productQuantity: form.value.productQuantity,
      productPrice: form.value.productPrice,
      productCreateDate: form.value.productCreateDate,
      id: form.value.id
    };
    
    console.log(product);

    this.api.addproduct(product).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/view-product'])
    })
  }

  constructor(private api:ApiService, private router:Router){}

  ngOnInit(): void{

  }

  // adddata(data:ProductData){
  //   // console.log(data)
  //   this.api.addproduct(data).subscribe((result)=>{
  //     console.log(result);
  //     this.router.navigate(['/view-product'])
  //   })
  // }
}
