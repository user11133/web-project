import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { error } from 'console';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-allproducts',
  imports: [ProductComponent],
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.css'
})
export class AllproductsComponent implements OnInit{
  
  //les attributs
  products? : any[];
  //le service qui communique avec l API
  ps = inject(ProductService);
  //initaliser les attributs
  ngOnInit(): void {
    this.ps.getAllProducts().subscribe({
      next :( data ) =>this.products=data,
      error:( error )=> alert("Erreur")
    });
  }

}
