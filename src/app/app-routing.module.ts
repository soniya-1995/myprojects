import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownmenuComponent } from './components/dropdownmenu/dropdownmenu.component';
import { HomeComponent } from './components/home/home.component';
import { MumbaiComponent } from './components/mumbai/mumbai.component';
import { DelhiComponent } from './components/delhi/delhi.component';
import { BanglureComponent } from './components/banglure/banglure.component';
import { DubaiComponent } from './components/dubai/dubai.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  {

    path:"",
    component:HomeComponent

  },
  
  {
    path:"mumbai",
    component:MumbaiComponent
  },
  {
    path:"delhi",
    component:DelhiComponent
  },
  {
    path:"banglur",
    component:BanglureComponent
  },
  {
    path:"dubai",
    component:DubaiComponent 
  },
  {
    path: "header",
    component :HeaderComponent
  },
  
  {
    path:"loginpage",
    component: LoginpageComponent 
  },
  {
    path:"register",
    component:RegisterComponent 
  },
  {
    path :"footer",
    component:FooterComponent,
  },
  {
    path:"menu",
    component:DropdownmenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
