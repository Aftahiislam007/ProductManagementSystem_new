import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ProductData } from '../productmodel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css',
})
export class ViewProductComponent implements OnInit {
  // data: any;
  product: undefined | ProductData[];
  id: any;
  searchTerm: any;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getproduct();
  }
  getproduct() {
    this.api.getproduct().subscribe((res) => {
      this.product = res;
      console.log(res);
    });
  }

  //delete

  deleteproduct(id:number){
    if (confirm('Are you sure to delete?')){
      this.api.deleteProduct(id).subscribe(()=>{
          this.product = this.product?.filter(item => item.id !== id) || [];
      });
    }
  this.getproduct();
  }

  get filteredProducts() {
    if (!this.product) return [];  // Handle undefined product array
    return this.product.filter(item => 
      item.productName.toLowerCase().includes(this.searchTerm?.toLowerCase() || '')
    );
  }
}

