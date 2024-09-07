import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ProductData } from '../productmodel';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  products: ProductData[] = [];
  categoryLimit = 10;
  categoryError = false;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.api.getproduct().subscribe((data: ProductData[]) => {
      this.products = data;
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      console.log('Form is not valid:', form.value);
      return;
    }

    const newProductCategory = form.value.productCategory;
    const categoryCount = this.products.filter(
      (product) => product.productCategory === newProductCategory
    ).length;

    if (categoryCount > this.categoryLimit) {
      this.categoryError = true; // Set the error flag to true
      return;
    } else {
      this.categoryError = false;
    }

    const product: ProductData = {
      productId: form.value.productId,
      productName: form.value.productName,
      productDescription: form.value.productDescription,
      productCategory: form.value.productCategory,
      productQuantity: form.value.productQuantity,
      productPrice: form.value.productPrice,
      productCreateDate: form.value.productCreateDate,
      id: form.value.id,
    };

    this.products.push(product);
    console.log('Product added locally:', product);

    this.api.addproduct(product).subscribe(
      (result) => {
        console.log('Product added to server:', result);
        this.router.navigate(['/view-product']);
      },
      (error) => {
        console.error('Error while adding product:', error);
      }
    );
  }

  // adddata(data:ProductData){
  //   // console.log(data)
  //   this.api.addproduct(data).subscribe((result)=>{
  //     console.log(result);
  //     this.router.navigate(['/view-product'])
  //   })
  // }
}
