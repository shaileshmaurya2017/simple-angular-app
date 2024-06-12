import { Component, inject } from '@angular/core';
import { DserviceService } from '../dashboard/dservice.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  constructor(){


  }

  mycount : number = 0;
  dservice = inject(DserviceService);

  ngOnInit(){

    this.mycount = this.dservice.getCount();

  }


}
