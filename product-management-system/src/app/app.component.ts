import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-management-system';
                           
  addproduct = new FormGroup({ 
    username: new FormControl('', [Validators.required])
  });
}
 