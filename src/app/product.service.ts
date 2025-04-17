import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//regrouper le acces a l API 
export class ProductService {
  api='https://fakestoreapi.com/docs#tag/Carts/operation/deleteCart';
  client = inject (HttpClient);//l objet qui permet de communiquer avec l API
  constructor(/*public client:HttpClient*/)//same thing
   { 

   }
   getAllProducts(){
    return this.client.get<any[]>(this.api);
   }
   getProductById(id:number){
    return this.client.get<any>(this.api+'/'+id)
   }
}
