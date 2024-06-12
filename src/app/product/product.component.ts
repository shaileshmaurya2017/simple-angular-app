import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  a = signal(0);

  hasValue = computed(()=>{

    return this.a()<1;

  })

  product = signal({
    id:5,
    name:'mobile'
  })
  ngOnInit(){
console.log("signal a :",this.a())

  }

  increment(){
    this.a.update(m=>m+1);
  }
}
