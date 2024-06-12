import { Component } from '@angular/core';
import { DserviceService } from './dservice.service';
import { MydirectiveDirective } from '../mydirective.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MydirectiveDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  dservice : DserviceService;
  constructor( dservice: DserviceService){
    this.dservice=dservice;
  }

  update(){
    this.dservice.updateCount();
  }
  

}
