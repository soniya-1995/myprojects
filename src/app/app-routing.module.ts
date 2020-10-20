import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownmenuComponent } from './components/dropdownmenu/dropdownmenu.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {

    path:"",
    component:HomeComponent

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
