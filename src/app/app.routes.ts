import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'product',component:ProductComponent},
    {path:'category',component:CategoryComponent}
  //  {path:'',redirectTo:'dashboard',pathMatch:'full'}
];
