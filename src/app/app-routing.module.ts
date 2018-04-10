import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdidasiComponent}from './adidasi/adidasi.component';
import{DashboardComponent}from'./dashboard/dashboard.component';
import{DetaliiAdidasiComponent} from'./detalii-adidasi/detalii-adidasi.component';
const routes: Routes = [
  
  { path: 'adidasi', component: AdidasiComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'detail/:id', component: DetaliiAdidasiComponent },
  { path: 'adidasi/detail/:id', component: DetaliiAdidasiComponent },
  {path:'',redirectTo:'/dashboard',pathMatch:'full'}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule {
  
 }
