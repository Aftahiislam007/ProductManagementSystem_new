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
      this.api.deleteproduct(id).subscribe((res)=>{

      })
    }

  
    
  this.getproduct();
  }
}
