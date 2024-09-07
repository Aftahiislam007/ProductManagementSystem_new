import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductData } from '../productmodel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {
  dataid:any;
  public product:ProductData={} as ProductData;
  constructor(private api:ApiService, private activeroute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
      this.activeroute.paramMap.subscribe((param:Params)=>{
        this.dataid = param['get']('id');
        console.log("id is", this.dataid);
      })
      this.api.getproductbyid(this.dataid).subscribe((data:any)=>{
        this.product = data;
        console.log(this.product);
      })
      
  }

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


    this.api.updateproduct(product,this.dataid).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/view-product'])

      // this.api.addproduct(product).subscribe((result)=>{
      //   console.log(result);
      //   this.router.navigate(['/view-product'])
      // })
    })
    
  }

  // update(id:number){
  //   this.api.updateproduct(this.product,this.dataid).subscribe((data:any)=>{
  //     this.router.navigate(['/view-product'])
  //   })
  // }
}
