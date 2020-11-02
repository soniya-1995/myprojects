import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { DropdownmenuComponent } from './components/dropdownmenu/dropdownmenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MumbaiComponent } from './components/mumbai/mumbai.component';
import { DelhiComponent } from './components/delhi/delhi.component';
import { BanglureComponent } from './components/banglure/banglure.component';
import { DubaiComponent } from './components/dubai/dubai.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginpageComponent,
    DropdownmenuComponent,
    FooterComponent,
    MumbaiComponent,
    DelhiComponent,
    BanglureComponent,
    DubaiComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
