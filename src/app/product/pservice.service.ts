import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class PserviceService {
 
  constructor(private http:HttpClient) {

    this.http.get("").subscribe(data=>{
      console.log(data,"data");
    })

   }

   getProduct():Observable<Product>{
    return  this.http.get<Product>("");

   }
}
