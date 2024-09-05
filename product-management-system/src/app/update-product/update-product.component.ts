import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {
  dataid:any;
  constructor(private api:ApiService, private activeroute:ActivatedRoute, private router:Router) {
    
    
  }

  ngOnInit(): void {
      this.activeroute.paramMap.subscribe((param:Params)=>{
        this.dataid = param['get']('id');
        console.log("id is", this.dataid);
      })
  }
}
