import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DserviceService {
  a:number = 0;
  count = signal(this.a);
  constructor() { }

  
  updateCount(){
    this.a=this.a+1;
    this.count.set(this.a);
    console.log("a:",this.a);
    console.log("count:",this.count());
  }
  getCount(){
    
    console.log("get a:",this.a);
    console.log("get count:",this.count());
    return this.count();
  }

}
